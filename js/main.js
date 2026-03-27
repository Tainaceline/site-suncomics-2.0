// Menu Mobile
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    this.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Slider
class Slider {
    constructor(sliderElement) {
        this.slider = sliderElement;
        this.sliderContainer = this.slider.querySelector('.slider-container');
        this.slides = this.sliderContainer.children;
        this.currentSlide = 0;
        this.autoplayInterval = 5000;
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.init();
    }

    init() {
        this.createNavigationDots();
        this.startAutoplay();
        this.addTouchEvents();
    }

    createNavigationDots() {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slider-dots';
        
        for (let i = 0; i < this.slides.length; i++) {
            const dot = document.createElement('button');
            dot.className = 'slider-dot';
            dot.addEventListener('click', () => this.goToSlide(i));
            dotsContainer.appendChild(dot);
        }
        
        this.slider.appendChild(dotsContainer);
        this.dots = dotsContainer.children;
        this.updateDots();
    }

    updateDots() {
        Array.from(this.dots).forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.sliderContainer.style.transform = `translateX(-${this.currentSlide * 25}%)`;
        this.updateDots();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(this.currentSlide);
    }

    startAutoplay() {
        this.autoplayTimer = setInterval(() => this.nextSlide(), this.autoplayInterval);
    }

    stopAutoplay() {
        clearInterval(this.autoplayTimer);
    }

    addTouchEvents() {
        this.slider.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
            this.stopAutoplay();
        });

        this.slider.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].clientX;
            this.handleSwipe();
            this.startAutoplay();
        });
    }

    handleSwipe() {
        const swipeDistance = this.touchEndX - this.touchStartX;
        if (Math.abs(swipeDistance) > 50) {
            if (swipeDistance > 0) {
                this.prevSlide();
            } else {
                this.nextSlide();
            }
        }
    }
}

// Carrinho de Compras
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.total = 0;
        this.updateTotal();
    }

    addItem(item) {
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({ ...item, quantity: 1 });
        }
        this.updateTotal();
        this.saveToLocalStorage();
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.updateTotal();
        this.saveToLocalStorage();
    }

    updateQuantity(itemId, quantity) {
        const item = this.items.find(i => i.id === itemId);
        if (item) {
            item.quantity = Math.max(0, quantity);
            if (item.quantity === 0) {
                this.removeItem(itemId);
            }
        }
        this.updateTotal();
        this.saveToLocalStorage();
    }

    updateTotal() {
        this.total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    saveToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    clear() {
        this.items = [];
        this.total = 0;
        this.saveToLocalStorage();
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar slider
    const slider = new Slider(document.querySelector('.slider'));
    
    // Inicializar carrinho
    window.cart = new ShoppingCart();
    
    // Adicionar funcionalidade de pesquisa
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = e.target.elements.pesquisa.value.toLowerCase();
        // Implementar lógica de pesquisa aqui
    });
});
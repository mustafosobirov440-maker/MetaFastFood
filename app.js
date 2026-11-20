// --- MetaFastFood JavaScript Database & Logic ---

// 20 ta mahsulot bazasi (Har birida small, medium, large hajm va narxlari bilan)
const productsData = [
    // BURGERLAR
    {
        id: 1,
        name: "Classic Burger",
        category: "burger",
        desc: "Mol go'shti kotleti, maxsus sous, yangi pomidor va pishloq.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
        prices: { small: 25000, medium: 32000, large: 40000 },
        isSpecial: true,
        oldPrice: "48 000 so'm"
    },
    {
        id: 2,
        name: "Cheeseburger",
        category: "burger",
        desc: "Ikki qavatli chedar pishloqi va sershira mol go'shti kotleti.",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=500&q=80",
        prices: { small: 28000, medium: 35000, large: 43000 }
    },
    {
        id: 3,
        name: "Double Burger",
        category: "burger",
        desc: "Katta ishtaha uchun ikki barobar go'sht va maxsus barbekyu sous.",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80",
        prices: { small: 35000, medium: 42000, large: 52000 },
        isSpecial: true,
        oldPrice: "60 000 so'm"
    },
    {
        id: 4,
        name: "Chicken Burger",
        category: "burger",
        desc: "Tovuq go'shti panerovka qilingan, xarsildoq va mazali.",
        image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=500&q=80",
        prices: { small: 23000, medium: 30000, large: 38000 }
    },
    {
        id: 5,
        name: "BBQ Burger",
        category: "burger",
        desc: "Dudlangan barra bekon, barbekyu sous va piyoz halqalari.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80",
        prices: { small: 30000, medium: 38000, large: 46000 }
    },

    // PITSALAR
    {
        id: 6,
        name: "Margarita Pizza",
        category: "pizza",
        desc: "Mozzarella pishloqi, maxsus pomidor sousi va yangi rayhon.",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=500&q=80",
        prices: { small: 45000, medium: 65000, large: 85000 }
    },
    {
        id: 7,
        name: "Pepperoni Pizza",
        category: "pizza",
        desc: "Achchiqqina pepperoni kolbasalari va eritilgan pishloq.",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80",
        prices: { small: 50000, medium: 72000, large: 95000 },
        isSpecial: true,
        oldPrice: "110 000 so'm"
    },
    {
        id: 8,
        name: "Chicken Pizza",
        category: "pizza",
        desc: "Tovuq filesi, qo'ziqorin, qora zaytun va mozzarella.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
        prices: { small: 48000, medium: 68000, large: 88000 }
    },

    // FASTFOOD
    {
        id: 9,
        name: "Hot Dog",
        category: "fastfood",
        desc: "Shirin sosiska, bulochka, xantal va ketchup uyg'unligi.",
        image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=500&q=80",
        prices: { small: 12000, medium: 16000, large: 20000 }
    },
    {
        id: 10,
        name: "Lavash",
        category: "fastfood",
        desc: "Yupqa lavash ichida mazali go'sht, maxsus sous va pishloq.",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80",
        prices: { small: 26000, medium: 34000, large: 42000 }
    },
    {
        id: 11,
        name: "Donar",
        category: "fastfood",
        desc: "Maxsus non ichida barra mol go'shti va yangi sabzavotlar.",
        image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=500&q=80",
        prices: { small: 24000, medium: 31000, large: 39000 }
    },
    {
        id: 12,
        name: "Chicken Nuggets",
        category: "fastfood",
        desc: "6 dona xarsildoq tovuq nagetslari va tanlov uchun sous.",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80",
        prices: { small: 18000, medium: 25000, large: 32000 }
    },
    {
        id: 13,
        name: "Fri Kartoshka",
        category: "fastfood",
        desc: "Tilla rangdagi yumshoq va xarsildoq fri kartoshkasi.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80",
        prices: { small: 10000, medium: 15000, large: 20000 }
    },
    {
        id: 14,
        name: "Club Sandwich",
        category: "fastfood",
        desc: "Uch qavatli tost noni, tuxum, tovuq go'shti va pomidor.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80",
        prices: { small: 22000, medium: 28000, large: 35000 }
    },
    {
        id: 15,
        name: "Chicken Wings",
        category: "fastfood",
        desc: "O'tkir qizil murchda qovurilgan tovuq qanotchalari.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=80",
        prices: { small: 28000, medium: 36000, large: 45000 }
    },

    // ICHIMLIKLAR
    {
        id: 16,
        name: "Coca-Cola",
        category: "drink",
        desc: "Muzdek tetiklashtiruvchi gazli ichimlik.",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        prices: { small: 8000, medium: 12000, large: 16000 }
    },
    {
        id: 17,
        name: "Fanta",
        category: "drink",
        desc: "Apelsin ta'mli mazali gazli ichimlik.",
        image: "https://images.unsplash.com/photo-1624552184280-9e963caebe99?auto=format&fit=crop&w=500&q=80",
        prices: { small: 8000, medium: 12000, large: 16000 }
    },
    {
        id: 18,
        name: "Sprite",
        category: "drink",
        desc: "Limon va laym ta'mli tetiklashtiruvchi ichimlik.",
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=500&q=80",
        prices: { small: 8000, medium: 12000, large: 16000 }
    },
    {
        id: 19,
        name: "Ice Tea",
        category: "drink",
        desc: "Shaftoli ta'mli salqin muzdek choy.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80",
        prices: { small: 10000, medium: 14000, large: 18000 }
    },
    {
        id: 20,
        name: "Milkshake",
        category: "drink",
        desc: "Qulupnayli qalin va shirin sutli kokteyl.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80",
        prices: { small: 15000, medium: 20000, large: 25000 }
    }
];

// State variables
let cart = JSON.parse(localStorage.getItem('meta_cart')) || [];
let activeCategory = 'all';
let searchQuery = '';

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const specialsGrid = document.getElementById('specials-grid');
const categoryFilters = document.getElementById('category-filters');
const searchInput = document.getElementById('search-input');
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckout = document.getElementById('close-checkout');
const checkoutForm = document.getElementById('checkout-form');
const checkoutTotalPrice = document.getElementById('checkout-total-price');
const detailModal = document.getElementById('detail-modal');
const detailModalBody = document.getElementById('detail-modal-body');
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');
const toast = document.getElementById('toast');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderSpecials();
    updateCartUI();
    initEventListeners();
});

// Event Listeners
function initEventListeners() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderProducts();
    });

    // Category filter buttons
    categoryFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            activeCategory = e.target.getAttribute('data-category');
            renderProducts();
        }
    });

    // Cart modal open/close
    cartBtn.addEventListener('click', () => cartModal.classList.add('active'));
    closeCart.addEventListener('click', () => cartModal.classList.remove('active'));
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) cartModal.classList.remove('active');
    });

    // Checkout modal open/close
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast("Savatchangiz bo'sh!");
            return;
        }
        cartModal.classList.remove('active');
        checkoutTotalPrice.textContent = formatPrice(calculateTotal());
        checkoutModal.classList.add('active');
    });
    closeCheckout.addEventListener('click', () => checkoutModal.classList.remove('active'));
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) checkoutModal.classList.remove('active');
    });

    // Detail modal close on click outside
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) detailModal.classList.remove('active');
    });

    // Checkout form submit
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('cust-name').value;
        const phone = document.getElementById('cust-phone').value;
        const address = document.getElementById('cust-address').value;

        if (!name || !phone || !address) {
            showToast("Iltimos, barcha majburiy maydonlarni to'ldiring!");
            return;
        }

        // Success order
        checkoutModal.classList.remove('active');
        checkoutForm.reset();
        cart = [];
        saveCart();
        updateCartUI();
        showToast("Buyurtmangiz muvaffaqiyatli qabul qilindi! Operatorimiz tez orada bog'lanadi.");
    });
}

// Render Products with Size Selector
function renderProducts() {
    productsGrid.innerHTML = '';

    let filtered = productsData.filter(product => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery) || product.desc.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--gray-color); padding: 40px;">Hech qanday mahsulot topilmadi.</p>`;
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300?text=MetaFastFood'">
            </div>
            <div class="product-details">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <div class="size-selector" data-id="${product.id}">
                    <button class="size-btn active" data-size="small">Small</button>
                    <button class="size-btn" data-size="medium">Medium</button>
                    <button class="size-btn" data-size="large">Large</button>
                </div>
                <div class="product-footer">
                    <span class="product-price" id="price-${product.id}">${formatPrice(product.prices.small)}</span>
                    <div class="card-actions">
                        <button class="detail-btn" onclick="openDetailModal(${product.id})" title="Batafsil"><i class="fa-solid fa-eye"></i></button>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})" title="Savatchaga qo'shish"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    // Add size selector event listeners
    document.querySelectorAll('.size-selector').forEach(selector => {
        const productId = selector.getAttribute('data-id');
        const buttons = selector.querySelectorAll('.size-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const size = btn.getAttribute('data-size');
                const product = productsData.find(p => p.id == productId);
                const priceElement = document.getElementById(`price-${productId}`);
                priceElement.textContent = formatPrice(product.prices[size]);
            });
        });
    });
}

// Render Specials
function renderSpecials() {
    specialsGrid.innerHTML = '';
    const specials = productsData.filter(p => p.isSpecial);

    specials.forEach(product => {
        const card = document.createElement('div');
        card.className = 'special-card';
        card.innerHTML = `
            <span class="special-badge">Chegirma</span>
            <div class="special-img">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300?text=MetaFastFood'">
            </div>
            <div class="special-info">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <div class="price-box">
                    <span class="old-price">${product.oldPrice}</span>
                    <span class="new-price">${formatPrice(product.prices.small)} (Small)</span>
                </div>
                <button class="btn btn-primary btn-block" onclick="addToCart(${product.id}, 'small')">Aksiyada olish</button>
            </div>
        `;
        specialsGrid.appendChild(card);
    });
}

// Add to Cart Function
function addToCart(productId, forcedSize = null) {
    const product = productsData.find(p => p.id === productId);
    let selectedSize = 'small';

    if (forcedSize) {
        selectedSize = forcedSize;
    } else {
        const selector = document.querySelector(`.size-selector[data-id="${productId}"]`);
        if (selector) {
            const activeSizeBtn = selector.querySelector('.size-btn.active');
            if (activeSizeBtn) {
                selectedSize = activeSizeBtn.getAttribute('data-size');
            }
        }
    }

    const price = product.prices[selectedSize];
    const cartItemId = `${productId}-${selectedSize}`;

    const existingItem = cart.find(item => item.cartItemId === cartItemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            cartItemId,
            id: product.id,
            name: product.name,
            image: product.image,
            size: selectedSize,
            price: price,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} (${selectedSize.toUpperCase()}) savatchaga qo'shildi!`);
}

// Update Cart UI & LocalStorage
function saveCart() {
    localStorage.setItem('meta_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align: center; color: var(--gray-color); padding: 30px;">Savatchangiz bo'sh.</p>`;
        cartTotalPrice.textContent = formatPrice(0);
        return;
    }

    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${item.name} (${item.size.toUpperCase()})</h4>
                <span class="cart-item-price">${formatPrice(item.price)}</span>
            </div>
            <div class="cart-item-quantity">
                <button class="qty-btn" onclick="changeQuantity('${item.cartItemId}', -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="changeQuantity('${item.cartItemId}', 1)">+</button>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart('${item.cartItemId}')"><i class="fa-solid fa-trash"></i></button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });

    cartTotalPrice.textContent = formatPrice(calculateTotal());
}

// Change Quantity
function changeQuantity(cartItemId, delta) {
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.cartItemId !== cartItemId);
        }
    }
    saveCart();
    updateCartUI();
}

// Remove from Cart
function removeFromCart(cartItemId) {
    cart = cart.filter(i => i.cartItemId !== cartItemId);
    saveCart();
    updateCartUI();
    showToast("Mahsulot savatchadan o'chirildi.");
}

// Calculate Total
function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Open Detail Modal
function openDetailModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    detailModalBody.innerHTML = `
        <div class="cart-header">
            <h3>${product.name}</h3>
            <button class="close-btn" onclick="closeDetailModal()"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="detail-body-content">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400?text=MetaFastFood'">
            <p><strong>Tavsif:</strong> ${product.desc}</p>
            <p><strong>Kategoriya:</strong> ${product.category.toUpperCase()}</p>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <p><strong>Narxlar:</strong></p>
                <p>Small: ${formatPrice(product.prices.small)}</p>
                <p>Medium: ${formatPrice(product.prices.medium)}</p>
                <p>Large: ${formatPrice(product.prices.large)}</p>
            </div>
            <button class="btn btn-primary btn-block" onclick="addToCart(${product.id}); closeDetailModal();">Savatchaga qo'shish</button>
        </div>
    `;
    detailModal.classList.add('active');
}

function closeDetailModal() {
    detailModal.classList.remove('active');
}

// Toast Notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Price Formatter (UZS)
function formatPrice(amount) {
    return amount.toLocaleString('uz-UZ') + " so'm";
}
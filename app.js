// Catalog de produse active cu imagini premium incluse din stoc auto profesional
const products = [
    {
        id: 1,
        title: "Suport Pahar Auto Reglabil",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop",
        colors: ["Negru", "Alb", "Albastru"]
    },
    {
        id: 2,
        title: "Suport Telefon (Grilă Ventilație)",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=600&auto=format&fit=crop",
        colors: ["Negru", "Alb", "Albastru"]
    },
    {
        id: 3,
        title: "Organizator Consolă Centrală",
        price: 50.00,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
        colors: ["Negru", "Alb"]
    },
    {
        id: 4,
        title: "Suport Chei Dedicat Interior",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=600&auto=format&fit=crop",
        colors: ["Negru", "Albastru"]
    }
];

let cart = [];

// Generare elemente în pagină
function displayProducts() {
    const container = document.getElementById('products-container');
    if(!container) return;
    container.innerHTML = "";

    products.forEach(product => {
        let colorHtml = '';
        product.colors.forEach((color, index) => {
            const colorClass = color === 'Negru' ? '#1a1a1a' : color === 'Alb' ? '#ffffff' : '#0056ff';
            colorHtml += `<span class="color-option ${index === 0 ? 'active' : ''}" 
                               style="background-color: ${colorClass}; border: 1px solid #444;" 
                               onclick="selectColor(this, '${color}')"></span>`;
        });

        container.innerHTML += `
            <div class="product-card" id="prod-${product.id}">
                <div>
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">${product.price.toFixed(2)} RON</div>
                </div>
                <div>
                    <div class="color-selector" data-selected="${product.colors[0]}">
                        ${colorHtml}
                    </div>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">Adaugă în coș</button>
                </div>
            </div>
        `;
    });
}

function selectColor(element, colorName) {
    const parent = element.parentElement;
    const siblings = parent.querySelectorAll('.color-option');
    siblings.forEach(sib => sib.classList.remove('active'));
    element.classList.add('active');
    parent.setAttribute('data-selected', colorName);
}

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('open');
    document.getElementById('cartOverlay').classList.toggle('open');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const card = document.getElementById(`prod-${productId}`);
    const chosenColor = card.querySelector('.color-selector').getAttribute('data-selected');

    const existingItem = cart.find(item => item.id === productId && item.color === chosenColor);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            color: chosenColor,
            quantity: 1
        });
    }

    updateCartUI();
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('cartOverlay').classList.add('open');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartCount = document.getElementById('cart-count');
    const cartTotalValue = document.getElementById('cart-total-value');

    cartItemsContainer.innerHTML = "";
    let total = 0;
    let totalItems = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        totalItems += item.quantity;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <div>
                    <h4 style="color:#fff; font-size:14px; margin-bottom:4px;">${item.title}</h4>
                    <small style="color:#aaa;">Culoare: ${item.color} | Cantitate: ${item.quantity}</small>
                    <p style="color:#0056ff; font-weight:600; margin-top:4px;">${(item.price * item.quantity).toFixed(2)} RON</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Elimină</button>
            </div>
        `;
    });

    cartCount.innerText = totalItems;
    cartTotalValue.innerText = total.toFixed(2) + " RON";
}

function checkout() {
    if (cart.length === 0) {
        alert("Coșul este gol!");
        return;
    }
    
    let rezumat = "Comandă LayerBond3D plasată!\n\n";
    cart.forEach(item => {
        rezumat += `- ${item.title} [${item.color}] x${item.quantity}\n`;
    });
    rezumat += `\nTotal: ${document.getElementById('cart-total-value').innerText}`;
    rezumat += "\n\nSistem: Datele au fost transmise spre procesare.";
    
    alert(rezumat);
    cart = [];
    updateCartUI();
    toggleCart();
}

window.onload = displayProducts;

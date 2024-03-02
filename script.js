const products = [
    {
        id: 0,
        image: 'data:image/jpeg;base64,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',
        title: 'Grip Master Tyre',
        price: 120,
    },
    {
        id: 1,
        image: 'https://www.cyclingboutique.in/cdn/shop/products/WTB-Urban-Hybrid-Tire-All-Terrain-Comp-30tpi-DNA-Tire-Black-1_1024x1024.jpg?v=1678717736',
        title: 'Urban Tyre',
        price: 60,
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/1857/7163/products/24_57_d87a6ace-703b-4cea-8aa3-7be54a67c392_1024x1024.jpg?v=1489869470',
        title: 'Pro Trac tyre',
        price: 230,
    },
    {
        id: 3,
        image: 'https://www.team-bhp.com/forum/attachments/tyre-alloy-wheel-section/2072000d1603689394-maruti-suzuki-swift-tyre-wheel-upgrade-thread-20201023_170547.jpg',
        title: 'Swift Grip',
        price: 100,
    }
];

document.getElementById('root').innerHTML = products.map((item, index) => {
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${item.image}'></img>
            </div>
            <div class='bottom'>
                <p>${item.title}</p>
                <h2>$ ${item.price}.00</h2>
                <button onclick='addToCart(${index})'>Add to cart</button>
            </div>
        </div>
    `;
}).join('');

var cart = [];

function addToCart(index) {
    cart.push({ ...products[index] });
    displayCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

function displayCart() {
    let total = 0;
    const cartItemElement = document.getElementById('cartItem');
    const countElement = document.getElementById('count');

    if (cart.length === 0) {
        cartItemElement.innerHTML = 'Your cart is empty';
        document.getElementById('total').textContent = '$ 0.00';
        countElement.textContent = 0;
    } else {
        const cartItemsHTML = cart.map((item, index) => {
            total += item.price;
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${item.image}'></img>
                    </div>
                    <p style='font-size:12px;'>${item.title}</p>
                    <h2 style='font-size: 15px;'>$ ${item.price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='removeItem(${index})'></i>
                </div>
            `;
        }).join('');

        cartItemElement.innerHTML = cartItemsHTML;
        document.getElementById('total').textContent = `$ ${total.toFixed(2)}`;
        countElement.textContent = cart.length;
    }
}

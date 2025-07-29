let cart = [];

function addToCart(itemId, price) {
    const existingItem = cart.find(item => item.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: itemId,
            name: getItemName(itemId),
            price: price,
            quantity: 1
        });
    }
    updateCartSummary();
}

function getItemName(itemId) {
    // This is a placeholder. In a real application, you would fetch
    // the product name from the products data.
    const names = {
        'green-goddess': 'Green Goddess Wrap',
        'protein-power': 'Protein Power Wrap',
        'veggie-delight': 'Veggie Delight Wrap',
        'green-smoothie': 'Green Smoothie'
    };
    return names[itemId] || itemId;
}

function updateCartSummary() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('cart-total').textContent = '฿' + cartTotal;

    const cartSummary = document.getElementById('cart-summary');
    if (cartCount > 0) {
        cartSummary.style.display = 'flex';
    } else {
        cartSummary.style.display = 'none';
    }
}

function updateOrderSummary() {
    const orderItems = document.getElementById('order-items');
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = selectedDelivery === 'delivery' ? 30 : 0;
    const total = subtotal + deliveryFee;

    // Clear and rebuild order items
    orderItems.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'summary-row';
        itemDiv.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>฿${item.price * item.quantity}</span>
        `;
        orderItems.appendChild(itemDiv);
    });

    document.getElementById('subtotal').textContent = '฿' + subtotal;
    document.getElementById('delivery-fee').textContent = '฿' + deliveryFee;
    document.getElementById('total-amount').textContent = '฿' + total;
}

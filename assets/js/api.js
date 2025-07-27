const SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL';

async function getProducts() {
    const response = await fetch(SCRIPT_URL);
    const products = await response.json();
    return products;
}

async function submitOrder(orderData) {
    const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
    });
    const result = await response.json();
    return result;
}

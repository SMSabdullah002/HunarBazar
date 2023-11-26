function addToCart(item, price) {
    // Retrieve or initialize the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected item to the cart
    cart.push({ item, price });

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to the cart!');
  }
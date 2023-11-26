function redirectToAnotherPage() {
    // Change the URL to the desired destination
    window.location.href = '/contact.html';
  }

  function handleServiceButtonClick() {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('email') && localStorage.getItem('password');

    if (!isLoggedIn) {
        // Redirect to the login page if not logged in
        window.location.href = '/login.html';
    } else {
        // If logged in, redirect to the service page
        window.location.href = '/service.html';
    }
}
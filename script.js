// This script controls the hero slider images for automatic rotation
window.onload = function() {
    let currentIndex = 0;
    const images = document.querySelectorAll(".hero-slider img");
    const totalImages = images.length;

    function changeImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].style.display = 'block';
    }

    setInterval(changeImage, 1500); // Change image every 3 seconds
    changeImage(); // Initialize with first image visible
}





document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const toggleText = document.getElementById("toggle");
    const nameGroup = document.getElementById("name-group");

    let isLogin = true;

    toggleText.addEventListener("click", function () {
        isLogin = !isLogin;
        formTitle.textContent = isLogin ? "Login" : "Register";
        nameGroup.style.display = isLogin ? "none" : "block";
        toggleText.textContent = isLogin ? "Register" : "Login";
        toggleText.style.color = isLogin ? "#ff7e5f" : "#feb47b";
    });

    authForm.addEventListener("submit", function (event) {
        event.preventDefault();
        authForm.style.animation = "shake 0.3s";
        setTimeout(() => authForm.style.animation = "", 300);
        alert(isLogin ? "🎉 Logged in successfully! Welcome back!" : "🎊 Registered successfully! Let's get started!");
    });

    // Adding smooth transitions
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("focus", function() {
            this.style.borderColor = "#ff7e5f";
        });
        input.addEventListener("blur", function() {
            this.style.borderColor = "#ddd";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("cambiarFondo");

    button.addEventListener("click", function () {
        const colors = ["#f0f0f0", "#e6e6e6", "#dcdcdc", "#cccccc", "#b3b3b3"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});

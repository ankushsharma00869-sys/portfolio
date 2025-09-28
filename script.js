// Typing effect
const text = ["Full Stack Java Developer", "Spring Boot Enthusiast", "React Developer"];
let i = 0,
    j = 0,
    currentText = "",
    isDeleting = false;

function type() {
    currentText = text[i];
    document.getElementById("typing").innerHTML =
        isDeleting ? currentText.substring(0, j--) : currentText.substring(0, j++);

    if (!isDeleting && j === currentText.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 80 : 120);
    }
}
type();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth"  });  
    });
});
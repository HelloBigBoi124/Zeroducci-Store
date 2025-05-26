
const telefoneContato = document.querySelectorAll("#telefone");
const alert = document.getElementById("alertCopy");

telefoneContato.forEach(element => {
    element.addEventListener("click", () => {
        navigator.clipboard.writeText("6239421444");
        showAlert();
    });
});

const showAlert = () => {
    alert.classList.remove("hidden");
    alert.classList.add("fixed");
    alert.classList.add("alertAppear")
    setTimeout(() => {
        alert.classList.remove("alertAppear");
        alert.classList.add("alertDisappear");
        setTimeout(() => {
            alert.classList.remove("alertDisappear");
            alert.classList.remove("fixed");
            alert.classList.add("hidden");
        }, 500) 
    }, 5000)
};


document.addEventListener('DOMContentLoaded', function() {
    // Prevenir cliques no iframe do mapa
    const mapIframe = document.querySelector('iframe[src*="google.com/maps"]');
    if (mapIframe) {
        mapIframe.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
    }
});



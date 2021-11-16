window.addEventListener("load", function() {
    let title = document.querySelector("input.title");
    title.addEventListener("submit", function(e) {
        e.preventDefault;
        if (title.value == "") {
            alert("Este campo es obligatorio.")
        } else if (title.value.length <= 5) {
            alert("Este campo debe tener al menos 5 caracteres.")
        }
    });
})
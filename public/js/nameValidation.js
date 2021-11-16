window.addEventListener("load", function() {
    let title = document.querySelector("input.title");
    title.addEventListener("submit", function(e) {
        e.preventDefault;
        if (title.value == "") {
            alert("Este campo es obligatorio y debe tener al menos 5 caracteres.")
        }
    });
})
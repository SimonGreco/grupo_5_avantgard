window.addEventListener("load", function() {
    let formulario = document.querySelector("form.creationForm")

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let putImage = document.querySelector("input.addImage");

        if (putImage.file != JPG, JPEG, PNG, GIF) {
            alert("El formato del archivo debe ser válido (JPG, JPEG, PNG, GIF)");
        }

        
        let putTitle = document.querySelector("input.formulario-txt");

        if (putTitle.value == "") {
            alert("Este campo es obligatorio");
        } else if (putTitle.value.length < 5) {
            alert("El título debe tener al menos 5 caracteres");
        }


        let  putDescription = document.querySelector("textarea.Descripcion");

        if (putDescription.value.length < 20) {
            alert("La descripción debe tener al menos 20 caracteres");
        }
    });
});      
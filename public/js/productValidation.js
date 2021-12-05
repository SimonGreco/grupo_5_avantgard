window.addEventListener("load", function () {
    var putTitle = document.querySelector("input.formulario-txt");
    var putDescription = document.querySelector("textarea.Descripcion");
    let putImage = document.querySelector("input.addImage");

    putTitle.addEventListener("change", function (e) {
        e.preventDefault();
        if (putTitle.value == "") {
            document.querySelector("p.titulo-obligatorio").style.display = "inline-block"
        } else if (putTitle.value.length < 5) {
            document.querySelector("p.titulo-caracteres").style.display = "inline-block"
        }
    })
    
    putDescription.addEventListener("change", function (e) {
        e.preventDefault();
        if (putDescription.value.length < 20) {
            document.querySelector("p.descripcion-caracteres").style.display = "inline-block"
        }
    })

    putImage.addEventListener("change", function (e) {
        e.preventDefault();
        if (putImage.file != "JPG", "JPEG", "PNG", "GIF") {
            document.querySelector("p.formato-imagen").style.display = "inline-block"
        }})
});



/*window.addEventListener("load", function () {
    let formulario = document.querySelector("form.productsForm")


    formulario.addEventListener("submit", function (e) {
        e.preventDefault();


        let putImage = document.querySelector("input.addImage");
        
        putImage.addEventListener("change", function (e) {
            e.preventDefault();
            if (pImage.file != "JPG", "JPEG", "PNG") {
                alert("El formato del archivo debe ser válido (JPG, JPEG, PNG)");
            }})


        let putTitle = document.querySelector("input.formulario-txt");

        if (putTitle.value == "") {
            alert("Este campo es obligatorio");
        } else if (putTitle.value.length < 5) {
            alert("El título debe tener al menos 5 caracteres");
        }


        let putDescription = document.querySelector("textarea.Descripcion");

        if (putDescription.value.length < 20) {
            alert("La descripción debe tener al menos 20 caracteres");
        }
    });
});*/
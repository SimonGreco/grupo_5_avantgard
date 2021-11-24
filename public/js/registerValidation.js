window.addEventListener("load", function () {
    let formulario = document.querySelector("form.formulario");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let campoFirstName = document.querySelector("input.first_name");
        if(campoFirstName.value = "") {
            alert ("Este campo es obligatorio")
        }

        let campoLastName = document.querySelector("input.last_name");
        if(campoLastName.value = "") {
            alert ("Este campo es obligatorio")
        }

        let campoEmail =  document.querySelector("input.email");
 
        if (campoEmail.value = "") {
            alert("Debes insertar tu email")
        } else if (campoEmail.value.lenght < 6) {
            alert ("El email ingresado no es válido");
        }

        let campoPassword = document.querySelector("input.password");

        if (campoPassword.value < 8 ) {
            alert("La contraseña ingresada no es válida")

        }
    })

})

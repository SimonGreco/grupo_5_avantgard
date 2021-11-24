window.addEventListener("load", function () {
    let formulario = document.querySelector("form.formularios2");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

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

    });
})


//  })
// window.addEventListener("load", function() {
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const form = document.getElementById("formularios2");
// const errorElement = document

// form.addEventListener("submit", (e) => {
//     let messages = []
//     if (email.value === "" || email.value == null) {
//         messages.push("la concha de tu madre")
//     } 
//     if (messages.lenght > 0) {
//         e.preventDefault()
//     }
// })
// })

  
window.addEventListener("load", function () {
    let formulario = document.querySelector("form.formularios2");

    let inputs = document.querySelectorAll("form.formularios2 input");

    const expresiones = {
        password: /^.{8,1000}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const campos = {
        email: false,
        psw: false
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "email":
                validarCampo(expresiones.correo, e.target, 'email', "Debes usar un email valido");
                break;
            case "password":
                validarCampo(expresiones.password, e.target, 'psw', "La contraseña tiene que ser de 8 caracteres o mas");
                break;
        }
    }

    const validarCampo = (expresion, input, campo, validacion) => {
        let card = document.querySelector(`.field.${campo} p.error`);
        card.innerHTML = ""
        if (input.value == "") {
            card.innerHTML = `El campo no puede estar vacio`
            card.style.margin = "revert"
            campos[campo] = false

        } else if (!expresion.test(input.value)) {
            card.innerHTML = `${validacion}`
            card.style.margin = "revert"
            campos[campo] = false
        } else {
            card.innerHTML = ""
            card.style.margin = "0"
            campos[campo] = true
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener("submit", function (e) {
        if (!(campos.email == true && campos.psw == true)) {
            e.preventDefault()
        }
    });
})





// window.addEventListener("load", function () {
//     let formulario = document.querySelector("form.formularios2");

//     formulario.addEventListener("submit", function(e) {
//         e.preventDefault();

//         let campoEmail =  document.querySelector("input#email");

//         if (campoEmail.value == "") {
//             alert("Debes insertar tu email")
//         } else if (campoEmail.value.lenght < 6) {
//             alert ("El email ingresado no es válido");
//         }

//         let campoPassword = document.querySelector("input#password");

//         if (campoPassword.value < 8 ) {
//             alert("La contraseña ingresada no es válida")

//         }

//     });
// })


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
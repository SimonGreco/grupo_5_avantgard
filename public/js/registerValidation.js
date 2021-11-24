window.addEventListener("load", function () {
    let formulario = document.querySelector("form.formulario");

    let inputs = document.querySelectorAll("form.formulario input");

    const expresiones = {
        password: /^.{4,12}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        first_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        last_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    }

    const campos = {
        email: false,
        password: false,
        first_name: false,
        last_name: false,
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "email":
                validarCampo(expresiones.email, e.target, 'email', "debe ser valido");
            break;
            case "password":
                validarCampo(expresiones.password, e.target, 'password', "acepta de 4 a 12 caracteres");
            break;
            case "first_name":
                validarCampo(expresiones.first_name, e.target, "first_name", "El nombre no es válido");
            break;
            case "last_name":
                validarCampo(expresiones.last_name, e.target, "last_name", "El apellido no es válido")
        }
    }

    const validarCampo = (expresion, input, campo, validacion) => {
        let card = document.querySelector(`.field.${campo} p.error`);
        card.innerHTML = ""
        if (input.value == "") {
           card.innerHTML = `El campo ${input.name} no puede estar vacio`
          card.style.margin = "revert"
           campos[campo] = false
            
        }
        else if (!expresion.test(input.value)){
            card.innerHTML = `El campo ${input.name} ${validacion}`
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

    formulario.addEventListener("submit", function(e) {
        if ( !(campos.email == true && campos.password == true && campos.last_name == true && campos.first_name == true) ) {
            e.preventDefault()
        }
    });
})















// window.addEventListener("load", function () {
//     let formulario = document.querySelector("form.formulario");

//     formulario.addEventListener("submit", function(e) {
//         e.preventDefault();

//         let campoFirstName = document.querySelector("input.first_name");
//         if(campoFirstName.value = "") {
//             alert ("Este campo es obligatorio")
//         }

//         let campoLastName = document.querySelector("input.last_name");
//         if(campoLastName.value = "") {
//             alert ("Este campo es obligatorio")
//         }

//         let campoEmail =  document.querySelector("input.email");
 
//         if (campoEmail.value = "") {
//             alert("Debes insertar tu email")
//         } else if (campoEmail.value.lenght < 6) {
//             alert ("El email ingresado no es válido");
//         }

//         let campoPassword = document.querySelector("input.password");

//         if (campoPassword.value < 8 ) {
//             alert("La contraseña ingresada no es válida")

//         }
//     })

// })

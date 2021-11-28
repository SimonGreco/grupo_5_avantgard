import React from "react";
import '../assets/css/HeadderFooter.css'
import logo from '../assets/img/Logo Horizontal  .png'

function Footer(){
    return(
        <footer class="main-footer">
    <div class="footer">
        <div class="img"><img src={logo} /></div>

        <div class="footer-text-conteiner">
            <div class="footer-text">
                <h3>Nosotros</h3>
                <p>Blog</p>
                <p>Ayuda</p>
                <p>Acerca</p>

            </div>
            <div class="footer-text">
                <h3>Redes</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>youtube</p>
            </div>
            <div class="footer-text">
                <h3>Contacto</h3>
                <p>Resolucion de problemas</p>
                <p>Centro de ayuda</p>
                <p>Developers</p>
                <p>Contacto</p>

            </div>
        </div>
    </div>

    <div class="bottom-footer">
        <div class="bottom-text-footer-conteiner">
            <p>Trabaja con nosotros</p>
            <p>Terminos y condiciones</p>
            <p>Como cuidamos tu privacidad</p>
            <p>Informacion al usuario</p>
            <p>Ayuda</p>
            <p>Defensa al consumidor</p>

        </div>
        <br />
        <p class="copyright-txt">Copyrights © 2021 Todos los derechos reservados.</p>

    </div>
</footer>
    )
}

export default Footer
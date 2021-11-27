import React from "react";
import '../assets/css/controlPanel.css'

function LeftSideBar(){
    return(
        <article className="mainControlPanel">
            <section className="optionsConteinerPhone">
                <i className="fas fa-bars"></i>
                <br />
                <i className="fas fa-house-user"></i>
                <i className="fas fa-cog"></i>
                <i className="fas fa-box-open"></i>
                <i className="fas fa-piggy-bank"></i>
                <i className="fas fa-truck"></i>
                <br />
                <i className="fas fa-cart-arrow-down"></i>
                <i className="fas fa-comments"></i>


            </section>
            <section className="optionsConteiner">
                <h4><i className="fas fa-house-user"></i> Inicio</h4>
                <h4>Mi tienda</h4>

                <p><i className="fas fa-cog"></i> Datos</p>
                <p id="productos"><i className="fas fa-box-open"></i> Productos</p>
                <p><i className="fas fa-piggy-bank"></i> Formas de pago</p>
                <p><i className="fas fa-truck"></i> Formas de envío</p>

                <h4>Mis ventas</h4>
                <p><i className="fas fa-cart-arrow-down"></i> Ventas</p>
                <p><i className="fas fa-comments"></i> Preguntas recibidas</p>

            </section>

        </article>
    )
}

export default LeftSideBar
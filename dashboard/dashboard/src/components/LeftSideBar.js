import React from "react";
import '../assets/css/controlPanel.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faHouseUser, faCog, faBoxOpen, faPiggyBank, faTruck, faCartArrowDown, faComments, } from '@fortawesome/free-solid-svg-icons'

function LeftSideBar(){
    return(
        <main>
<div className="control-panel-cover"></div>
        <article className="mainControlPanel">
            <section className="optionsConteinerPhone">
                <FontAwesomeIcon icon={faBars} className="fas fa-bars"/>
                <br />
                <FontAwesomeIcon icon={faHouseUser} className="fas fa-house-user"/>
                <FontAwesomeIcon icon={faCog} className="fas fa-cog"/>
                <FontAwesomeIcon icon={faBoxOpen} className="fas fa-box-open" />
                <FontAwesomeIcon icon={faPiggyBank} className="fas fa-piggy-bank" />
                <FontAwesomeIcon icon={faTruck} className="fas fa-truck" />
                <br />
                <FontAwesomeIcon icon={faCartArrowDown} className="fas fa-cart-arrow-down" />
                <FontAwesomeIcon icon={faComments} className="fas fa-comments" />


            </section>
            <section className="optionsConteiner">
                <h4><FontAwesomeIcon icon={faHouseUser} className="fas fa-house-user"/> Inicio</h4>
                <h4>Mi tienda</h4>

                <a href="/"><p><FontAwesomeIcon icon={faCog} className="fas fa-cog"/> Datos</p></a>
                <a href="http://localhost:3000/user/control-panel"><p id="productos" className="productosss"><FontAwesomeIcon icon={faBoxOpen} className="fas fa-box-open" /> Productos</p></a>
                <a href="/"> <p><FontAwesomeIcon icon={faPiggyBank} className="fas fa-piggy-bank" /> Formas de pago</p></a>
                <a href="/"><p><FontAwesomeIcon icon={faTruck} className="fas fa-truck" /> Formas de envío</p></a>

                <h4>Mis ventas</h4>
                <p><FontAwesomeIcon icon={faCartArrowDown} className="fas fa-cart-arrow-down" /> Ventas</p>
                <p><FontAwesomeIcon icon={faComments} className="fas fa-comments" /> Preguntas recibidas</p>

            </section>

        </article>

        </main>
        
    )
}

export default LeftSideBar
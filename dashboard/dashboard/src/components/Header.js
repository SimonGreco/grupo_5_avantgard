import React from "react";
import '../assets/css/HeadderFooter.css'
import logo from '../assets/img/Logo Horizontal  .png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faStoreAlt, faShoppingCart, faSearch} from '@fortawesome/free-solid-svg-icons'



function Header(props){
    return(
        
                

        <header className="main-headder">
                <a href="http://localhost:3000/" id="hipervinculoLogo"><img src={logo} id="LGOG" alt='imagen del producto' /></a>


                <div className="phone-menu">
                    <div className="menu"><i className="fas fa-bars"></i></div>
                    <span className="search-bar">
                        <form action="/" method="POST">
                            <input type="text" name="busqueda" placeholder="Buscá productos, marcas y mas" />

                        </form>

                    </span>
                    <a href="/user/profile">  </a>

                    
                
                  

                    <a href="/user/control-panel"><i className="fas fa-store-alt"></i></a>


                    <a href="/products/carrito"><i className="fas fa-shopping-cart"></i></a>

                </div>
                <div className="txt">
                    <p><a href="http://localhost:3000/#Categoriass">Categorías</a></p>
                </div><div className="txt">
                    <p><a href="http://localhost:3000/products/#Ofertass">Ofertas</a></p>
                </div><div className="txt">
                    <p>Historial</p>
                </div><div className="txt">
                    <p><a href="http://localhost:3000/products">Explorar</a></p>
                </div><div className="iconos">

                    <a href="/control-panel">
                    <FontAwesomeIcon icon={faStoreAlt} className="fas fa-store-alt"/>
                        Tienda
                    </a>


                    <div className="user-options-conteiner">
                        <a href="http://localhost:3000/user/profile" c><FontAwesomeIcon icon={faUser} className="fas fa-user"/>Hola Simon!
                        </a>
                        <div className="options_box">
                            <div className="caja_separadora"></div>
                            <div className="profile_option a"><a href="http://localhost:3000/user/profile" className="po_txt perfilConteiner">
                                <p>Perfil</p>
                            </a></div>
                            <hr  className="hrPerfil" />
                            <div className="profile_option b"><a href="http://localhost:3000/user/logout" className="po_txt CerrarSesionContainer"
                               >
                                <p>Cerrar Sesion</p>
                            </a></div>
                        </div>


                    </div>


                    <div></div>

                    <a href="http://localhost:3000/products/carrito"><FontAwesomeIcon icon={faShoppingCart} className="fas fa-shopping-cart"/>Carrito</a>

                    <a href="/"><FontAwesomeIcon icon={faSearch} className="fas fa-search"/></a>


                    

                </div>
                
                
            </header>

                                        )
                                        }

                                        export default Header
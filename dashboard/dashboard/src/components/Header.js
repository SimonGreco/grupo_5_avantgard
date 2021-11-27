import React from "react";
import '../assets/css/HeadderFooter.css'
import logo from '../assets/img/Logo Horizontal  .png'



function Header(props){
    return(
        
                

        <header className="main-headder">
                <a href="/" id="hipervinculoLogo"><img src={logo} id="LGOG" /></a>


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
                    <p><a href="/#Categoriass">Categorías</a></p>
                </div><div className="txt">
                    <p><a href="/products/#Ofertass">Ofertas</a></p>
                </div><div className="txt">
                    <p>Historial</p>
                </div><div className="txt">
                    <p><a href="/products">Explorar</a></p>
                </div><div className="iconos">

                    <a href="/user/control-panel">
                        <i className="fas fa-store-alt"></i>
                        Tienda
                    </a>


                    <div className="user-options-conteiner">
                        <a href="../user/profile"><i className="fas fa-user"></i>Hola!
                        </a>
                        <div className="options_box">
                            <div className="caja_separadora"></div>
                            <div className="profile_option a"><a href="../user/profile" className="po_txt"
                                marginLeft="0px" width="100%" fontSize="12px" color="black" display="inline-block">
                                <p>Perfil</p>
                            </a></div>
                            <hr width="100%" height="0.5px" margin="0 0" />
                            <div className="profile_option b"><a href="../user/logout" className="po_txt"
                                marginLeft="0px" width="100%" fontSize="11px" color="black" display="inline-block">
                                <p>Cerrar Sesion</p>
                            </a></div>
                        </div>


                    </div>


                    <div></div>

                    <a href="../products/carrito"><i className="fas fa-shopping-cart"></i>Carrito</a>

                    <a href="/"><i className="fas fa-search"></i></a>




                </div>
                
              
            </header>

                                        )
                                        }

                                        export default Header
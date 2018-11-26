import React, { Component } from 'react';
import Header from './Header';
import HeaderImage from './HeaderImage';

//TODO: Emails in <a> tag
class Kontakt extends Component{
    render(){

        const lang = this.props.currentLang;

        return(
            <div>
                <Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage} active="kontakt"/>
                
                <HeaderImage bgImage='./assets/img/kontakt_header_compressed.jpg' text={lang.header.contact}/>
                
                <div className="kontakt-wrapper">
                    
                    <div>
                        <h3>{lang.kontakt.uprava_title}</h3>
                        <ul className="kontakt-main_ul">
                            <li className="kontakt-main_li">Ojsteršek Rok</li>
                            <ul>
                                <li>{lang.kontakt.telefon}: <a href="tel:+38631590606">+386 31 590 606</a></li>
                                <li>{lang.kontakt.mail}: <a href="mailto:rok@magnum-logistika.si">rok@magnum-logistika.si</a></li>
                            </ul>

                            <li className="kontakt-main_li">Horvat Boris</li>
                            <ul>
                                <li>{lang.kontakt.telefon}: <a href="tel:+38651369540">+386 51 369 540</a></li>
                                <li>{lang.kontakt.mail}: <a href="mailto:boris@magnum-logistika.si">boris@magnum-logistika.si</a></li>
                            </ul>
                        </ul>
                    </div>

                    <div>
                        <h3>{lang.kontakt.racunovodstvo_title}</h3>
                        <ul className="kontakt-main_ul">
                            <li className="kontakt-main_li">Rihatrič Pika</li>
                            <ul>
                                <li>{lang.kontakt.telefon}: <a href="tel:+38670833752">+386 70 833 752</a></li>
                                <li>{lang.kontakt.mail}: <a href="mailto:pika@magnum-logistika.si">pika@magnum-logistika.si</a></li>
                            </ul>
                        </ul>
                    </div>

                    <div>
                        <h3>{lang.kontakt.prevozi_title}</h3>
                        <ul className="kontakt-main_ul">
                            <li className="kontakt-main_li">Nataša Gajšek</li>
                            <ul>
                                <li>{lang.kontakt.telefon}: <a href="tel:+38670422970">+386 70 422 970</a></li>
                                <li>{lang.kontakt.mail}: <a href="mailto:natasa@magnum-logistika.si">natasa@magnum-logistika.si</a></li>
                            </ul>

                            <li className="kontakt-main_li">Jaka Rihatrič Horvat</li>
                            <ul>
                                <li>{lang.kontakt.telefon}: <a href="tel:+38670267180">+386 70 267 180</a></li>
                                <li>{lang.kontakt.mail}: <a href="mailto:jaka@magnum-logistika.si">jaka@magnum-logistika.si</a></li>
                            </ul>
                        </ul>
                    </div>

                    <div>
                        <h3>{lang.kontakt.delavnica_title}</h3>
                        <ul className="kontakt-main_ul">
                            <li className="kontakt-main_li">Aleksander Horvat</li>
                            <ul>
                                <li>{lang.kontakt.telefon}: <a href="tel:+38641825867">+386 41 825 867</a></li>
                            </ul>
                        </ul>
                    </div>

                    <div>
                        <h3>{lang.kontakt.vulkanizerstvo_title}</h3>
                        <ul className="kontakt-main_ul">
                            <li className="kontakt-main_li">Marko Strašek</li>
                            <ul>
                                <li>{lang.kontakt.telefon}: <a href="tel:+38631290244">+386 31 290 244</a></li>
                                <li>{lang.kontakt.mail}: <a href="mailto:marko@magnum-logistika.si">marko@magnum-logistika.si</a></li>
                            </ul>

                            <li className="kontakt-main_li">David Čonč</li>
                            <ul>
                                <li>{lang.kontakt.telefon}: <a href="tel:+38641686120">+386 41 686 120</a></li>
                            </ul>
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default Kontakt;
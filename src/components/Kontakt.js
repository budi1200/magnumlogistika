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
                <HeaderImage bgImage='./img/kontakt_header_compressed.jpg'/>
                <div className="kontakt-wrapper">
                    <div>
                        <h3>{lang.kontakt.uprava_title}</h3>
                            <ul className="kontakt-main_ul">
                                <li className="kontakt-main_li">Horvat Boris</li>
                                <ul>
                                    <li>{lang.kontakt.telefon}: <a href="tel:+38651369540">+386 51 369 540</a></li>
                                    <li>{lang.kontakt.mail}: <a href="mailto:boris@magnum-logistika.si">boris@magnum-logistika.si</a></li>
                                </ul>
                                <li className="kontakt-main_li">Ojsteršek Rok</li>
                                <ul>
                                    <li>{lang.kontakt.telefon}: <a href="tel:+38631590606">+386 31 590 606</a></li>
                                    <li>{lang.kontakt.mail}: <a href="mailto:rok@magnum-logistika.si">rok@magnum-logistika.si</a></li>
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
                        <h3>{lang.kontakt.trgovina_title}</h3>
                            <ul className="kontakt-main_ul">
                                <li className="kontakt-main_li">Gajšek Nataša</li>
                                <ul>
                                    <li>{lang.kontakt.telefon}: <a href="tel:+38670422970">+386 70 422 970</a></li>
                                    <li>{lang.kontakt.telefon}: <a href="tel:+38670693240">+386 70 693 240</a></li>
                                    <li>{lang.kontakt.mail}: <a href="mailto:natasa@magnum-logistika.si">natasa@magnum-logistika.si</a></li>
                                </ul>
                            </ul>
                    </div>
                    <div>
                        <h3>{lang.kontakt.servis_title}</h3>
                            <ul className="kontakt-main_ul">
                                <li className="kontakt-main_li">Matjaž Jakopina-Žak</li>
                                <ul>
                                    <li>{lang.kontakt.telefon}: <a href="tel:+38670573390">+386 70 573 390</a></li>
                                </ul>
                            </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Kontakt;
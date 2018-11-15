import React, { Component } from 'react';
import Header from './Header';
import HeaderImage from './HeaderImage';

class ONas extends Component{
    render(){

        const lang = this.props.currentLang;

        return(
            <div>
                <Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage} active="o-nas"/>
                <HeaderImage bgImage="./img/onas_header_compressed.jpg"/>
                <div className="onas-wrapper">
                    <h3>{lang.onas.title}</h3>
                    <ul>
                        <li>{lang.onas.ime_podj}</li>
                        <li>{lang.onas.naslov_podj}</li>
                        <li>{lang.onas.kraj_podj}</li>
                        <li>{lang.onas.st_podj}</li>
                        <li>{lang.onas.naslov_podj_2}</li>
                        <li>{lang.onas.kraj_podj_2}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ONas;
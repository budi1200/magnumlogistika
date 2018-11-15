import React, { Component } from 'react';
import Header from './Header';
import HeaderImage from './HeaderImage';

class ONas extends Component{
    render(){

        const lang = this.props.currentLang;

        return(
            <div>
                <Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage} active="o-nas"/>
                <HeaderImage bgImage="./assets/img/onas_header.jpg"/>
                <div className="onas-wrapper">
                    <h3>{lang.onas.title1}</h3>
                    <p>{lang.onas.desc1}</p>
                    <h3>{lang.onas.title2}</h3>
                    <p>{lang.onas.desc2}</p>
                </div>
            </div>
        );
    }
}

export default ONas;
import React, { Component } from 'react';
import Header from './Header';
import HeaderImage from './HeaderImage';

class Servis extends Component{
    render(){
        return(
            <div>
            <Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage} active="servis"/>
            <HeaderImage bgImage="./assets/img/servis_header.jpg"/>
            </div>
        );
    }
}

export default Servis;
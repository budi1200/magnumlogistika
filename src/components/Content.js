import React, { Component } from 'react';
import Header from './Header';
import TransportTypes from './TransportTypes';
import { Link } from 'react-router-dom';

class Content extends Component{

    state = {
        transport_img: './assets/img/front_fixed3_compressed.jpg',
        showImgText: false,
    }

    render(){

        const lang = this.props.currentLang;
        let imgText = null;

        const transparent_bg = {
            backgroundColor: 'transparent',
        }

        const frontPageContent = [
            {
                'id': 0,
                'name': lang.content.ladijski_name,
                'icon': './assets/img/cruise.svg',
                'bgImage': './assets/img/ship_compressed.jpg',
            },
            {
                'id': 1,
                'name': lang.content.cestni_name,
                'icon': './assets/img/truck2.png',
                'bgImage': './assets/img/truck_compressed.jpg',
            }
        ]

        if(this.state.showImgText === "ship"){
            imgText = <span className="body-img-text">{lang.content.ladijski_text}</span>
        }else if(this.state.showImgText === "road"){
            imgText = <span className="body-img-text">{lang.content.cestni_text}</span>
        }

        return(
            <div>
                <Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage}/>
                <TransportTypes ref="RefTransportTypes" img={this.state.transport_img} currentLang={lang}/>
            </div>
        );
    }
}

export default Content;
import React, { Component } from 'react';
import Header from './Header';
import TransportTypes from './TransportTypes';
import { Link } from 'react-router-dom';

class Content extends Component{

    state = {
        transport_img: './img/front_fixed3_compressed.jpg',
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
                'icon': './img/cruise.svg',
                'bgImage': './img/ship_compressed.jpg',
            },
            {
                'id': 1,
                'name': lang.content.cestni_name,
                'icon': './img/truck2.png',
                'bgImage': './img/truck_compressed.jpg',
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
                <TransportTypes ref="RefTransportTypes" img={this.state.transport_img}/>
                <div className="body-image-wrapper">
                    {imgText}
                    <div className="body-list-wrapper">
                        <div className="body-list-side"></div>
                        <ul className="body-list">
                            <li style={this.state.transport_img === frontPageContent[0].bgImage ? transparent_bg : null } onClick={() => {this.setState({transport_img: frontPageContent[0].bgImage, showImgText: "ship"})}}>
                                <img className="list-img" alt={frontPageContent[0].name} src={frontPageContent[0].icon}/>    
                                <span>{frontPageContent[0].name}</span>
                            </li>
                            <li style={this.state.transport_img === frontPageContent[1].bgImage ? transparent_bg : null } onClick={() => {this.setState({transport_img: frontPageContent[1].bgImage, showImgText: "road"})}}>
                                <img className="list-img" alt={frontPageContent[1].name} src="./img/truck2.png"/>    
                                <span>{frontPageContent[1].name}</span>
                            </li>
                            <Link to="/trgovina">
                                <li>
                                    <img className="list-img" alt="Trgovina" src="./img/shopping-cart.svg"/>
                                    <span>{lang.content.shop}</span>
                                </li>
                            </Link>
                        </ul>
                        <div className="body-list-side"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
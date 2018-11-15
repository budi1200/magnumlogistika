import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TransportTypes extends Component{

    getHeight = () =>{
        return window.innerHeight - 94;
    }

    state = {
        'height': this.getHeight(),
        transport_img: './assets/img/front_fixed3_compressed.jpg',
        showImgText: false,
    }

    resize = () => {
        this.setState({
            'height': this.getHeight(),
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }
    
    render(){

        const lang = this.props.currentLang;

        const bg_img = {
            backgroundImage: "url('" + this.state.transport_img + "')",
            width: '100%',
            height: this.state.height,    
            backgroundSize: 'cover',
            backgroundPositionY: 'bottom',
        }

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

        return(
            <div style={bg_img}>
                <div className="body-list-wrapper">
                    <div className="body-list-wrapper-inner">
                        <div className="body-list-side"></div>
                        <ul className="body-list">
                            <li style={this.state.transport_img === frontPageContent[0].bgImage ? transparent_bg : null } onClick={() => {this.setState({transport_img: frontPageContent[0].bgImage, showImgText: "ship"})}}>
                                <img className="list-img" alt={frontPageContent[0].name} src={frontPageContent[0].icon}/>    
                                <span>{frontPageContent[0].name}</span>
                            </li>
                            <li style={this.state.transport_img === frontPageContent[1].bgImage ? transparent_bg : null } onClick={() => {this.setState({transport_img: frontPageContent[1].bgImage, showImgText: "road"})}}>
                                <img className="list-img" alt={frontPageContent[1].name} src="./assets/img/truck2.png"/>    
                                <span>{frontPageContent[1].name}</span>
                            </li>
                            <Link to="/trgovina">
                                <li>
                                    <img className="list-img" alt="Trgovina" src="./assets/img/shopping-cart.svg"/>
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

export default TransportTypes;
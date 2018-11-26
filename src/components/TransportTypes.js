import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TransportTypes extends Component{

    getHeight = () =>{
        return window.innerHeight - 94;
    }

    state = {
        'height': this.getHeight(),
        //transport_img: './assets/img/front_fixed3_compressed.jpg',
        transport_img: './assets/img/bg.jpg',
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
                    <div>
                        <h1>{lang.content.main_title}</h1>
                        <h4>{lang.content.main_subtitle}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default TransportTypes;
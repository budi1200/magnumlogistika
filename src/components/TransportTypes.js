import React, { Component } from 'react';

import { StyleRoot } from 'radium';
import { animStyles } from './styles';

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

        return(
            <div style={bg_img}>
                <div className="body-list-wrapper">
                    <StyleRoot>
                        <h1 style={animStyles.fadeIn}>{lang.content.main_title}</h1>
                        <h4 style={animStyles.fadeIn}>{lang.content.main_subtitle}</h4>
                    </StyleRoot>
                </div>
            </div>
        );
    }
}

export default TransportTypes;
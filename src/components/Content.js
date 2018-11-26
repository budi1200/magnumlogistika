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

        return(
            <div>
                <Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage}/>
                <TransportTypes ref="RefTransportTypes" img={this.state.transport_img} currentLang={lang}/>
								<div>
									Kaj vam nudimo?
								</div>

								<div>
									Zakaj nas izbrati?
								</div>

								<div>
									Kontakt
								</div>

								<div>footer</div>
            </div>
        );
    }
}

export default Content;
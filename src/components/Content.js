import React, { Component } from 'react';
import Header from './Header';
import TransportTypes from './TransportTypes';
import HomePonudba from './HomePonudba';
import HomePodrocje from './HomePodrocje';
import HomeZakaj from './HomeZakaj';
import HomeStik from './HomeStik';
import Footer from './Footer';

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
								<div className='body-wrapper'>
                	<HomePonudba currentLang={this.props.currentLang}/>
									<HomePodrocje currentLang={this.props.currentLang}/>
									<HomeZakaj currentLang={this.props.currentLang}/>
									<HomeStik currentLang={this.props.currentLang}/>
								</div>
								<Footer currentLang={this.props.currentLang}/>
            </div>
        );
    }
}

export default Content;
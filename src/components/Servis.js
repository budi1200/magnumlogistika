import React, { Component } from 'react';
import { StyleRoot } from 'radium';

import { animStyles } from './styles';
import Header from './Header';
import HeaderImage from './HeaderImage';
import Footer from './Footer';

export default class Servis extends Component{

	componentWillMount(){
		window.scrollTo(0, 0);
	}

  render(){

      const lang = this.props.currentLang;

      return(
          <div>
              <Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage} active="servis"/>
              
							<HeaderImage bgImage="./assets/img/onas_header.jpg" text={lang.header.servis}/>
              
							<StyleRoot>
								<div style={animStyles.fadeIn} className="center">
									<h3>{lang.header.servis}</h3>
              	  <p>{lang.onas.desc2}</p>
              	</div>
							</StyleRoot>

							<Footer currentLang={this.props.currentLang}/>
          </div>
      );
  }
}
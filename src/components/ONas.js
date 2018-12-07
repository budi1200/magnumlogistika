import React, { Component } from 'react';
import { StyleRoot } from 'radium';

import { animStyles } from './styles';
import Header from './Header';
import HeaderImage from './HeaderImage';
import Footer from './Footer';

class ONas extends Component{

	componentWillMount(){
		window.scrollTo(0, 0);
	}

  render(){

      const lang = this.props.currentLang;

      return(
          <div>
              <Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage} active="o-nas"/>
              
							<HeaderImage bgImage="./assets/img/onas_header.jpg" text={lang.header.about}/>
              
							<StyleRoot>
								<div style={animStyles.fadeIn} className="onas-wrapper center">
              	    <h3>{lang.onas.title1}</h3>
              	    <p>{lang.onas.desc1}</p>
              	    <h3>{lang.onas.title2}</h3>
              	    <p>{lang.onas.desc2}</p>
              	</div>
							</StyleRoot>

							<Footer currentLang={this.props.currentLang}/>
          </div>
      );
  }
}

export default ONas;
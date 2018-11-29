import React, { Component } from 'react';

import Header from '../Header';

import HeaderImage from '../HeaderImage';

import Footer from '../Footer';

export default class IzredniPrevozi extends Component{
	render(){

		const lang = this.props.currentLang;

		return(
			<div>
				<Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage} active="storitve"/>

        <HeaderImage bgVideo='/assets/vid/ML3.mp4' text={lang.IzredniPrevozi.title} video={true}/>
				
				<div className="section-wrapper">
					<span>Posebej previdno in natančno preučimo in načrtujemo pretovorne manipulacije ter prevozno pot. Uredimo vse potrebno, da tovor na prevozni poti ustrezno zaščitimo in zavarujemo. Skrbno organiziramo potek celotne logistične storitve.</span>
				</div>

				<Footer/>
			</div>
		);
	}
}
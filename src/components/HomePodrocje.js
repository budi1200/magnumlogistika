import React, { Component } from 'react';

export default class HomePodrocje extends Component{
	render(){

		const lang = this.props.currentLang;

		return(
			<div className='section-wrapper'>
				<h1 className='section-title'>{lang.HomePodrocje.title}</h1> <br/>
				<img style={{objectFit: 'contain'}} src='./assets/img/podrocje.png'/>
				<p>
					{lang.HomePodrocje.desc}
				</p>
				<p>
					{lang.HomePodrocje.desc2}
				</p>
			</div>
		);
	}
}
import React, { Component } from 'react';

export default class HomePodrocje extends Component{
	render(){

		const lang = this.props.currentLang;

		return(
			<div className='section-wrapper'>
				<span className='section-title'>{lang.HomePodrocje.title}</span> <br/>
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
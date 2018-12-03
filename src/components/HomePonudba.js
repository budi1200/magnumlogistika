import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyleRoot } from 'radium';

import { animStyles } from './styles';
export default class HomePonudba extends Component{
  render(){

    const lang = this.props.currentLang;
    
    return(
      <div id="ponudba" className='section-wrapper'>
				<StyleRoot style={{display: "flex", flexDirection: "column"}}>
        	
					<h1 style={animStyles.fadeInUp} className='section-title'>{lang.HomePonudba.title}</h1>
        	<ul style={animStyles.fadeIn} className='ponudba-list'>
						{lang.HomePonudba.ponudbe.map((ponudba, index) => {
							return(<li key={index}><Link style={animStyles.fadeIn} to={'ponudba/' + ponudba.path}><img src={ponudba.img} alt={ponudba.name}/>{ponudba.name}</Link></li>);
						})}
        	</ul>

				</StyleRoot>
      </div>
    )
  }
}
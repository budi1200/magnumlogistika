import React, { Component } from 'react';

export default class HomePonudba extends Component{
  render(){

    const lang = this.props.currentLang;
    
    return(
      <div className='section-wrapper'>
        <span className='section-title'>{lang.HomePonudba.title}</span>
        <ul>
					{lang.HomePonudba.ponudbe.map((ponudba, index) => {
						return(<li key={index}>{ponudba}</li>);
					})}
        </ul>
      </div>
    )
  }
}
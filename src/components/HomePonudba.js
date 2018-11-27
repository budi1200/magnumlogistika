import React, { Component } from 'react';

export default class HomePonudba extends Component{
  render(){

    const lang = this.props.currentLang;
    
    return(
      <div className='section-wrapper'>
        <h1 className='section-title'>{lang.HomePonudba.title}</h1>
        <ul className='ponudba-list'>
					{lang.HomePonudba.ponudbe.map((ponudba, index) => {
						return(<li key={index}><img src={ponudba.img}/>{ponudba.name}</li>);
					})}
        </ul>
      </div>
    )
  }
}
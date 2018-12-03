import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
//import LangMenu from './LangMenu';

class Header extends Component{

	constructor(props){
		super(props);

		this.state = {
			isOpen: false
		}
	}

	toggleMenu = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render(){

	  const lang = this.props.currentLang;

	  const active_link = {
	      color: '#d93025',
	  }

	  const logo_img = {
	      backgroundImage: "url('/assets/img/magnum_logistika_logo.png')",
	  }

	  return(
	      <div id="header-wrapper" className="header-wrapper">
					<div className='header-wrapper-inner'>
					<HashLink to='/#top' smooth><div style={logo_img} className="logo"></div></HashLink>
					<button className={"hamburger hamburger--squeeze " + (this.state.isOpen ? "is-active" : "")} type="button" onClick={() => this.toggleMenu()}>
						<span className="hamburger-box">
						  <span className="hamburger-inner"></span>
						</span>
					</button>
		
					<div className={"header-links " + (!this.state.isOpen ? 'closed' : 'open')}>
	            <ul>
	                <li><HashLink to='/#top' smooth onClick={() => this.setState({isOpen: false})}>{lang.header.home}</HashLink></li>
									<li><HashLink to='/#ponudba' smooth onClick={() => this.setState({isOpen: false})}>Ponudba</HashLink></li>
	                <li className={this.props.active === 'o-nas' ? "active" : null }><Link style={this.props.active === 'o-nas' ? active_link : null } to='/o-nas' onClick={() => this.setState({isOpen: false})}>{lang.header.about}</Link></li>
	                <li className={this.props.active === 'kontakt' ? "active" : null }><Link style={this.props.active === 'kontakt' ? active_link : null } to='/kontakt' onClick={() => this.setState({isOpen: false})}>{lang.header.contact}</Link></li>
	                {/*<li className="lang-li"><LangMenu changeLanguage={this.props.changeLanguage} currentLangCode={this.props.currentLang.header.lang}/></li>*/}
	            </ul>
	        </div>
					</div>
	      </div>
	  );
	}
}

export default Header;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import LangMenu from './LangMenu';

class Header extends Component{

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
                <div className="header-links">
                    <ul>
                        <li><HashLink to='/#top' smooth>{lang.header.home}</HashLink></li>
												<li><HashLink to='/#ponudba' smooth>Ponudba</HashLink></li>
                        <li className={this.props.active === 'o-nas' ? "active" : null }><Link style={this.props.active === 'o-nas' ? active_link : null } to='/o-nas'>{lang.header.about}</Link></li>
                        {/*<li className={this.props.active === 'servis' ? "active" : null }><Link style={this.props.active === 'servis' ? active_link : null } to='/servis'>{lang.header.service}</Link></li>*/}
                        <li className={this.props.active === 'kontakt' ? "active" : null }><Link style={this.props.active === 'kontakt' ? active_link : null } to='/kontakt'>{lang.header.contact}</Link></li>
                        {/*<li className="lang-li"><LangMenu changeLanguage={this.props.changeLanguage} currentLangCode={this.props.currentLang.header.lang}/></li>*/}
                    </ul>
                </div>
							</div>
            </div>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LangMenu from './LangMenu';

class Header extends Component{

    render(){

        const lang = this.props.currentLang;

        const active = {
            backgroundColor: '#fce8e6',
        }

        const active_link = {
            color: '#d93025',
        }

        const logo_img = {
            backgroundImage: "url('./img/magnum_logistika_logo.png')",
        }

        return(
            <div className="header-wrapper">
                <Link to="/"><div style={logo_img} className="logo"></div></Link>
                <div className="header-links">
                    <ul>
                        <li><Link to='/'>{lang.header.home}</Link></li>
                        <li style={this.props.active === 'o-nas' ? active : null }><Link style={this.props.active === 'o-nas' ? active_link : null } to='/o-nas'>{lang.header.about}</Link></li>
                        <li style={this.props.active === 'servis' ? active : null }><Link style={this.props.active === 'servis' ? active_link : null } to='/servis'>{lang.header.service}</Link></li>
                        <li style={this.props.active === 'kontakt' ? active : null }><Link style={this.props.active === 'kontakt' ? active_link : null } to='/kontakt'>{lang.header.contact}</Link></li>
                        <li className="lang-li"><LangMenu changeLanguage={this.props.changeLanguage} currentLangCode={this.props.currentLang.header.lang}/></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
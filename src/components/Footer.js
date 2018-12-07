import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default class Footer extends Component{
	render(){

		const lang = this.props.currentLang;
		
		return(
			<div className="footer-section-wrapper">
				<div className="footer-big-wrapper">
					<div className="footer-big-img-wrapper">
						<img width="300" src="/assets/img/magnum_logistika_logo.png" alt="Logo"/>
					</div>
					<div className="footer-big-section">
						<h3>Magnum Logistika</h3>
						<ul className="footer-big-list">
							<li><HashLink to="/#top" smooth>{lang.header.home}</HashLink></li>
							<li><Link to="/o-nas">{lang.header.about}</Link></li>
							<li><Link to="/kontakt">{lang.header.contact}</Link></li>
						</ul>
					</div>
					<div className="footer-big-section">
						<h3>{lang.header.contact}</h3>
						<ul>
							<li style={{fontWeight: 'bold'}}>Magnum logistika d.o.o.</li>
							<li>Obrtniška ul. 10,  3240 Šmarje pri Jelšah</li>
							<li><a className="footer-big-phone" href="tel:+38631590606">+386 31 590 606</a></li>
						</ul>
					</div>
				</div>

				<div className="footer-copyright-wrapper">
					<span>Copyright &copy; {moment().format('YYYY')} <a href="https://magnum-logistika.com/">Magnum Logistika</a>. All rights reserved.</span>
				</div>
			</div>
		);
	}
}
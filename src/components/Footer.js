import React, { Component } from 'react';
import moment from 'moment';

export default class Footer extends Component{
	render(){
		return(
			<div className="footer-section-wrapper">
				<div className="footer-big-wrapper">
					<div>
						<img width="300" src="./assets/img/magnum_logistika_logo.png"/>
					</div>
					<div>
						<h3>Magnum Logistika</h3>
						<ul>
							<li>Domov</li>
							<li>O Nas</li>
							<li>Kontakt</li>
						</ul>
					</div>
					<div>
						<h3>Kontakt</h3>
						<ul>
							<li>Magnum logistika d.o.o.</li>
							<li>Obrtniška ul. 10,  3240 Šmarje pri Jelšah</li>
							<li><a href="tel:+38631590606">+386 31 590 606</a></li>
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
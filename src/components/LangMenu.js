import React, { Component } from 'react';

class LangMenu extends Component{

    constructor(){
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(){
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
            this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
            });  
    }

    render(){

        return(
            <div className="menu-wrapper">
                {
                    this.props.currentLangCode === "sl" ? 
                        <div className="menu-active"> <a className="menu-active-link" onClick={() => {this.showMenu()}}><img src="./assets/img/lang/sl.png"/>sl</a> { this.state.showMenu ? <div className="menu" ref={(element) => {this.dropdownMenu = element;}}> <a onClick={() =>{this.props.changeLanguage("en")}}><img src="./assets/img/lang/en.gif"/>en</a> <a onClick={() =>{this.props.changeLanguage("de")}}><img src="./assets/img/lang/de.gif"/>de</a> </div> : null }</div> : 
                            this.props.currentLangCode === "en" ? 
                            <div className="menu-active"> <a className="menu-active-link" onClick={() => {this.showMenu()}}><img src="./assets/img/lang/en.gif"/>en</a> { this.state.showMenu ? <div className="menu" ref={(element) => {this.dropdownMenu = element;}}> <a onClick={() =>{this.props.changeLanguage("sl")}}><img src="./assets/img/lang/sl.png"/>sl</a> <a onClick={() =>{this.props.changeLanguage("de")}}><img src="./assets/img/lang/de.gif"/>de</a> </div> : null }</div> : 
                                    this.props.currentLangCode === "de" ? 
                                    <div className="menu-active"> <a className="menu-active-link" onClick={() => {this.showMenu()}}><img src="./assets/img/lang/de.gif"/>de</a> { this.state.showMenu ? <div className="menu" ref={(element) => {this.dropdownMenu = element;}}> <a onClick={() =>{this.props.changeLanguage("sl")}}><img src="./assets/img/lang/sl.png"/>sl</a> <a onClick={() =>{this.props.changeLanguage("en")}}><img src="./assets/img/lang/en.gif"/>en</a> </div> : null }</div> : 
                                    <div className="menu-active"> <a className="menu-active-link" onClick={() => {this.showMenu()}}><img src="./assets/img/lang/sl.png"/>sl</a> { this.state.showMenu ? <div className="menu" ref={(element) => {this.dropdownMenu = element;}}> <a onClick={() =>{this.props.changeLanguage("en")}}><img src="./assets/img/lang/en.gif"/>en</a> <a onClick={() =>{this.props.changeLanguage("de")}}><img src="./assets/img/lang/de.gif"/>de</a> </div> : null }</div>
                }
            </div>
        );
    }
}

export default LangMenu;
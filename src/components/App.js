import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import ReactGA from 'react-ga';

import '../App.css';
import Content from './Content';
import ONas from './ONas';
import Kontakt from './Kontakt';

import { lang1 } from './lang/sl';
import { lang2 } from './lang/en';
import { lang3 } from './lang/de';

import IzredniPrevozi from './ponudba/IzredniPrevozi';
import KontejnerskiPrevozi from './ponudba/KontejnerskiPrevozi';
import LadijskiPrevozi from './ponudba/LadijskiPrevozi';
import ZelezniskiTransport from './ponudba/ZelezniskiTransport';
import LetalskePosiljke from './ponudba/LetalskePosiljke';
import PrekladeTovora from './ponudba/PrekladeTovora';

var lang;

if (process.env.NODE_ENV === 'production') {
	ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID)
}

class App extends Component {

  state = {
    currentLangCode: 'sl',
  }

  changeLanguage = (langCode) =>{
    switch(langCode){
      case 'sl':
        lang = lang1;
        console.log("sl");
        this.setState({
          currentLangCode: 'sl',
        });
        break;
      case 'en':
        lang = lang2;
        console.log("en");
        this.setState({
          currentLangCode: 'en',
        });
        break;
      case 'de':
        lang = lang3;
        console.log("de");
        this.setState({
          currentLangCode: 'de',
        });
        break;
      default:
        lang = lang1;
        break;
    }
    //console.log(lang);
	}
	
	handlePageChange = () => {
		//console.log(window.location.pathname);
		ReactGA.pageview(window.location.pathname);
	}


  componentWillMount() {
    this.changeLanguage(this.currentLangCode);
	}
	
	componentDidMount(){
		ReactGA.pageview('/');
	}


  render() {
    return (
      <div className="App">
        {/* Routes */}
        <Switch onChange={this.yourHandler()} basename={'/'}>
          <Route exact path='/' render={(props) => <Content {...props} currentLang={lang} changeLanguage={this.changeLanguage}/>}/>
          <Route path='/o-nas' render={(props) => <ONas {...props} currentLang={lang} changeLanguage={this.changeLanguage}/>}/>
          <Route path='/kontakt' render={(props) => <Kontakt {...props} currentLang={lang} changeLanguage={this.changeLanguage}/>}/>

					<Route path='/ponudba/izredni-prevozi' render={(props) => <IzredniPrevozi {...props} currentLang={lang} changeLanguage={this.changeLanguage}/>}/>
					<Route path='/ponudba/kontejnerski-prevozi' render={(props) => <KontejnerskiPrevozi {...props} currentLang={lang} changeLanguage={this.changeLanguage}/>}/>
					<Route path='/ponudba/ladijski-prevozi' render={(props) => <LadijskiPrevozi {...props} currentLang={lang} changeLanguage={this.changeLanguage}/>}/>
					<Route path='/ponudba/zelezniski-transport' render={(props) => <ZelezniskiTransport {...props} currentLang={lang} changeLanguage={this.changeLanguage}/>}/>
					<Route path='/ponudba/letalske-posiljke' render={(props) => <LetalskePosiljke {...props} currentLang={lang} changeLanguage={this.changeLanguage}/>}/>
					<Route path='/ponudba/preklade-tovora' render={(props) => <PrekladeTovora {...props} currentLang={lang} changeLanguage={this.changeLanguage}/>}/>

        </Switch>
      </div>
    );
  }
}

export default App;
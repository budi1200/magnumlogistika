import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import '../App.css';
import Content from './Content';
import ONas from './ONas';
import Servis from './Servis';
import Kontakt from './Kontakt';
import { lang1 } from './lang/sl';
import { lang2 } from './lang/en';
import { lang3 } from './lang/de';

var lang;

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

  componentWillMount() {
    this.changeLanguage(this.currentLangCode);
  }

  render() {
    return (
      <div className="App">
        {/* Routes */}
        <Switch>
          <Route exact path='/' render={(props) => <Content {...props} currentLang={lang} changeLanguage={this.changeLanguage}/>}/>
          <Route path='/o-nas' render={(props) => <ONas {...props} currentLang={lang} changeLanguage={this.changeLanguage}/>}/>
          <Route path='/servis' render={(props) => <Servis {...props} currentLang={lang} changeLanguage={this.changeLanguage}/>}/>
          <Route path='/kontakt' render={(props) => <Kontakt {...props} currentLang={lang} changeLanguage={this.changeLanguage}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
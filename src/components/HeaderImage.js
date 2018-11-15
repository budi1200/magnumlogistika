import React, { Component } from 'react';

class HeaderImage extends Component{
    render(){
        return(
            <img className="body-header-image" src={this.props.bgImage}/>
        );
    }
}

export default HeaderImage;
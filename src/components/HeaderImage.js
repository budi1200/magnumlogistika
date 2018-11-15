import React, { Component } from 'react';

class HeaderImage extends Component{
    render(){

        const backgroundImage = {
            backgroundImage: "url('" + this.props.bgImage + "')",
        }
        return(
            <div style={backgroundImage} className="body-header-image"></div>
        );
    }
}

export default HeaderImage;
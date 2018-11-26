import React, { Component } from 'react';

class HeaderImage extends Component{
    render(){
        return(
					<div className="body-header-image-wrapper">
            <img className="body-header-image" src={this.props.bgImage}/>
						<div><span>{this.props.text}</span></div>
					</div>
        );
    }
}

export default HeaderImage;
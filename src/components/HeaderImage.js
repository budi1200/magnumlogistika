import React, { Component } from 'react';

class HeaderImage extends Component{
    render(){
        return(
					<div className="body-header-image-wrapper">
            {this.props.video ? 
							<video autoPlay={true} loop={true} muted={true}>
  							<source src={this.props.bgVideo} type="video/mp4"/>
							</video> 
							: <img className="body-header-image" src={this.props.bgImage} alt="Background"/>}
						<div style={{zIndex: "-2", background: "#332e2e"}}></div>
						<div>
							<span>{this.props.text}</span>
						</div>
					</div>
        );
    }
}

export default HeaderImage;
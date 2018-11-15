import React, { Component } from 'react';

class TransportTypes extends Component{

    getHeight = () =>{
        return window.innerHeight - 94;
    }

    state = {
        'height': this.getHeight(),
    }

    resize = () => {
        this.setState({
            'height': this.getHeight(),
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }
    
    render(){

        const bg_img = {
            backgroundImage: "url('" + this.props.img + "')",
            width: '100%',
            height: this.state.height,    
            backgroundSize: 'cover',
            backgroundPositionY: 'bottom',
        }

        return(
            <div style={bg_img}>
                {/*<ul className="body-img-left_links">
                    <li>Kontejnerji</li>
                    <li>Carina</li>
                    <li>Konvencionalni Tovori</li>
                </ul>*/}
            </div>
        );
    }
}

export default TransportTypes;
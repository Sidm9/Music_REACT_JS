import React, { Component } from 'react';
import img from "../img/landing-bg.jpg"
class Header extends Component {
    render() {
        return (
            <div style = {{backgroundImage: `url(${img})`}}>
                
            </div>
        );
    }
}

export default Header;
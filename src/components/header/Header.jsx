import './header.scss';
import { Component } from 'react';

class Header extends Component {
    state = {
        text: ""
    }

    setText = (text) => {
        this.setState((state) => {
            return {
                text: text
            }
        })
    }

    render() { 
        return (
            <div className='header'>
                <input onChange={(e) => this.setText(e.target.value)}/>
                <p>{ this.state.text }</p>
            </div>
        );
    }
}
 
export default Header;
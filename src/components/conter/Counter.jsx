import { Component } from 'react';
import Actions from './actions/Actions';
import Display from './display/Display';

class Counter extends Component {
    state = {
        counter: 0,
        isShow: true
    }

    plus = () => {
        this.setState((state) => {
            return {
                counter: state.counter + 1
            }
        })
    }

    minus = () => {
        this.setState((state) => {
            return {
                counter: state.counter - 1
            }
        })
    }

    toggle = () => {
        this.setState((state) => {
            return {
                isShow: !state.isShow
            }
        })
    }

    render() {
        return (
            <div>
                <Actions plus={this.plus} minus={this.minus} toggle={this.toggle}/>
                <Display counter={this.state.counter} isShow={this.state.isShow}/>
            </div>
        );
    }
}
 
export default Counter;
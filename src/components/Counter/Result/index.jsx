import {connect} from 'react-redux'

const ConnectResult = ({counter}) => {
    return (
        <p>{counter}</p>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducerState.counter
    }
}

export const Result = connect(mapStateToProps)(ConnectResult)
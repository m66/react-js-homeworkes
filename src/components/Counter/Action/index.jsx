import {connect} from 'react-redux'
import {incrementCounterAction, decrementCounterAction} from '../../../redux/actions/counter-actions'

const ConnectedActions = ({ incrementCounter, decrementCounter }) => {
    return (
        <div className="mt-50">
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
        </div>
    )
}


export const Action = connect(null, {
    incrementCounter: incrementCounterAction,
    decrementCounter: decrementCounterAction
})(ConnectedActions)
function Actions({ plus, minus, toggle }) {
    return (
        <div>
            <button className="minus" onClick={minus}>  -  </button>
            <button className="plus" onClick={plus}>  +  </button>
            <button className="toggle" onClick={toggle}>toggle</button>
        </div>
    );
}

export default Actions;
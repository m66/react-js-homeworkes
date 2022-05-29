function Display({counter, isShow}) {

    const displayStyle = {
        display: isShow ? 'block' : 'none'
    }

    return (
        <div style={displayStyle}>
            {counter}
        </div>
    );
}

export default Display;
import React from 'react';
import "./usestyle.css";

const UseState = () => {
    const intialData = 15;
    const [myNumber, setmyNumber] = React.useState(intialData);


    return (
        <>
            <div className ="container1">
                <div className="center_div">
                    <p>{myNumber}</p>
                    <div className="button2" onClick={() => setmyNumber(myNumber + 1)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        INCREMENT
                    </div>
                    <div className="button2" onClick={() => (myNumber != 0) ? setmyNumber(myNumber - 1) : setmyNumber(0)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        DECREMENT
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseState;
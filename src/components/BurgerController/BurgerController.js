import React from 'react';
import './BurgerController.css';

const BurgerController = (props) => {



    return(
        <div className="controls">
            <h3>Current Price: {props.totalPrice}</h3>
            <div className="controls-row">
                <span>Salad</span>
                <button className="controls-btn"  datakey="salad" onClick={props.clickLess(this.datakey)}>Less</button>
                <button className="controls-btn"  datakey="salad" onClick={props.clickMore(this.datakey)}>More</button>
            </div>
            <div className="controls-row">
                <span>Meat</span>
                <button className="controls-btn"  datakey="meat" onClick={props.clickLess(this.datakey)}>Less</button>
                <button className="controls-btn"  datakey="meat" onClick={props.clickMore(this.datakey)}>More</button>
            </div>
            <div className="controls-row">
                <span>Cheese</span>
                <button className="controls-btn"  datakey="cheese" onClick={props.clickLess(this.datakey)}>Less</button>
                <button className="controls-btn"  datakey="cheese" onClick={props.clickMore(this.datakey)}>More</button>
            </div>
            <div className="controls-row">
                <span>Bacon</span>
                <button className="controls-btn"  datakey="bacon" onClick={props.clickLess(this.datakey)}>Less</button>
                <button className="controls-btn"  datakey="bacon" onClick={props.clickMore(this.datakey)}>More</button>
            </div>

        </div>
    )
};

export default BurgerController;


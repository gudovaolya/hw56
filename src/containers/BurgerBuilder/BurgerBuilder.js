import React, { Component } from 'react';
import Burger from "../../components/Burger/Burger";
import BurgerController from "../../components/BurgerController/BurgerController";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 2,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    };

    prices = {
        salad: 5,
        meat: 50,
        cheese: 20,
        bacon: 30,
        basePrice: 20
    };

    moreAmount = (event) => {
        const ingredients = {...this.state.ingredients};
        const key = event.target.getAttribute('datakey');
        const btnLess = event.target.previousElementSibling;
        if (btnLess.hasAttribute('disabled')){
            btnLess.removeAttribute('disabled');
        }
        let amount = this.state.ingredients[key];
        amount++;
        ingredients[key] = amount;
        this.setState({ingredients});
    };

    lessAmount = (event) => {
        const ingredients = {...this.state.ingredients};
        const key = event.target.getAttribute('datakey');

        let amount = this.state.ingredients[key];
        amount--;
        if (amount === 0) {
            event.target.setAttribute('disabled', 'disabled');
        }
        ingredients[key] = amount;
        this.setState({ingredients});
    };

    getTotalPrice = () => {
        let totalPrice = 0;
        const ingredients = {...this.state.ingredients};
        const keys = Object.keys(ingredients);
        keys.forEach(key => {
            totalPrice += ingredients[key]*this.prices[key];
        });
        return totalPrice;
    };

    render() {
        return (
            <div className="burger-block">
                <div className="burger">
                    <Burger ingredients = {this.state.ingredients} />
                </div>
               <BurgerController
                   clickMore={(event) => this.moreAmount}
                   clickLess={(event) => this.lessAmount}
                   totalPrice={this.getTotalPrice()}
               />
            </div>
        )
    }
}

export default BurgerBuilder;
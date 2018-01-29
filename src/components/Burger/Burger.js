import React from 'react';
import './Burger.css';

const Burger = (props) => {

    let ingredients = props.ingredients;

    const getIngredients = () => {
        let ingredientNames = Object.keys(ingredients);

        const ingredientsComponent = [];

        ingredientNames.forEach((name) => {
            let amount = ingredients[name];
            for (let i = 0; i < amount; i++) {
                if (name === 'salad') {
                    ingredientsComponent.push(<div className="Salad" key={(i + 1) + 's'}/>);
                } if (name === 'meat') {
                    ingredientsComponent.push(<div className="Meat" key={(i + 1) + 'm'}/>);
                } if (name === 'cheese') {
                    ingredientsComponent.push(<div className="Cheese" key={(i + 1) + 'c'}/>);
                } if (name === 'bacon') {
                    ingredientsComponent.push(<div className="Bacon" key={(i + 1) + 'b'}/>);
                }
            }
        });

        return ingredientsComponent;
    };

   let ingredientsComponent = getIngredients();

   return (
       <div className="Burger">
           <div className="BreadTop">
               <div className="Seeds1" />
               <div className="Seeds2" />
           </div>
           {ingredientsComponent}
           <div className="BreadBottom" />
       </div>
   )
};

export default Burger;


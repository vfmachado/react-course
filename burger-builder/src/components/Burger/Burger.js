
import React from 'react';
import styles from './Burger.module.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please make your best burger</p>;
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            {/*
            <BurgerIngredient type='salad' />
            <BurgerIngredient type='bacon' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' />
            */}

            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default Burger;
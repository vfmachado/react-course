
import React from 'react'

import style from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = (props) => {
    return (
        <div className={style.BuildControls}>
            <p><strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(control => {
                return <BuildControl
                    key={control.label}
                    label={control.label}
                    removed={() => props.ingredientRemoved(control.type)}
                    added={() => { props.ingredientAdded(control.type) }}
                    disabled={props.disabled[control.type]}
                />
            })}

        </div>
    );
}

export default BuildControls;
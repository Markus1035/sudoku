
/** Custom Button
 * React component that renders a single button with a custom style, 
 * and directs to another page based on received props
 */

import React from 'react';
import {withRouter} from 'react-router-dom'

import './custom-button.styles.scss';

const CustomButton = ({to, children, history, ...otherProps}) => (
    <button className='custom-button'
            {...otherProps}
            onClick={() => to ? history.push(to) : null}
    >
        {children}
    </button>
);

export default withRouter(CustomButton);
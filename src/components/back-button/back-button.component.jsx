import React from 'react';
import { withRouter } from 'react-router-dom';

import './back-button.styles.scss';

const BackButton = ({history}) => (
    <div className='back-button'>
        <span onClick={() => history.push('/')}>Back</span>
    </div>
)

export default withRouter(BackButton);
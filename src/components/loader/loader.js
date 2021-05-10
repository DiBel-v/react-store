import React from 'react';
import SvgComponent from '../global/svg-component';
import './loader.sass';

const Loader = () => {
    return (
        <div className="loader">
            <SvgComponent className="loader__icon" name='loader' />
        </div>
    )
}

export default Loader;

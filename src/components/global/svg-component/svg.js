import React from 'react';
import './svg.sass';

const SvgComponent = ({ name, className }) => {
    return (
        <svg className={`icon_${name} ${className.length ? className : ''}`} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`/sprite.svg#${name}`} xmlnsXlink="http://www.w3.org/1999/xlink"></use>
        </svg>
    )
}

export default SvgComponent;

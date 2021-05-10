import React from 'react';
import nice from '../../media/images/nice.jpg';
import './purchase-modal.sass';

const PurchaseModal = ({price}) => {
    return(
        <div className="purchase-modal">
            <img className="purchase-modal__img" src={nice} />
        </div>
    );
}

export default PurchaseModal;

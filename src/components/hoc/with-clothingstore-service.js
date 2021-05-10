import React from 'react';
import { ClothingstoreServiceConsumer } from '../clothingstore-service-context';

const withClothingstoreService = () => (Wrapped) => {
    return (props) =>{
        return (
            <ClothingstoreServiceConsumer>
                {
                    (clothingstoreService) => {
                        return (<Wrapped {...props} clothingstoreService={clothingstoreService} />)
                    }
                }
            </ClothingstoreServiceConsumer>
        );
    }
}

export default withClothingstoreService;

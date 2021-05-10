import React, { Component } from 'react';
import './home.sass';
import homeImg from '../../../media/images/main1.png';
import newCol from '../../../media/images/new-collection.jpg';
import accessories from '../../../media/images/accessories.jpg';
import shoes from '../../../media/images/shoes.jpg';
import clothes from '../../../media/images/clothes.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home__information">
                    The best creative stuff
                </div>
                <img className="home__img" src={homeImg} />
                <div className="home__target-block">
                    <div className="home__new-collection">
                        <figure className="home__container">
                            <img className="home__image" src={newCol}/>
                            <figcaption className="home__image-caption">
                                <div className="home__caption-text">
                                    New denim collection
                                </div>
                                <button className="home__caption-button">Shop now</button>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="home__accessories">
                        <figure className="home__container">
                            <img className="home__image" src={accessories}/>
                            <figcaption className="home__image-caption">
                                <div className="home__caption-text">
                                    Small pleasures
                                </div>
                                <button className="home__caption-button">Accessories</button>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="home__shoes">
                        <figure className="home__container">
                            <img className="home__image" src={shoes}/>
                            <figcaption className="home__image-caption">
                                <div className="home__caption-text">
                                    Lightness and comfort
                                </div>
                                <button className="home__caption-button">Shoes</button>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="home__clothes">
                        <figure className="home__container">
                            <img className="home__image" src={clothes}/>
                            <figcaption className="home__image-caption">
                                <div className="home__caption-text">
                                    Environmentally friendly materials
                                </div>
                                <button className="home__caption-button">Clothes</button>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

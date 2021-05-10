import React, { Component } from 'react';
import './main.sass';
import { Home, Accessories, Clothes, Shoes, ProductCart } from '../pages';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {

    render() {
        const { isNavigationListDropped } = this.props;

        return (
            <div className={`main ${isNavigationListDropped ? 'main_is_blured' : ''}`}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/clothes" component={Clothes} exact />
                    <Route path="/accessories" component={Accessories} exact />
                    <Route path="/shoes" component={Shoes} exact />
                    <Route path="/cart" component={ProductCart} exact />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ stylesDependency: { isNavigationListDropped }}) => {
    return { isNavigationListDropped };
};

export default connect(mapStateToProps)(Main);

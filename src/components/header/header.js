import React, { Component } from 'react';
import './header.sass';
import UserIcon from '../../media/svg/user.svg';
import Cart from '../../media/svg/cart.svg';
import DropNavigation from '../drop-navigation';
import { navigationOpened } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom"
import SvgComponent from '../global/svg-component';
import Sidebar from '../sidebar';

const headerList = [
    {
        name: 'SALE',
        type: 'sale'
    },
    {
        name: 'CLOTHES',
        type: 'clothes'
    },
    {
        name: 'ACCESSORIES',
        type: 'accessories'
    },
    {
        name: 'SHOES',
        type: 'shoes'
    }
];

class Header extends Component {

    state = {
        dropList: {
            isOpened: false,
            list: ''
        },
        isSidebarOpened: false
    }

    mouseEnter = (event, listType) => {
        if (listType === 'sale') {
            this.setState({
                dropList: {
                    isOpened: false,
                    list: ''
                },
                isSidebarOpened: this.state.isSidebarOpened
            })
        } else {
            this.setState({
                dropList: {
                    isOpened: true,
                    list: listType
                },
                isSidebarOpened: this.state.isSidebarOpened
            })
            this.props.onNavigationDrop(true);
        }
    }

    mouseLeave = (event) => {
        if (event.relatedTarget.className === 'header__center' || 
            (event.relatedTarget.className && event.relatedTarget.className.indexOf && event.relatedTarget.className.indexOf('drop-navigation') !== - 1)) {
            return;
        }
        this.setState({
            dropList: {
                isOpened: false,
                list: ''
            },
            isSidebarOpened: this.state.isSidebarOpened
        })
        this.props.onNavigationDrop(false);
    }

    toggleSidebar(isOpened) {
        this.setState({
            dropList: {
                isOpened: false,
                list: ''
            },
            isSidebarOpened: isOpened
        })
    }
    
    openSale = (type) => {
        if (type !== 'sale') return;
        this.props.history.push('/');
    }

    render() {
        const { totalCount } = this.props;
        const listElem = ({name, type}) => (
            <li key={type}
                className={`header__center-element
                ${type === 'sale' ? 'header__center-element_attention' : 'header__center-element_main'}
                ${this.state.dropList.isOpened && this.state.dropList.list === type ? 'header__center-element_hover' : ''}`}
                onMouseEnter={e => this.mouseEnter(e, type)}
                onMouseLeave={this.mouseLeave}
                onClick={() => this.openSale(type)}>
                {name}
            </li>
        );

        return (
            <header className="header" onMouseLeave={this.mouseLeave}>
                <div className="header__main" onMouseEnter={this.mouseLeave}>
                    <span className="header__logo">SNACK</span>
                    <ul className="header__center">
                        {
                           headerList.map((elem) => {
                               return (
                                    listElem(elem)
                               )
                           }) 
                        }
                    </ul>
                    {
                        this.state.isSidebarOpened ? <Sidebar onSidebarClose={() => this.toggleSidebar(false)} headerList={headerList} /> : ''
                    }
                    <div className="header__right">
                        <div className="header__right-element">
                            <input className="header__search"></input>
                        </div>
                        <div className="header__right-element"><UserIcon width={20} height={20}/></div>
                        <div className="header__right-element header__right-element_cart" onClick={() => this.props.history.push('/cart')}>
                            { totalCount ? <div className="header__total-count">{totalCount}</div> : '' }
                            <Cart width={20} height={20}/>
                        </div>
                        <div className="header__sidebar" onClick={() => this.toggleSidebar(!this.state.isSidebarOpened)}>
                            <SvgComponent className="header__sidebar-icon" name={this.state.isSidebarOpened ? 'close' : 'menu' } />
                        </div>
                    </div>
                </div>
                {
                    this.state.dropList.isOpened ? <DropNavigation currentSection={this.state.dropList.list} /> : ''
                }
            </header>
        );
    }
}

const mapStateToProps = ({ cart: { totalCount }}) => {
    return { totalCount };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onNavigationDrop: navigationOpened
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

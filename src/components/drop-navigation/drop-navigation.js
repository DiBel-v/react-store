import React, { Component } from 'react';
import sections from '../../helpers/navigation-list';
import './drop-navigation.sass';
import { Link } from "react-router-dom";
import NIcon from '../../media/images/n-letter.jpg';
import SIcon from '../../media/images/s-letter.jpg';

class DropNavigation extends Component {

    renderCurrentSection(sectionType) {
        return (
            sections[sectionType].map(elemName =>
                (<Link to={`/${sectionType}`} key={elemName} className="drop-navigation__list-item">{elemName}</Link>) 
            )
        )
    }

    dynamicListStyle(sectionType) {
        let sectionClassList = 'drop-navigation__list';
        switch(sectionType) {
            case 'shoes':
                sectionClassList = `${sectionClassList} drop-navigation__list_shoes`;
                break;
            case 'accessories':
                sectionClassList = `${sectionClassList} drop-navigation__list_accessories`;
                break;
            case 'clothes':
                sectionClassList = `${sectionClassList} drop-navigation__list_clothes`;
                break;
            default:
                sectionClassList = 'drop-navigation__list';
        }
        return sectionClassList;
    }

    render() {
        const { currentSection } = this.props;
        return (
            <div className="drop-navigation">
                <aside className="drop-navigation__image-container">
                    <img className="drop-navigation__image" src={SIcon}/>
                </aside>
                {
                    Object.keys(sections).map(list =>
                        (
                            <ul key={list} className={this.dynamicListStyle(list)}>
                                { currentSection === list ? this.renderCurrentSection(currentSection) : '' }
                            </ul>
                        )
                    )
                }
                <aside className="drop-navigation__image-container">
                    <img className="drop-navigation__image" src={NIcon}/>
                </aside>
            </div>
        )
    }
}

export default DropNavigation;

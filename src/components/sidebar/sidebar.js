import React, { useState, useEffect } from 'react';
import sections from '../../helpers/navigation-list';
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom";

import './sidebar.sass';

const Sidebar = ({ headerList, onSidebarClose, history }) => {

    const [isSectionOpened, setSectionOpened] = useState(false);
    const [currentSectionType, setCurrentSectionType] = useState('');

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return function returnDefaultSettings() {
            document.body.style.overflow = "hidden auto";
        }
    })

    const openCurrentSection = (sectionType) => {
        const isOpened = sectionType !== currentSectionType;
        setSectionOpened(sectionType !== currentSectionType);
        setCurrentSectionType(isOpened ? sectionType : '')
        if (sectionType === 'sale') {
            onSidebarClose();
            history.push('/');
        }
    }

    return (
        <div className="sidebar">
            <ul className="sidebar__list">
                {
                    headerList.map((el) => {
                        return (
                            <li
                                key={el.type}
                                className={`sidebar__item ${el.type === 'sale' ? 'sidebar__item_sale' : ''}`}
                                onClick={() => openCurrentSection(el.type)}
                            >
                                {el.name}
                                {
                                    isSectionOpened && currentSectionType !== 'sale' && currentSectionType === el.type
                                        ? <ul className="sidebar__sub-list">
                                                { 
                                                    sections[currentSectionType].map((elemName) => {
                                                        return (
                                                            <Link 
                                                                onClick={() => onSidebarClose()}
                                                                to={`/${currentSectionType}`}
                                                                key={elemName}
                                                                className="sidebar__sub-list-item"
                                                            >
                                                                {elemName}
                                                            </Link>
                                                        )
                                                    })
                                                }
                                           </ul>
                                        : ''
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default withRouter(Sidebar);

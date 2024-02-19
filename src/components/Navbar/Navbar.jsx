import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import './Navbar.css'

function Navbar() {

    const [showSearchInput, setShowSearchInput] = useState(false);

    const toggleSearchInput = () => {
        setShowSearchInput(prevState => !prevState);
    };


    return (
        <>
            <div className="header">
                <div className="left">
                    <h2>Beatz</h2>
                </div>
                <div className="right">
                    {showSearchInput && (
                        <div className="searchField">
                            <input
                                type="text"
                                id="search_input"
                                className="searchInput"
                                placeholder="Search songs, albums, artists"
                                autoFocus
                            />
                        </div>
                    )}
                    <i className="ri-search-line" onClick={toggleSearchInput}></i>
                </div>

            </div>
        </>
    );
}

export default Navbar
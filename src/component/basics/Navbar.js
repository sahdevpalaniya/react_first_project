import React from 'react';


const Navbar = ({ filterItem, MenuList }) => {
    return (
        <>
            <nav className="navbar1">
                <div className="btn-group">
                    {
                        MenuList.map((curElem) => {
                            return <button className="btn-group__item" onClick={() => { filterItem(curElem) }} key={curElem}>{curElem}</button>
                        })
                    }
                </div>
            </nav>
        </>
    );
}

export default Navbar;
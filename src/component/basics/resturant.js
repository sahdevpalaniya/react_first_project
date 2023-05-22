import React from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './Menucard';
import Navbar from './Navbar';


const uniquelist =  [
    ...new Set(
        Menu.map((data) => {
            return data.category;
        })
    ),
    "All",
];

const Resturant = () => {

    const [MenuData, setMenuData] = React.useState(Menu);
    const [MenuList, setMenuList] = React.useState(uniquelist);

    const filterItem = (category) => {
        if(category === "All")
        {
            setMenuData(Menu);
            return;
        }
        const updatedlist = Menu.filter((data) => {
            return data.category === category;
        });
        setMenuData(updatedlist);
    }
    return (
        <>
            <Navbar filterItem={filterItem} MenuList={MenuList} />
            <MenuCard MenuData={MenuData} />
        </>
    );
}

export default Resturant;
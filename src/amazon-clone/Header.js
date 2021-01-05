import React  from 'react'
import './Header.css'


// icons
import {Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// context api 
import {useStateValue} from '/home/bhubesh/react-clone-two/src/StateProvider.js'

function Header() {
    const [{cart} , dispatch] = useStateValue();
     console.log('this is cart' , cart);
    return (
        <div className = 'header'>
            <Link to = '/'>

            <img className = 'header__logo' src = 'https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png' alt = ''>
            
            </img>
            
            </Link>
        {/* search icon */}

        <div className="header__search">
            <input type = 'text' className = 'header__inputxt'>
            </input>
            <SearchIcon className = 'header__searchIcon'></SearchIcon>
        </div>

        <div className="header__nav">
               <Link to = '/Login'>
            <div className = 'header__option'>
                <span className = 'header__optionlineone'>
                    Hello Guest
                </span>
               <span className = 'header__optionlinetwo'>
                    Sign In
                </span>
            </div>
            </Link>
            <div className = 'header__option'>
            <span className = 'header__optionlineone'>
                    Returns
                </span>
                <span className = 'header__optionlinetwo'>
                    & Orders
                </span>
            </div>
            <div className = 'header__option'>
            <span className = 'header__optionlineone'>
                    Your
                </span>
                <span className = 'header__optionlinethree'>
                    Prime
                </span>
            </div>
            <Link to = '/checkout'>
            <div className="header__optionBasket">
                <ShoppingCartIcon></ShoppingCartIcon>
                <span className = 'header__optionlinetwo header__basketcount'>
                    {cart.length}
                </span>
            </div>
            </Link>
        </div>

        </div>
    )
}

export default Header

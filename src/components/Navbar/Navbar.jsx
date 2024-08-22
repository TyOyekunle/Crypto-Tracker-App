import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo23.png'
import dark_icon from '../../assets/dark.svg'
import { CoinContext } from '../../context/CoinContext'

const Navbar = () => {
  //get the setCurrency function from the context file

  const { setCurrency } = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value) {

      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "naira": {
        setCurrency({ name: "inr", symbol: "#" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }

      
      default : {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
        
        
    }
  }

  return (
    // code for the navbar class
    <div className='navbar'>
      {/* inserting the logo image */}
      <img src={logo} alt="" className='logo' />
      {/* code for the menu links */}
      <ul>
        <li> Home </li>
        <li> Features </li>
        <li> Pricing </li>
        <li> Blog </li>
      </ul>
      {/* code for right nav menu items */}
      <div className='nav-right'>

        <select onChange={currencyHandler}>
          <option value='usd'> USD</option>
          <option value='naira'> NAIRA</option>
          <option value='eur'> EURO</option>
          
        </select>

        <img src={dark_icon} alt="" className='dark_icon' />
        <button> Sign up </button>
      </div>
    </div>
  )
}

export default Navbar

import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'

const Home = () => {

const {allCoin, currency} = useContext(CoinContext);
const [displayCoin, setDisplayCoin] = useState([]);

// search box functionality with a state that will restore the data that wil be typed
const [input, setInput]= useState('');

const inputHandler = (event)=>{
setInput(event.target.value);
}

const searchHandler = async (event)=>{
event.preventDefault(); //to prevent page from reloading when searching
const coins = await allCoin.filter((item)=>{
return item.name.toLowerCase().includes(input.toLowerCase()) //this will include the search string among the options that are shown
})
//to display the updated data in the table
setDisplayCoin(coins);
}

useEffect(()=>{
  setDisplayCoin(allCoin);
},[allCoin])


  return (
    <div className='home'>

      <div className='hero'>
        <h1>View the <br /> latest Crypto Market updates</h1>
        <p> <em>Track your favorite coins in a simple way. Check prices in USD, NAIRA and EURO. </em><br/> Sign up to learn more</p>
        
        <form onSubmit={searchHandler}>
          <input onChange= {inputHandler} value={input} type='text' placeholder='Search crypto name ..' 
          required/>
          <button type='submit'> Search </button>
       
        </form>
      </div>
{/* displaying the API data in a table */}
      <div className='crypto-table'>
        <div className='table-layout'>
          <p>#</p>
          <p> Coins </p>
          <p> Price </p>
          <p className='price-change' style={{textAlign: "center"}}> 24H price change </p>
          <p className='market-cap' > Market Cap </p>
          <p className='trading-volume'> Trading volume </p>
        </div>

        {
          displayCoin.slice(0,10).map((item, index)=>(
            <div className="table-layout" key={index} >
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + "-" + item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h>0?
                "green": "red" }>
                {Math.floor(item.price_change_percentage_24h*100)/100}</p>
            <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
            <p className='trading-volume'>{item.total_volume}</p>
            
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Home

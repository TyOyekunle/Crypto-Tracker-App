// creating the create context hook
import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

// context provider function

const CoinContextProvider = (props)=>{

    // state variables where the api data will be stored. They have been initialised with an object with 2 properties name and symbol
    // The function updates the frequency
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency]= useState({
        name: "usd",
        symbol: "$"
    })

    // function that will fetch the api data

    const fetchAllCoin = async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key':
                 'CG-K2uX6oqunH48Y7TB4ReJQZtH'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`, options)
            .then(response => response.json()) //this will convert the response to json
            .then(response => setAllCoin(response)) //response will be printed to the setCoin variable which will update the 
            .catch(err => console.error(err)); 



    }

    //useEffect will call the fetchAllCoin function which will fetch the data from the api
    //and the data will be stored in allCoin state variable
    useEffect(()=>{
        fetchAllCoin();
    },[currency])

const contextValue = {
    allCoin, currency, setCurrency
}

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;
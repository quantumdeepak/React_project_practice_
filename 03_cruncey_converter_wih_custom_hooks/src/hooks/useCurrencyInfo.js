// import { data } from "autoprefixer";
// import { useEffect, useState } from "react";

// function use_currency_info(currency) {
//     useEffect ( ( ) => {
//         let [data setData] =useState({})
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         // we and multiple chaning statment in fetch
//         .then( response => response.json() )
//         .then(res => setData(res[currency]))
//         console.log(data)
//     },[currency])

//     //  the second aerument is the dependency array
//     //  this array contains the list of variable that we want to watch for change if the variable change then the effect will run again
//     return data
// }

// //  we are exporting the entire function

// export default use_currency_info;

import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
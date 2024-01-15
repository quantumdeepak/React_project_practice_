import { data } from "autoprefixer";
import { useEffect, useState } from "react";

function use_currency_info(currency) {
    useEffect ( ( ) => {
        let [data setData] =useState({})
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // we and multiple chaning statment in fetch
        .then( response => response.json() )
        .then(res => setData(res[currency]))
        console.log(data)
    },[currency])

    //  the second aerument is the dependency array
    //  this array contains the list of variable that we want to watch for change if the variable change then the effect will run again
    return data
}
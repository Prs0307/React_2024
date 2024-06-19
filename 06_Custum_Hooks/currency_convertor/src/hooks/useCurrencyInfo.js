import { useEffect,useState }      from "react";

// api call 

function useCurrencyInfo(currency) {
    const [data,setData]=useState({})
    let url2=`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    useEffect(()=>{
        fetch(url2).then((res)=>res.json()).then((res)=>setData(res))
    },[])
}
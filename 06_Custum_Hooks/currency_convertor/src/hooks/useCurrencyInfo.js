import { useEffect,useState }      from "react";

// api call 

function useCurrencyInfo(currency) {
    const [data,setData]=useState({})
    let url2=`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    useEffect(()=>{
        fetch(url2).then((res)=>res.json())
        .then((res)=>{
            // console.log(res[currency]);
            setData(res[currency])
        })
        // .then(res=>{
        //     // setData(res[currency])

        //      console.log(res["usd"]?res["usd"]:"not found");

        // })
        .catch((error) => console.log('Error fetching currency data:', error)); // Handle errors
        console.table(data)

    },[currency])
    // console.log(data);
    return data;

}
export default useCurrencyInfo;
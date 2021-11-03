import { useState, useEffect } from 'react';


const useFetch = (url) => {

    const [data, setData] = useState([]);


    useEffect(() => {
        let ftch = () => { 
            fetch(url, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "burgers1.p.rapidapi.com",
                        "x-rapidapi-key": "bbad20f292msh2f3a0a7d0cadb10p14c2c2jsn38329dceb43d"
                    }
              })
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch data")
                }
                return res.json();
            })
            .then(data => {
                console.log(data)
                setData(data);
            })
            .catch(err => {
                console.log(err.message);
            })
        }
        ftch();
    }, [url])

    return { data };
}

export default useFetch;
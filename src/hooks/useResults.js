import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default ()=>{

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
      //buradaki [] nedeni api içerisindeki 'bussiness:[] içerisindeki
      //verileri çekerek onları kullanmak adına yapılan bir useState
  
    const searchApi = async searchTerm => {
      //async or yelp.get('/seach').then but first option make sense
  
      try {
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'san jose'
          }
        });
        setResults(response.data.businesses);
      } catch (err) {
        console.log("this is  the error=>  "+err);
        setErrorMessage('Something went wrong');
      }
    };
  
    
    //Call searchApi when component
    //is first rendered. BAD CODE !
    // searchapi('pasta')
    //It would be run a many mant times
    useEffect(() => {
      searchApi('cake');
    }, []);
return [searchApi,results,errorMessage];  
};
import axios from "axios";



export default axios.create({
baseURL:"https://api.yelp.com/v3/businesses",
headers:
{
    Authorization:'Bearer H8vcVQjChQoVMMupFL_1GRbzQaq63uJ8IQ6AH7RN2UwUPsZBjwblriJcHK4DnKQknsdSSEDPYTZ1vttb2X3pPz-iu2f53KCBdmZOj536vY5IG9hs16oMIweFvIXSYnYx'
}
});

//yelp.get('/search')
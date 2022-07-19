import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer u3e23dclDpj3DTYV8dA_gt7XQOxuh32zMqNufC2cx02M4yYsF9gBhYokAQ2XNhMVPk4EzRl5V3YniGeeCOoMnQ7NohdneRV7oRag9Q3a_ewZn6uxvyJnxrngYGTVYnYx",
  },
});

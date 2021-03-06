
// for a payment function
// https://macarthur.me/posts/building-a-lambda-function-with-netlify
// https://www.raymondcamden.com/2019/01/08/adding-serverless-functions-to-your-netlify-static-site
require('dotenv').config()
const axios = require("axios")
const qs = require("qs")


exports.handler = (event, context, callback) => {

    
    const statusCode = 200;
    const headers = {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Headers": "Content-Type"
    };
    
    console.log(process.env)
    
    callback(null, {
        statusCode,
        headers,
        body: 'Let there be light!'
      });
      

    /*
  // apply our function to the queryStringParameters and assign it to a variable
  const API_PARAMS = qs.stringify(event.queryStringParameters)
  // Get env var values defined in our Netlify site UI
  const { API_TOKEN, API_URL } = process.env
  // In this example, the API Key needs to be passed in the params with a key of key.
  // We're assuming that the ApiParams var will contain the initial ?
  const URL = `${API_URL}?${API_PARAMS}&key=${API_TOKEN}`

  // Let's log some stuff we already have.
  console.log("Injecting token to", API_URL);
  console.log("logging event.....", event)
  console.log("Constructed URL is ...", URL)

   // Here's a function we'll use to define how our response will look like when we call callback
  const pass = (body) => {callback( null, {
    statusCode: 200,
    body: JSON.stringify(body)
  })}

  // Perform the API call.
  const get = () => {
    axios.get(URL)
    .then((response) =>
      {
        console.log(response.data)
        pass(response.data)
      }
    )
    .catch(err => pass(err))
  }
  if(event.httpMethod == 'GET'){
    get()
  };
  */
};


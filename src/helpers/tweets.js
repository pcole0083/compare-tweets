var Twitter = require('twitter');

const tokens = {
  consumer_key:        process.env.TWITTER_CONSUMER_KEY || "V476D79kOpgbS5FUTzjJlV13p",
  consumer_secret:     process.env.TWITTER_CONSUMER_SECRET || "gdUKV4wUENYEUCbwcEdgkTKxivqbhFe0P0RuHQmerUoD4dvD88",
  access_token:        process.env.TWITTER_ACCESS_TOKEN_KEY || "173637879-yRGEFI4GKfqmz0KkeqlEQnCokGVmnwMEJllbWl0C",
  access_token_key:    process.env.TWITTER_ACCESS_TOKEN_KEY || "173637879-yRGEFI4GKfqmz0KkeqlEQnCokGVmnwMEJllbWl0C",
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || "mg5CsxtAXtBSjGxCRFvBlnx5jr0hSILhithiG6IEIJLFs",
  request_options: {
  	headers: {
    	"Access-Control-Allow-Origin": "*",
    	"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  	}
  }
};

var client = new Twitter(tokens);

var params = {screen_name: 'zairon87'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
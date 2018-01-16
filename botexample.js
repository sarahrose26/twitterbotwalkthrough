//test to make sure it is working
console.log('the bot is starting')

//imports the package/module
var Twit = require('twit'); 

//refers to the config file, which includes all of our authentication code
var config = require('./config');
//console.log(config) should give back the Twit object

//creates a new instance of Twit
var T = new Twit(config);

//grab example get request from sample code using the twit package to demo a get request
//queries for a search term and a certain amount of tweets
//notice keys for the json object
//T.get('search/tweets', { 
//    q: 'space cat', //term you're searching Twitter for
//    count: 10 //the amount of tweets you're pulling back
//}, 
//    function(err, data, response) {
//    //this will log all of the data associated with each tweet
//    //console.log(data)
//    //added this for loop to just pull back the text of tweets
//    var tweets = data.statuses;
//    for (var i = 0; i<tweets.length; i++){
//       console.log(tweets[i].text) 
//    }
//})

//post request to post a tweet
//err likely has information in it to do something if there's an error
//T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//this if statement consoloe logs a message if there's an error
//    if err {
//        console.log("something went wrong")
//    }else{
//          console.log("it worked!")
//}
//  console.log(data)
//})

//from here, get your code posting tweets to your account

//sets up user stream
//var stream = T.stream('user');

//event occurs when someone follows me; streaming documentation tells what could exist in that first argument
//stream.on('follow', followed);

//what is the data associated with this particular event?
//json data
//function followed(eventMsg) {
//    console.log("Follow event!");
//    var name = eventMsg.source.name;
//    var screenName = eventMsg.source.screen_name;
//    tweetIt('@' + screenName + ' sup?');
//}

//the below code tweets in intervals to schedule tweets from node

//if you tweet the same thing twice in quick succession, you'll get an error message because Twitter won't allow it.

//tweetIt();
//
//setInterval is a Javascript function
//setInterval(tweetIt, 1000*20);
//
//function tweetIt() {
//    var r = ['1', '2', '3', '4'];
//    var quote = r[Math.floor(Math.random()*r.length)];
//    
//    
////set up the tweet. this is the most important part!
//    var tweet = {
//     status: quote
//    }
//
//    //make the post
//    T.post('statuses/update', tweet, tweeted);
//
//    //don't really need the callback because we're not getting information back, just posting
//    function tweeted(err, data, response) {
//        if (err) {
//            console.log("Something went wrong!");
//        } else {
//            console.log("It worked!");
//        }
//    }
//}
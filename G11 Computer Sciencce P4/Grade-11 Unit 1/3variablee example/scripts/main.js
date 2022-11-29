//user information
let firstName = 'Joel';
let lastName = 'Osteen';
let username ='joleosteen';
let verifiedStatus = true;

alert(firstName)

//tweet/message information
let message;
let retweetCount;
let favouriteCount;
let date;
let time;

loadTweet();
updateContent();


// assign starting tweet information
function loadTweet(){
    message = 'A true friend watlks in when everybody else walks out. A true friend doesn\'t it in when you make a mistake. They rub it outerHeight.';
    retweetCount = 2238
    favouriteCount = 1227
    date = '31 Oct 13'
    time = '4:25 pm'     
}

function updateContent() {
    let paragraph = document.getElementById('name');

    paragraph.innerText = firstName +' '+ lastName

    paragraph = document.getElementById('username');
    paragraph.innerText = "@" + username;

    paragraph = document.getElementById('message');
    paragraph.innerText = message;

    paragraph = document.getElementById('counts');
    paragraph.innerText = retweetCount + "Retweets" + "\n" + favouriteCount + "Favourites";

    paragraph = document.getElementById('date');
    paragraph.innerText = time + "-" + date;
    
}

function loadNewTweet() {
    firstName = 'Spencer';
    lastName = 'Boldman';
    username ='SpencerBoldman';
    verifiedStatus = true;

    message = '\"Success is not bilt on success. It\'s built on failure. Its built on frustration. Sometimes it\'s built on catastrophe\"';
    retweetCount = 77
    favouriteCount = 1227
    date = '23 May 2015';
    time = '4:28 PM';  

}

function update(){
    loadNewTweet();
    updateContent();
}


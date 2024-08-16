console.log("hello!");
function test(){
    let a = "3";
    let b = "8";
    // console.log (a);

    b = a + b;
    // console.log (b)
    console.log(typeof(b)+ " " + b);

    a = String(b % 10);
    b = String((b - a) / 10);
    console.log(typeof(a));
    console.log ("a = " +a+ "\nb = " +b);   
}
function testConcat(){
    let tweetTextVal;
    let tweetLength = 224;

    tweetTextVal = document.getElementById("tweetText").value;
    tweetTextVal = parseInt(tweetTextVal.length);
    console.log("Tweet length is "+ tweetTextVal + " characters | typeof : " + typeof(tweetTextVal));

    tweetLength = tweetLength - tweetTextVal;
    
    document.getElementById("warningId").innerHTML = "You have written "+ tweetTextVal + " characters, you have -" + tweetLength + " characters left.";


}
function testDogAgeCalculator(){
    let dogAgeTextVal;
    let humanAge;

    dogAgeTextVal = document.getElementById("dogAgeId").value;
    humanAge = ((dogAgeTextVal - 2) * 4) + 21;

    document.getElementById("dogAgeOutput").innerHTML = "Your Dog's age is " + humanAge.toString() + " human years old."
}
function testName(){
    let nameTextVal;
    let firstLetter;
    let restofName;
    let captNameText;

    nameTextVal = document.getElementById("nameId").value;
    firstLetter = nameTextVal.slice(0,1);
    firstLetter = firstLetter.toUpperCase();
    restofName = nameTextVal.slice(1,nameTextVal.length);
    restofName = restofName.toLowerCase();
    captNameText = firstLetter.concat(restofName);

    document.getElementById("helloName").innerHTML = "Hello, " + captNameText;
}

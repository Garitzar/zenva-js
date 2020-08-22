// Promises
const promise = new Promise((resolve, reject) => {
    let number1 = 5;

    if (number1 == 5)
    {
        resolve('Success');
    }
    else
    {
        reject('Failure');
    }
})

promise.then((message) => 
{
    console.log(message);
}).catch((message) => 
{
    console.log(message);
});

// Asynchronous
async function sum(number1, number2)
{
    return await number1 + number2;
}

// Steam API example
const fetch = require('node-fetch');

const apiKey = '9BE777B29A4DEE11D205E1AE4CDF5D58';
const gameID = '221380';
const baseURL = ' http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?';
const callURL = baseURL + "gameid=" + gameID;

class Achievement
{
    constructor(aName, aPercent)
    {
        this.myName = aName;
        this.myPercent = aPercent;
    }

    printValues()
    {
        if(this.myPercent == 0)
        {
            console.log(`No one has completed the achivements: ${this.myName}`);
        }
        else
        {
            console.log(`${this.myName} achivement has been completed by ${this.myPercent}% of people.`);
        }
    }
}

async function fetchData(url) 
{
    // await = wait for the entire response to finish before storing it in "response".
    let response = await fetch(url);
    let jsonResponse = await response.json();

    printData(jsonResponse);
}

function printData(jsonData)
{
    var achivementsArray = [];
    let jsonObject = jsonData['achievementpercentages'];
    let allAchievements = jsonObject['achievements'];

    for(let achievement of allAchievements)
    {
        achivementsArray.push(new Achievement(achievement['name'], achievement['percent']));
    }

    for(let achievement of achivementsArray)
    {
        achievement.printValues();
    }

    console.log(achivementsArray.length);
}

fetchData(callURL).catch(
function()
{
    console.log("Failed fetching data!");
});
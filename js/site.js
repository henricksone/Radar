// main
function main(){
    displayResults(checkString(getString()));
}

// Get String
function getString(){
    return document.getElementById("inputphrase").value;
}

// Logic
function checkString(userString){
    let revString = [];
    let counter = 0;
    // reverse using a for loop
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];        
    }
    // check each position of userString and revString to be same
    // add 1 if true
    for (let j = 0; j < userString.length; j++) {
        counter += (revString[j] == userString[j] ? 1 : 0);
    }
    // return the userString, revString, and palindrome: T/F
    return [userString, revString, (counter == userString.length ? true : false)];
}

// Display
function displayResults(results){
    let msg = (results[2] == true ? 
        `<p>Success: <span class="text-danger">${results[0]}</span> is a Palindrome!</p>` 
        : `<p>Failure: <span class="text-danger">${results[0]}</span> is not a Palindrome!<br>
        Your reversed String is: <span class="text-danger">${results[1]}</span></p>`);
    document.getElementById("results").innerHTML = `<h3>Results</h3><br>${msg}`;
}
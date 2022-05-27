// main
function main(){
    displayResults(checkString(getString()));
}

// Get String
function getString(){
    return document.getElementById("inputphrase").value.toLowerCase().replace(/[^a-z0-9]/gi,"");
}

// Logic
function checkString(userString){
    let revString = [];
    let counter = 0;
    // reverse using a for loop
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];        
    }
    // return the userString, revString, and palindrome: T/F
    return [userString, revString, (revString == userString ? true : false)];
}

// Display
function displayResults(results){
    let msg = (results[2] == true ? 
        `<p>Success: <span class="text-danger">${results[0]}</span> is a Palindrome!</p>` 
        : `<p>Failure: <span class="text-danger">${results[0]}</span> is not a Palindrome!<br>
        Your reversed String is: <span class="text-danger">${results[1]}</span></p>`);
    document.getElementById("results").innerHTML = `<h3>Results</h3><br>${msg}`;
    document.getElementById("results").classList.remove("invisible");
}
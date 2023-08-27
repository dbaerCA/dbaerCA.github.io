function RunHandler() {
    document.getElementById("ratBot").addEventListener("click", jallaBotResponse);
    
    if (navigator.serviceWorker) {
        window.addEventListener('load', () => {
        navigator.serviceWorker.register("./service_worker.js"
        ).then(function(registration) {
            console.log("registration of service worker successful.");
        })
    });
}
}
function jallaBotResponse () {

    // just responds like Jalla. Takes a random number, puts out a random Jalla-esque response
    var numberofResponses = 8; //this val needs to be updated as Jallabot's vocabulary increases
    document.getElementById("ratBot").style.fontWeight = "normal"; //resets bold responses
    var response = "brokenVal";
    var jallaResponse = Math.floor(Math.random() * numberofResponses);
    switch(jallaResponse) {

        case 0:
        response = "Me";
        break;

        case 1:
        response = "SHE"; 
        break;

        case 2:
        response = "SHE";
        document.getElementById("theRatSpeaks").style.fontWeight = "bold";
        break;

        case 3:
        response = "holy shit";
        break;

        case 4:
        response = "AIFOENBELWHDOWHDKWJ";
        break;

        case 5:
        response = "LMFAO NOOOO";
        break;

        case 6:
        response = "HELP";
        break;

        case 7: 
        response = "YEAH";
        break;

        default:
        console.log("Error, number gen failed");
    }
    console.log(response);
    document.getElementById("theRatSpeaks").innerHTML = response;
}

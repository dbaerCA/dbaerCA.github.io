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
    var jallaResponse = Math.floor(Math.random() * numberofResponses);
    var responses = 
    ["Me",
    "SHE",
    "SHE",
    "holy shit",
    "AIFOENBELWHDOWHDKWJ",
    "LMFAO NOOOO",
    "HELP",
    "YEAH",
    "Flo is a beta bitch boy",
    "I love my cat Juni, she's perfect",
    "I'm gonna climb Estinien like a tree" ];
    var numberofResponses = respones.length;
    if(jallaResponse === 2) {
        document.getElementById("theRatSpeaks").style.fontWeight = "bold";
    }
    else {
        document.getElementById("theRatSpeaks").style.fontWeight = "normal";
    }
    var response = responses[jallaResponse];
    document.getElementById("theRatSpeaks").innerHTML = response;
    
}

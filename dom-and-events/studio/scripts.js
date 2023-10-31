// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", () => {
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let shuttleHeight = 0;
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    
    const rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    let upDown = 250;
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    let leftRight = 0;
    rocket.style.top = upDown + "px";
    rocket.style.left = leftRight + "px";
    let windowWidth = (0.4 * parseInt(window.innerWidth)) - 85;

    takeoff.addEventListener("click", function(event) {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if(confirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            if (upDown >= 10) {
                shuttleHeight += 10000;
                upDown -= 10;
                spaceShuttleHeight.innerHTML = shuttleHeight;
                rocket.style.top = upDown + "px";
            }
        }
    });

    landing.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight = 0
        spaceShuttleHeight.innerHTML = shuttleHeight;
        upDown = 250;
        rocket.style.top = upDown + "px";
    });

    missionAbort.addEventListener("click", event => {
        let confirm = window.confirm("Confirm that you want to abort the mission.")
        if(confirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight = 0
            spaceShuttleHeight.innerHTML = shuttleHeight;
            upDown = 250;
            rocket.style.top = upDown + "px";
        }
    });

    up.addEventListener("click", event => {
        if (upDown >= 10) {
            shuttleHeight += 10000;
            upDown -= 10;
            spaceShuttleHeight.innerHTML = shuttleHeight;
            rocket.style.top = upDown + "px";
        }
    });

    down.addEventListener("click", event => {
        if (upDown <= 240) {
            shuttleHeight -= 10000;
            upDown += 10;
            spaceShuttleHeight.innerHTML = shuttleHeight;
            rocket.style.top = upDown + "px";
        }
    });

    left.addEventListener("click", event => {
        if (leftRight >= 10) {
            leftRight -= 10;
            rocket.style.left = leftRight + "px";
        }
    });

    right.addEventListener("click", event => {
        if (leftRight <= windowWidth) {
            leftRight += 10;
            rocket.style.left = leftRight + "px";
        }
    });

});
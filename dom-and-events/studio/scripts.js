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
    let upPosition = 0;
    const down = document.getElementById("down");
    let downPosition = 0;
    const left = document.getElementById("left");
    let leftPosition = 0;
    const right = document.getElementById("right");
    let rightPosition = 0;

    takeoff.addEventListener("click", function(event) {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if(confirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight += 10000;
            spaceShuttleHeight.innerHTML = shuttleHeight;
        }
    });

    landing.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight = 0
        spaceShuttleHeight.innerHTML = shuttleHeight;
    });

    missionAbort.addEventListener("click", event => {
        let confirm = window.confirm("Confirm that you want to abort the mission.")
        if(confirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight = 0
            spaceShuttleHeight.innerHTML = shuttleHeight;
        }
    });

    up.addEventListener("click", event => {
        shuttleHeight += 10000;
        spaceShuttleHeight.innerHTML = shuttleHeight;
        upPosition -= 10;
        rocket.style.top = upPosition + "px";
    });

    down.addEventListener("click", event => {
        shuttleHeight -= 10000;
        spaceShuttleHeight.innerHTML = shuttleHeight;
        downPosition += 10;
        rocket.style.top = downPosition + "px";
    });

    left.addEventListener("click", event => {
        leftPosition -= 10;
        rocket.style.left = leftPosition + "px";
    });

    right.addEventListener("click", event => {
        rightPosition += 10;
        rocket.style.left = rightPosition + "px";
    });

});
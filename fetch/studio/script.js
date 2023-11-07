//TODO: Add Your Code Below
window.addEventListener("load", () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response) => {
        response.json().then((json) => {
            console.log(json);
            let jsonSort = [];
            let jsonLength = json.length;
            for (let i = 0; i < jsonLength; i++) {
                let temp = 0;
                for (let j = 0; j < json.length; j++) {
                    if (json[j].hoursInSpace > json[temp].hoursInSpace) {
                        temp = j;
                    }
                }
                jsonSort.push(json[temp]);
                json.splice(temp,1);
            }

            let oldDiv = document.getElementById("container");
            oldDiv.innerHTML += `Total astronauts listed: ${jsonSort.length}`;
            for (let i = 0; i < jsonSort.length; i++) {
                let activity = jsonSort[i].active ? ' style="color:green"' : '';
                oldDiv.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${jsonSort[i].firstName} ${jsonSort[i].lastName}</h3>
                        <ul>
                        <li>Hours in space: ${jsonSort[i].hoursInSpace}</li>
                        <li${activity}>Active: ${jsonSort[i].active}</li>
                        <li>Skills: ${jsonSort[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${jsonSort[i].picture}>
                </div>`
            }
        });
    });
});

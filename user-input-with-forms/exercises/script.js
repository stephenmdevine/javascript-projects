//Code Your Solution Below
window.addEventListener("load", () => {
    let form = document.querySelector("form");
    form.addEventListener("submit", event => {
        let testName = document.querySelector("input[name=testName]");
        let testDate = document.querySelector("input[name=testDate]");
        let boosterCount = document.querySelector("input[name=boosterCount]");
        if (testName.value === "" || testDate.value === "" || boosterCount.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        }
        
    });

});
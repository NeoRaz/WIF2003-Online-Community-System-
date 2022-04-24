let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let type = document.getElementById("type");



form.addEventListener("submit", function(e) {
    if (type.value === "Admin") {
        form.action = "/Admin/mainboard.html";
    } else if (type.value === "Resident") {
        form.action = "/Resident/profile.html";
    }
});
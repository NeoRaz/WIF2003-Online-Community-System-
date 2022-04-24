let logout = document.querySelector("#logout");

logout.addEventListener("click", function(e) {
    e.preventDefault();
    let decision = confirm("Are you sure you want to logout?");
    if (decision) {
        window.location.href = "index.html";
    }
});
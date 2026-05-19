let form = document.getElementById("loginForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;

  alert("Name: " + name);
  console.log("Password:", password);
});
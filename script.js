
function myFunction() {
  var friends = document.getElementById("friends");
  var friends1 = document.getElementById("friends1");
  var discover = document.getElementById("discover");
  var myAccounts = document.getElementById("myAccounts");
  if (friends.style.display === "none") {
    friends.style.display = "block";
    friends1.style.display = "none";
    discover.style.opacity = "50%";
    myAccounts.style.opacity = "100%";
    discover.style.flex = "2";
    myAccounts.style.flex = "4";
  } else {
    friends.style.display = "none";
    friends1.style.display = "block";
    discover.style.opacity = "100%";
    myAccounts.style.opacity = "50%";
    discover.style.flex = "4";
    myAccounts.style.flex = "2";
  }
}

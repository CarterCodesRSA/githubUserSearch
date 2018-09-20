const searchUser = document.getElementById("searchUser");

const github = new GitHub();

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;

  if (userText !== "") {
    github
      .getUser(userText)
      .then(result => {
        if (result.profileData.message == "Not Found") {
          console.log("user not found");
        } else {
          console.log("User Found", result);
        }
      })
      .catch(err => {
        console.log("This is the error", err);
      });
  } else {
    userText = "";
  }
});

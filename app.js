const searchUser = document.getElementById("searchUser");

const github = new GitHub();
const ui = new UI();

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;

  if (userText !== "") {
    github
      .getUser(userText)
      .then(result => {
        if (result.profileData.message == "Not Found") {
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          ui.showProfile(result.profileData);
          ui.showRepos(result.repos);
          console.log(result.repos);
        }
      })
      .catch(err => {
        console.log("This is the error", err);
      });
  } else {
    ui.clearProfile;
    console.log("The text is");
  }
});

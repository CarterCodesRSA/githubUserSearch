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
          console.log("user not found");
        } else {
          ui.showProfile(result.profileData);
          console.log("User Data", result.profileData);
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

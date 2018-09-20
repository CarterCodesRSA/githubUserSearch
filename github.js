class GitHub {
  constructor() {
    this.client_id = "fcadf3f7ec47bc8db28e";
    this.client_secret = "80345717c14ef7edb9cf0ae1740be8c63aadb402";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();
    return {
      profileData
    };
  }
}

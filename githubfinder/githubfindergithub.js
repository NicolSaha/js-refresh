class Github {
  constructor() {
    this.CLIENT_ID = 'e81b266f97af051422a7';
    this.CLIENT_SECRET = '525b06a6bdd54986e2180bd93d0c8599b06800c8';
    this.REPOS_COUNT = 3;
    this.REPOS_SORT = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.REPOS_COUNT}&sort=${this.REPOS_SORT}&client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}`
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}

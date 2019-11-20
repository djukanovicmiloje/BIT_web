const dataModule = (function () {
    let languages = {};

    const User = function (id, username, image, github) {
        this.id = id;
        this.username = username;
        this.image = image;
        this.github = github;
    }

    function fetchUsers(searchTerm, atTheEnd, showRepo, funk) {
        $.get(`https://api.github.com/search/users?q=${searchTerm}`, function (data) {

            let userList = [];
            let itemList = data.items;

            console.log("u for",languages)


            for (let i = 0; i < itemList.length; i++) {
                let user = new User(itemList[i].id, itemList[i].login, itemList[i].avatar_url, itemList[i].html_url);

                userList.push(user);

                fetchRepositories(user, showRepo, i);
                
            }
            console.log('posle for',languages)

            atTheEnd(userList);
            funk(languages);
            //
        })
    }

    const Repository = function (name, description, stars, language) {
        this.name = name;
        this.description = description ? description : "";
        this.stars = stars;
        this.language = language ? language : "";
    }

    function fetchRepositories(user, atTheEnd, index) {
        $.get(`https://api.github.com/users/${user.username}/repos`, function (data) { //
            let repoList = [];
            for (let i = 0; i < data.length; i++) {
                let repo = new Repository(data[i].name, data[i].description, data[i].stargazers_count, data[i].language);

                repoList.push(repo);

                atTheEnd(repo, index);

                if (languages[repo.language] && repo.language) {
                    languages[repo.language]++;
                } else if (repo.language) {
                    languages[repo.language] = 1;
                }
            }
            //console.log(languages);
            
            //funk(languages);


        })
    }

    return {
        fetchUsers,
        languages
    }
})();
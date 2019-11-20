const dataModule = (function () {



    const Show = function (id, name, image, rating, summary) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.rating = rating;
        this.summary = summary;
        this.seasons;
        this.cast;
    }
    function fetchShows(number, atTheEnd) {
        $.get('http://api.tvmaze.com/shows', function (showData) {
            let showList = [];

            for (let i = 0; i < showData.length; i++) {
                show = new Show(showData[i].id, showData[i].name, showData[i].image.medium, showData[i].rating, showData[i].summary);
                showList.push(show);
            }

            atTheEnd(showList);
        })
    }

    return {
        fetchShows
    }


})()
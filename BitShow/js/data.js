const dataModule = (function () {

    const Show = function (id, name, image, rating, summary, seasons, cast) {
        this.id = id;
        this.name = name;
        this.image = image ? image.medium : null;
        this.rating = rating.average;
        this.summary = summary;
        this.seasons = seasons; //arr of str       
        this.cast = cast;  //arr

    }
    function fetchShows(number, onLoad, query) {  //SET NUMBER OF SHOWS

        let url = query ? `http://api.tvmaze.com/search/shows?q=${query}` : 'http://api.tvmaze.com/shows';

        $.get(url, function (showData) {

            let showList = [];

            if (query) {
                for (let i = 0; i < (number < showData.length ? number : showData.length); i++) {
                    show = new Show(showData[i].show.id, showData[i].show.name, showData[i].show.image, showData[i].show.rating, showData[i].show.summary);
                    showList.push(show);
                }
            } else {
                sortByPopularity(showData);

                for (let i = 0; i < number; i++) {
                    show = new Show(showData[i].id, showData[i].name, showData[i].image, showData[i].rating, showData[i].summary);
                    showList.push(show);
                }
            }

            onLoad(showList);
        })
    }

    function fetchAShow(id, onLoad) { //BY ID      

        $.get(`http://api.tvmaze.com/shows/${id}`, function (showData) {
            let name = showData.name;
            let image = showData.image;
            let summary = showData.summary;
            $.get(`http://api.tvmaze.com/shows/${id}/cast`, function (castData) {
                let cast = [];
                for (let i = 0; i < castData.length; i++) {
                    cast.push(castData[i].person.name);
                }
                $.get(`http://api.tvmaze.com/shows/${id}/seasons`, function (seasonsData) {
                    let seasons = [];
                    for (let i = 0; i < seasonsData.length; i++) {
                        seasons.push(seasonsData[i].premiereDate + " - " + seasonsData[i].endDate);
                    }
                    let show = new Show(id, name, image, 0, summary, seasons, cast);
                    onLoad(show);
                })
            })
        })
    }

    function sortByPopularity(showList) {
        let sorted = showList.sort(function (show1, show2) {

            return show2.rating.average - show1.rating.average;
        })

        showList = sorted;
    }

    return {
        fetchShows,
        fetchAShow
    }
})()
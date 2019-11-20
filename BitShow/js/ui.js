const uiModule = (function () {

    $content = $('#content');

    function createShowElement(show) {
        $parent = $('#shows');

        let $show = $('<div>');
        $show.addClass('show');

        let $image = $('<img>');
        $image.attr('src', show.image);
        $show.append($image);

        let $title = $('<h2>');
        $title.text(show.name);
        $show.append($title);

        $parent.append($show);

        return $show;

    }
    function generateInfoScreen(id, getData) {

        getData(id, function (show) {

            let $infoScreen = $('<div>');
            $infoScreen.attr('class', 'row');
            $infoScreen.attr('id', 'infoScreen');

            let $title = $('<h1>');
            $title.attr('class', 'col-12');
            $title.text(show.name);

            $infoScreen.append($title);

            let $image = $('<img>');
            $image.attr('class', 'col-6');
            $image.attr('src', show.image);

            $infoScreen.append($image);


            let $container = $('<div>');
            $container.attr('class', 'col-6 row');

            let $seasons = $('<div>');
            $seasons.attr('class', 'col-12');
            $seasons.append($('<span>').text(`Seasons (${show.seasons.length}):`));

            for (let i = 0; i < show.seasons.length; i++) {
                let $season = $('<li>');
                $season.text(show.seasons[i]);

                $seasons.append($season);
            }

            $container.append($seasons);

            let $cast = $('<div>');
            $cast.attr('class', 'col-12');
            $cast.append($('<span>').text('Cast:'));


            for (let i = 0; i < show.cast.length; i++) {
                $actor = $('<li>');
                $actor.text(show.cast[i]);
                $cast.append($actor);
            }


            $container.append($cast);

            $infoScreen.append($container);

            $summary = $(show.summary);
            $summary.attr('class', 'col-12');

            $infoScreen.append($summary);

            $content.html('');
            $content.append($infoScreen);

        });

    }

    $searchInput = $('#search');
    $searchBar = $('#searchBar');

    function generateSearchDropdownItem(show) {

        let $show = $('<li>');
        $show.attr('class', 'dropDownItem');
        $show.text(show.name);

        return $show;
    }

    function collectSearchValue() {
        return $searchInput.val();
    }

    return {
        createShowElement,
        collectSearchValue,
        generateInfoScreen,
        generateSearchDropdownItem
    }
})()
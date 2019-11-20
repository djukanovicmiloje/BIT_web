const controllerModule = (function (data, ui) {
    const NUM = 50;

    function addClickOnShows() {
        $('#shows').children().each(function (i, node) {
            let $show = $(node);
            $show.data('showID', 1)
            console.log($show.data());
        })
        console.log($('#shows').children());
    }


    function generateShowList() {

        $shows = $('<div>');
        $shows.attr('id', 'shows');


        data.fetchShows(NUM, function (showList) {
            for (let i = 0; i < showList.length; i++) {
                let $show = ui.createShowElement(showList[i]);

                $show.click(function () {

                    data.fetchAShow(showList[i].id, ui.generateInfoScreen);

                })
            }
        });
        $('#content').append($shows);

    }

    function createShowScreen() {
        data.fetchShows(NUM, ui.createShowScreen);
        //console.log($('#shows'));
    }

    //$(generateShowList);

    $(createShowScreen);


    $dropdown = $('#dropdown');
    $search = $('#search');

    const dropDownLength = 8;

    $search.on('keyup', function () {

        $dropdown.html('');

        let searchValue = ui.collectSearchValue();

        data.fetchShows(dropDownLength, function (showList) {

            for (let i = 0; i < showList.length; i++) {
                $searchItem = ui.generateSearchDropdownItem(showList[i]);
                $searchItem.click(function () {
                    data.fetchAShow(showList[i].id, ui.generateInfoScreen);
                    $search.next('div').html('');
                })

                $dropdown.append($searchItem);


            }

        }, searchValue)

    });

})(dataModule, uiModule);
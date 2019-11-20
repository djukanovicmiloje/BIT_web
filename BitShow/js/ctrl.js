const controllerModule = (function (data, ui) {
    const NUM = 50;

    function generateShowList() {

        $shows = $('<div>');
        $shows.attr('id', 'shows');
        $('#content').append($shows);

        data.fetchShows(NUM, function (showList) {
            for (let i = 0; i < showList.length; i++) {
                let $show = ui.createShowElement(showList[i]);

                $show.click(function () {
                    ui.generateInfoScreen(showList[i].id, data.fetchAShow)
                })
            }
        });

    }


    generateShowList();


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
                    ui.generateInfoScreen(showList[i].id, data.fetchAShow);
                    $search.next('div').html('');
                })

                $dropdown.append($searchItem);


            }

        }, searchValue)

    });

})(dataModule, uiModule);
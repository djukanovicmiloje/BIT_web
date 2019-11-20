const controllerModule = (function (data, ui) {
    const NUM = 50;



    const dropDownLength = 8;

    function addClicksOnDropDown() {
        $('.dropDownItem').each(function (i, node) {
            let $item = $(node);
            $item.click(function () {
                data.fetchAShow($item.data('showID'), ui.generateInfoScreen);
                ui.removeDropDown();
            })
        })
    }

    function createDropdown(showList) {
        ui.createDropdown(showList);
        addClicksOnDropDown();
    }

    $('#search').on('keyup', function () {

        $dropdown.html('');

        let searchValue = ui.collectSearchValue();

        data.fetchShows(dropDownLength, createDropdown, searchValue);

    });

    function onShowClick() {
        const showId = $(this).attr('data-showID');
        data.fetchAShow(showId, ui.generateInfoScreen);
    }

    function init() {
        function addShowScreen(showList) {
            ui.createShowScreen(showList);
            ui.getShowCards().on('click', onShowClick);
        }

        data.fetchShows(NUM, addShowScreen)
    }

    return {
        init
    };
})(dataModule, uiModule);


$(controllerModule.init);
const controllerModule = (function (data, ui) {

    const numberOfShowOnMainPage = 50;
    const dropDownLength = 8;
    
    function onShowClick() {
        const showId = $(this).attr('data-showID');
        data.fetchSingleShow(showId, ui.generateInfoScreen);
    }
    function init() {
        function addShowScreen(showList) {
            ui.createShowScreen(showList);
            ui.getShowCards().on('click', onShowClick);
        }
        data.fetchShows(numberOfShowOnMainPage, addShowScreen)
    }

    function onDropdownClick(){
        const showId = $(this).attr('data-showID');
        data.fetchSingleShow(showId, ui.generateInfoScreen);
        ui.removeDropDown();
    }
    function createDropdown(showList) {
        ui.createDropdown(showList);
        ui.getDropdownItems().on('click', onDropdownClick);
    }

    ui.getSearchBar().on('keyup', function () {        










          
        data.fetchShows(dropDownLength, createDropdown, ui.collectSearchValue());
    });

    return {
        init
    };

})(dataModule, uiModule);

$(controllerModule.init);
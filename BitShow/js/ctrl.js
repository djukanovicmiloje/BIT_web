const controllerModule = (function (data, ui) {
    const NUM = 50;

    data.fetchShows(NUM, ui.createShowElements);

    $('#search').on('keyup', function(){
        let searchValue = ui.collectSearchValue();
        //console.log(searchValue);
        
    });


})(dataModule, uiModule);
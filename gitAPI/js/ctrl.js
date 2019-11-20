const ctrlModule = (function (ui, data) {
    let $searchBtn = document.querySelector('.searchBtn');

    $searchBtn.addEventListener('click', searchHandler);

    function searchHandler(e) {
        let searchTerm = ui.getSearchValue();
        data.fetchUsers(searchTerm, ui.generateDisplay, ui.generateDisplayRepo, ui.displayLanguageDistribution);
        
    }



})(uiModule, dataModule);
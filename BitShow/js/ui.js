const uiModule = (function () {


    function createShowElements(showList) {
        $parent = $('#shows');

        for (let i = 0; i < showList.length; i++) {

            let $show = $('<div>');
            $show.addClass('show');

            let $image = $('<img>');
            $image.attr('src', showList[i].image);
            $show.append($image);

            let $title = $('<h2>');
            $title.text(showList[i].name);
            $show.append($title);

            $show.click(function(){
                generateInfoScreen(showList[i]);
            })

            $parent.append($show);
        }
    }
    function generateInfoScreen(show){
        let $infoScreen = $('<div>');
        
        let $title = $('<h1>');
        $title.text(show.name);

        $infoScreen.append($title);

        let $image = $('<img>');
        $image.attr('src', show.image);

        $infoScreen.append($image);


////////////////////////////////////////////////////


        $('#shows').replaceWith($infoScreen);
    }

    $searchInput = $('#search');

    function collectSearchValue(){
        return $searchInput.val();
    }

    return {
        createShowElements,
        collectSearchValue
    }
})()
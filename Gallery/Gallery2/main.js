var links1 = ["https://images.unsplash.com/photo-1522057306606-8d84daa75e87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"];
var links2 = ["https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"];


$body = $('body');

function generateAndAddGallery(links, percentWidth, $parent) {
    var $gallery = $('<div>');
    $gallery.addClass('gallery')

    for (var i = 0; i < links.length; i++) {
        var $picture = $('<img>');
        $picture.attr("src", links[i]);
        $picture.width(`${percentWidth}%`);

        $gallery.append($picture);
    }
    $parent.append($gallery)
}

function addClassSelected($element) {
    $element.addClass('selected');
}

function removeImagesWithClassSelected($parent) {
    $parent.find('img.selected').remove();
    addClassSelected($parent.next().children().eq(1));
}

generateAndAddGallery(links1, 33, $body);
generateAndAddGallery(links2, 33, $body);

addClassSelected($('img').eq(1));

removeImagesWithClassSelected($('.gallery').eq(0));
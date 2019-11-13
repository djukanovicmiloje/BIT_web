var $body = $('body');

var imageLinks = ["https://images.unsplash.com/photo-1522057306606-8d84daa75e87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"];

var $gallery = $('<div>');
$gallery.css("width", "900px");
$gallery.css("margin", "auto");


var $galleryHeading = $('<h1>');
$galleryHeading.append("Random Size Gallery");
$galleryHeading.css("text-align", "center");
$galleryHeading.css("padding", "1em");

$gallery.append($galleryHeading);


var addBorder = false;
var justOnce = true;

for (var i = 0; i < imageLinks.length; i++) {
    var $picture = $('<img>');

    $picture.attr("src", imageLinks[i]);
    $picture.css("float", "left")
    $picture.css("width", `${Math.random() * 400 + 200}px`);


    if (parseInt($picture.css("width")) < 300 && justOnce) {
        addBorder = true;
    } else if (addBorder && justOnce) {
        justOnce = false;
    }

    if (addBorder && justOnce) {
        $picture.css("border", "5px solid red");
    }

    $gallery.append($picture);
}

$body.append($gallery);


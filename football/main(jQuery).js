var $field = $("#field");
var $stopBtn = $("#stop");
var $player = $("#player");


function updatePlayerPosition(event) {

    $player.css("top", `${event.clientY}px`);

    $player.css("left", `${event.clientX}px`);

}

$field.on("click", updatePlayerPosition);
$stopBtn.click(() => { $field.off() });


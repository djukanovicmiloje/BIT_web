
export function getFields(){
    return document.querySelectorAll('.field');
}
export function updateScreen(gameState){
    const $fields = getFields();
    gameState.fields.forEach((field, index) => {
        $fields[index].textContent = field.value;
    })
}

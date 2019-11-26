import {fetchGameState, updateGameState} from './data.js';
import {updateScreen, getFields} from './ui.js';

let value ;
function generateQuery($field){    
    const $fields = document.querySelectorAll('.field');    
    let index;
    for(let i = 0; i < $fields.length; i++){
        if($field === $fields[i]){
            index = i;
        }
    }

    let position;
    switch(index){
        case 0: position = {x: 0, y: 0}; break;
        case 1: position = {x: 0, y: 1}; break;
        case 2: position = {x: 0, y: 2}; break;
        case 3: position = {x: 1, y: 0}; break;
        case 4: position = {x: 1, y: 1}; break;
        case 5: position = {x: 1, y: 2}; break;
        case 6: position = {x: 2, y: 0}; break;
        case 7: position = {x: 2, y: 1}; break;
        case 8: position = {x: 2, y: 2};
    }

    return `/x=${position.x}&y=${position.y}?${value}`;

}

async function onFieldClick(){
    const query = generateQuery(this);
    const gameState = await fetchGameState(query);    
    //updateScreen(gameState);
}
getFields().forEach( field => {    
    field.addEventListener("click", onFieldClick)
})
async function onStart(){
    const res = await fetch('http://127.0.0.1:3005/start');
    const valueArr = await res.json();
    value = valueArr[0];
    // console.log(value);
    document.querySelector('body').removeEventListener('keypress', onStart)
}
document.querySelector('body').addEventListener('keypress', onStart)

setInterval(async() => {    
    const gameState = await updateGameState();    
    updateScreen(gameState);
}, 100);
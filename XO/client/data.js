export async function fetchGameState(query){
    const response = await fetch(`http://127.0.0.1:3005${query}`);
    const gameState = await response.json();
    
    return gameState;
}
export async function updateGameState(){
    const response = await fetch(`http://127.0.0.1:3005/gamestate`);
    const gameState = await response.json();
    
    return gameState;
}

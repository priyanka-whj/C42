var db;
var gameState = 0;
var playerCount; //undefined
var form, player, game;
var allPlayers; //undefined
var cars; //an array
var car1, car2, car3, car4;

function preload()
{

}

function setup()
{
    createCanvas(displayWidth, displayHeight);

    db = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}
    
    
                                                        
function draw()
{
    if(playerCount === 4)
    {
        game.updateState(1);
    }
    if(gameState === 1)
    {
        clear(); //clear the form elements
        game.play();
    }
}


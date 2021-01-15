class Game{
    constructor(){
    }
    //reads the gameState value from the database
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val();
        })
    }
    //writes the gameState value to the database
    updateState(state){
        database.ref("/").update({
            gameState: state
        })
    }

    start(){
        if(gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
        }
    }
    play(){
        form.Hide();
        textSize(25);
        text("Game Has Started!!",100,200);
    }
}
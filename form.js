class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Enter Your Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3")
    }
    display(){
        //dom library
        this.title.html("CAR RACING GAME");
        this.title.position(130,0);
        this.input.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(() => {
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount
            player.updateInfo()
            player.updateCount(playerCount)
            this.greeting.html("Hi "+player.name)
            this.greeting.position(130,160)
        })
    }
    Hide(){
        this.title.hide();
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
        }
    }


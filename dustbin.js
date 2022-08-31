//The dustbin class is created here and all the properties of the dustbin class is assigned here

class Dustbin {
    constructor (x, y, width, height){
        var options = { 
            isStatic: true,
            'restitution':0,
            'friction':1,
            'density':0.1

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);


    }

    display(){
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x, this.body.position.y, this.width, this. height);

    }
}
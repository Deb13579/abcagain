class Mango{
constructor(x,y, width, height){
var options = {
    isStatic : true,
    restitution:0.8,
    friction:0.3,
    density:1.0
}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
this.image = loadImage("Plucking mangoes/mango.png")
World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    push();
    imageMode(CENTER);
    fill("yellow")
    image(this.image,pos.x, pos.y, 50, 50)
    pop();
}
}

class Sling {
    constructor(bodya,pointb){
        var options = {
            bodyA:bodya,
            pointB:pointb,
            stiffness:0.05,
            length:30
        }
        this.leftsling = loadImage("sprites/Sling.png")
        this.rightsling = loadImage("sprites/rightsling.png")
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA = null
    }
    display(){
      image(this.leftsling, 22,648, 200, 150)  
      image(this.rightsling, 47,648,200, 150)
      if(this.sling.bodyA){

      
      push()
      stroke(36,16,12)
      strokeWeight(7)
      line(this.sling.bodyA.position.x-20,
           this.sling.bodyA.position.y+30,
           this.sling.pointB.x+30,
           this.sling.pointB.y+30)

           line(this.sling.bodyA.position.x-20,
            this.sling.bodyA.position.y+30,
            this.sling.pointB.x-10,
            this.sling.pointB.y+30)
            pop();
    }
}
}
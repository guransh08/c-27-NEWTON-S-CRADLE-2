class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
       
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    fly(){
        this.slingshot.bodyA=null;
    }
    display(){
        if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.bodyB.position;
        strokeWeight(4);

        var Anchor1=pointA.x
		var Anchor1=pointA.y

		var Anchor2=pointB.x+this.offsetX
		var Anchor2=pointB.y+this.offsetY

		line(Anchor1,Anchor1,Anchor2,Anchor2);
    }}
    
}
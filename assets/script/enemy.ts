import man from "./man";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Enemy extends cc.Component {
    private enemySpeed: number = 50;

    private anim = null;

    @property(man)
    man: man = null;

    start() {
        // if(this.node.name == "Turtle") {
        //     this.node.scaleX = this.node.scaleX;
        //     this.node.scaleY = this.node.scaleY;
        // }
        // else {
        //      this.schedule(function() { 
        //          this.node.scaleX *= -1;
        //      }, 0.1);
        //  }
    }

    update(dt) {
        //if(!this.anim.getAnimationState("enemy-walk").isPlaying)
          //  this.anim.play("enemy-walk");  
          this.node.x = this.node.x + this.enemySpeed * dt;
    }


    onBeginContact(contact, self, other) {
        if(other.tag != 2) {
            //cc.log("enemy contact blocks")
            //if(!(contact.getWorldManifold().normal.x != -1) && !(contact.getWorldManifold().normal.y != -0)) { //right bound
                this.enemySpeed *= -1;
                this.node.scaleX *= -1;
            }else{
                
                this.enemySpeed *= 0;
                if(other.scaleX == this.node.scaleX)
                    this.node.scaleX *= -1;
                else this.node.scaleX *= 1;
            }
            //else if(!(contact.getWorldManifold().normal.x != 1) && !(contact.getWorldManifold().normal.y != -0)) { //left bound
                //this.enemySpeed *= -1;
                //this.node.scaleX *= -1;
            //}
    }
    
    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.anim = this.getComponent(cc.Animation); 
  }
}

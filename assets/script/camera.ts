const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property({type:cc.Node})
    player: cc.Node = null;

    @property({type:cc.Camera})
    camera: cc.Camera = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        if(this.player.x <= 60 && this.player.x >= -50) 
        this.node.x = this.player.x + 195;
        //else this.node.x = 60;
        if(this.player.y <= 126 && this.player.y >= -147) 
        this.node.y = this.player.y + 130;
    }
}

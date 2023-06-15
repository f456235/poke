const { ccclass, property } = cc._decorator;
declare const firebase: any;

@ccclass
export default class NewClass extends cc.Component {


    onLoad() {
        
        cc.director.getPhysicsManager().enabled = true;
        cc.find('Canvas/brown/back').on('click', () => {
                cc.director.loadScene('map2');
        });
    }

    start() {
    }

    // update (dt) {}
}

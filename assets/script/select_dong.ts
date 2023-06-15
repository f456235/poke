const { ccclass, property } = cc._decorator;
declare const firebase: any;

@ccclass
export default class NewClass extends cc.Component {

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.find('Canvas/select/dong1/dong1_btn').on('click', () => {
                cc.director.loadScene('map2');
        });
        cc.find('Canvas/select/dong2/dong2_btn').on('click', () => {
                cc.director.loadScene('map2');
            });
        cc.find('Canvas/select/dong3/dong3_btn').on('click', () => {
            cc.director.loadScene('map2');
        });
        // cc.find('Canvas/logout').on('click', () => {
        //     cc.director.loadScene('login');
        // });
    }

    start() {
    }

}

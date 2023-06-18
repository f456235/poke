import GlobalData from "./GlobalData";

const { ccclass, property } = cc._decorator;
declare const firebase: any;

@ccclass
export default class NewClass extends cc.Component {

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.find('Canvas/p1').on('click', () => {
                cc.director.loadScene('map3');
        });
        cc.find('Canvas/p2').on('click', () => {
                cc.director.loadScene('map2');
            });
        cc.find('Canvas/p3').on('click', () => {
                cc.director.loadScene('map2');
        });     
    }

    start() {
    }

}
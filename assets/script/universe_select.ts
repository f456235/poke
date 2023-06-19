import GlobalData from "./GlobalData";

const { ccclass, property } = cc._decorator;
declare const firebase: any;

@ccclass
export default class NewClass extends cc.Component {

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.find('Canvas/p1').on('click', () => {
                GlobalData.Map = "map2";
                cc.director.loadScene('universe_changeScene');
        });
        cc.find('Canvas/p2').on('click', () => {
                GlobalData.Map = "map3";
                cc.director.loadScene('universe_changeScene');
            });
        cc.find('Canvas/p3').on('click', () => {
                GlobalData.Map = "map2";
                cc.director.loadScene('universe_changeScene');
        });     
    }

    start() {
    }

}
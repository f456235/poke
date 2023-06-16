import GlobalData from "./GlobalData";

const { ccclass, property } = cc._decorator;
declare const firebase: any;

@ccclass
export default class NewClass extends cc.Component {

    onLoad() {
        var uid = GlobalData.uid;
        const database = firebase.database();
        cc.director.getPhysicsManager().enabled = true;
        cc.find('Canvas/select/dong1/dong1_btn').on('click', () => {
                firebase.database().ref('user').child(GlobalData.uid).update({
                    myArray: [0],
                });
                GlobalData.pokewoman.push(0);
                cc.director.loadScene('map2');
        });
        cc.find('Canvas/select/dong2/dong2_btn').on('click', () => {
                firebase.database().ref('user').child(GlobalData.uid).update({
                    myArray: [1],
                });
                GlobalData.pokewoman.push(1);
                cc.director.loadScene('map2');
            });
        cc.find('Canvas/select/dong3/dong3_btn').on('click', () => {
                firebase.database().ref('user').child(GlobalData.uid).update({
                    myArray: [2],
                });
                GlobalData.pokewoman.push(2);
                cc.director.loadScene('map2');
        });
        // cc.find('Canvas/logout').on('click', () => {
        //     cc.director.loadScene('login');
        // });
        
    }

    start() {
    }

}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GlobalData from "./GlobalData";
declare const firebase : any ;
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Slider)
    volume_slider: cc.Slider = null;

    @property(cc.Button)
    save: cc.Button = null;

    @property(cc.Button)
    quit: cc.Button = null;

    @property(cc.Button)
    back: cc.Button = null;



    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.save.node.on('click',this.SaveGame,this);
        this.quit.node.on('click',this.quitGame,this);
        this.back.node.on('click',this.backToMap,this);
    }

    SaveGame(){

    }
    quitGame(){
        GlobalData.uid = "";
        const auth = firebase.auth();
        auth.signOut().then(() => {
            // User signed out successfully
            cc.director.loadScene('login');
          }).catch((error) => {
            // An error occurred while signing out
            console.error("Sign out error:", error);
          });
    }
    backToMap(){
        cc.director.loadScene('map2');
    }
    start () {

    }

    update (dt) {
        GlobalData.volume = this.volume_slider.progress;
    }
}

import Man from "./man";
import GlobalData from "./GlobalData";
declare const firebase: any;
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property({type:cc.AudioClip})
    battleBgm: cc.AudioClip = null;

    @property({type:cc.AudioClip})
    winSound: cc.AudioClip = null;

    @property({type:cc.AudioClip})
    loseSound: cc.AudioClip = null;

    @property({type:cc.Node})
    mainCamera: cc.Node = null;

    @property({type:cc.SpriteFrame})
    enemy1: cc.SpriteFrame = null;

    @property({type:cc.SpriteFrame})
    enemy2: cc.SpriteFrame = null;


    @property(Man)
    man: Man = null;

    private myLife: number = 100;
    private enemyLife: number = 100;
    private isWin: boolean = false;
    private myTurn: boolean = true;
    private enemyTurn: boolean = false;
    private isLose: boolean = false;
    private enemynum = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // this.enemynum = cc.director.getScene()["enemyNum"];
        // console.log("enemyNum:", this.enemynum);
        // if(this.enemynum !== undefined){
        //     console.log("Number passed from previous scene:", this.enemynum);
        //     //this.enemynum = enemyNum;
        // }
    }

    start () {
        this.enemynum = cc.director.getScene()["enemyNum"];
        
        //console.log("enemyNum:", this.enemynum);

        if(this.enemynum !== undefined){
            //console.log("Number passed from previous scene:", this.enemynum);
        }

        if(this.enemynum == 4){
            if(cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null){
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy1;
            }
            
        }else if(this.enemynum == 5){
            if(cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null){
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy2;
            }
        }
        cc.audioEngine.playMusic(this.battleBgm, true);
        this.initSkill1();
        this.initSkill2();
        this.initSkill3();
        this.initSkill4();
    }

    update(dt){
        
        
        this.updateUI(dt);
        if(this.enemyLife <= 0 && !this.isWin){
            // var uid = GlobalData.uid;
            // const database = firebase.database();
            // firebase.database().ref('user').child(GlobalData.uid).update({
            //     myArray: [this.enemynum],
            // });
            GlobalData.pokewoman.push(this.enemynum);


            this.enemyLife = 0;
            this.isWin = true;
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.winSound, false);
            
            this.scheduleOnce(function() {
                cc.director.loadScene("map2", ()=>{
                    // const nextScene = cc.director.getScene();
                    let enemyNumString = cc.js.formatStr("%d", this.enemynum);
                    GlobalData.nodeToDestroy.push(enemyNumString);
                    // nextScene["nodeToDestroy"] = enemyNumString;
                    // //console.log("nextScene[nodeToDestroy]", enemyNumString);
                    // console.log("nextScene[nodeToDestroy]", nextScene["nodeToDestroy"]);
                }
                );
            }, 4);
        }

        if(this.myLife<=0 && !this.isLose){
            this.myLife = 0;
            this.isLose = true;
            this.myTurn = false;
            this.enemyTurn = false;
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.loseSound, false);
            this.scheduleOnce(function() {
                cc.director.loadScene("map2");
            }, 4);
        }

        if(this.enemyTurn && !this.myTurn && this.enemyLife > 0){
            this.enemyTurn = false;
            this.myTurn = true;
            this.enemyTurnAction();
            
            //this.scheduleOnce(function() {
                //cc.find("Canvas/skill1").getComponent(cc.Button).interactable = this.myTurn;
            // }, 2);
        }

        if(!this.enemyTurn && this.myTurn && this.myLife > 0){

            //cc.find("Canvas/skill1").getComponent(cc.Button).interactable = this.myTurn;
        }
        cc.find("Canvas/skill1").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skill2").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skill3").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skill4").getComponent(cc.Button).interactable = this.myTurn;
    //}
    }

    updateUI(dt){
        cc.find("Canvas/myLife").getComponent(cc.Label).string = (Array(7).join("0") + this.myLife.toString()).slice(-3);
        cc.find("Canvas/enemyLife").getComponent(cc.Label).string = (Array(7).join("0") + this.enemyLife.toString()).slice(-3);
    }

    initSkill1(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; 
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill1";

        cc.find("Canvas/skill1").getComponent(cc.Button).clickEvents.push(clickEventHandler);

        
    }

    initSkill2(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; 
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill2";

        cc.find("Canvas/skill2").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    initSkill3(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; 
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill3";

        cc.find("Canvas/skill3").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    initSkill4(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; 
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill4";

        cc.find("Canvas/skill4").getComponent(cc.Button).clickEvents.push(clickEventHandler);

        
    }

    skill1(){
        //cc.log("skill1");
        let enemyLifeDeduct = cc.callFunc(function(target) {
            this.enemyLife -= 50;
        }, this);

        let turnSwitch1 = cc.callFunc(function(target) {
            this.myTurn = false;
        }, this);

        let turnSwitch2 = cc.callFunc(function(target) {
            this.enemyTurn = true;
        }, this);

        this.node.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(520, 0)), cc.moveBy(1, cc.v2(-520, 0)),enemyLifeDeduct, turnSwitch2))
    }

    skill2(){
        //cc.log("skill2");
        let enemyLifeDeduct = cc.callFunc(function(target) {
            this.enemyLife -= 20;
        }, this);

        let turnSwitch1 = cc.callFunc(function(target) {
            this.myTurn = false;
        }, this);

        let turnSwitch2 = cc.callFunc(function(target) {
            this.enemyTurn = true;
        }, this);

        this.node.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(520, 0)), cc.moveBy(1, cc.v2(-520, 0)),enemyLifeDeduct, turnSwitch2))
    }

    skill3(){
        //cc.log("skill3");
        let enemyLifeDeduct = cc.callFunc(function(target) {
            this.enemyLife -= 20;
        }, this);

        let turnSwitch1 = cc.callFunc(function(target) {
            this.myTurn = false;
        }, this);

        let turnSwitch2 = cc.callFunc(function(target) {
            this.enemyTurn = true;
        }, this);

        this.node.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(520, 0)), cc.moveBy(1, cc.v2(-520, 0)),enemyLifeDeduct, turnSwitch2))
    }

    skill4(){
        //cc.log("skill4");
        let enemyLifeDeduct = cc.callFunc(function(target) {
            this.enemyLife -= 100;
        }, this);

        let turnSwitch1 = cc.callFunc(function(target) {
            this.myTurn = false;
        }, this);

        let turnSwitch2 = cc.callFunc(function(target) {
            this.enemyTurn = true;
        }, this);

        this.node.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(520, 0)), cc.moveBy(1, cc.v2(-520, 0)),enemyLifeDeduct, turnSwitch2))
    }

    enemyTurnAction(){
        let myLifeDeduct = cc.callFunc(function(target) {
            //console.log("enemyNum in mylife deduct:", this.enemynum);
            if(this.enemynum == 4) this.myLife -= 40;
            else if(this.enemynum == 5) this.myLife -= 100;
        }, this);

        let turnSwitch1 = cc.callFunc(function(target) {
            this.myTurn = false;
            this.enemyTurn = false;
        }, this);

        let turnSwitch2 = cc.callFunc(function(target) {
            this.myTurn = true;
            this.enemyTurn = false;
        }, this);


        let enemy = cc.find("Canvas/enemy");
        enemy.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(-520, 0)), cc.moveBy(1, cc.v2(520, 0)),myLifeDeduct, turnSwitch2))
    }

}

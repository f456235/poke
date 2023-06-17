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

    @property(cc.ProgressBar)
    myHP: cc.ProgressBar = null;

    @property(cc.ProgressBar)
    enemyHP: cc.ProgressBar = null;

    @property(Man)
    man: Man = null;

    @property([cc.SpriteFrame])
    sprite: cc.SpriteFrame[] = [];

    bag: number[] =GlobalData.pokewoman;

    mylife: number =GlobalData.mylife;

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
        cc.find('Canvas/skills/bag2').on('click', () => {
            // cc.director.loadScene('bag_battle');
            cc.find('Canvas/skills').active = false;
            cc.find('Canvas/bags2').active = true;
    });
    }

    start () {
        this.enemynum = cc.director.getScene()["enemyNum"];
        // this.node.getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[GlobalData.myelf]];
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
                cc.find("Canvas/enemy").color = cc.Color.RED;
            }
        }
        cc.audioEngine.playMusic(this.battleBgm, true);
        this.initSkill1();
        this.initSkill2();
        this.initSkill3();
        this.initSkill4();

        let enemyParticleEffect2 = cc.find("Canvas/enemy/onLoad").getComponent(cc.ParticleSystem);
        if(this.enemynum == 4){
            console.log("this.enemynum == 4");
            enemyParticleEffect2.playOnLoad = true;
            enemyParticleEffect2.resetSystem();
        }
    }

    update(dt){
        
        this.node.getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[GlobalData.myelf]];
        this.updateUI(dt);
        if(this.enemyLife <= 0 && !this.isWin){
            // var uid = GlobalData.uid;
            // const database = firebase.database();
            // firebase.database().ref('user').child(GlobalData.uid).update({
            //     myArray: [this.enemynum],
            // });
            GlobalData.pokewoman.push(this.enemynum);
            console.log("GlobalData.pokewoman:", GlobalData.pokewoman);


            this.enemyLife = 0;
            this.isWin = true;
            this.enemyHP.progress = 0;
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.winSound, false);
            GlobalData.exp += 100;
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
            this.myHP.progress = 0;
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
        cc.find("Canvas/skills/skill1").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skills/skill2").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skills/skill3").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skills/skill4").getComponent(cc.Button).interactable = this.myTurn;
    //}
        cc.audioEngine.setMusicVolume(GlobalData.volume);
        cc.audioEngine.setEffectsVolume(GlobalData.volume);
    }

    updateUI(dt){
        this.myHP.progress = this.myLife / 100;
        this.enemyHP.progress = this.enemyLife / 100;
        const myLifeLabel = cc.find("Canvas/myLife").getComponent(cc.Label);
        const enemyLifeLabel = cc.find("Canvas/enemyLife").getComponent(cc.Label);
      
        myLifeLabel.string = ((Array(7).join("0") + this.myLife.toString()).slice(-3)) + ('/100');
        enemyLifeLabel.string = ((Array(7).join("0") + this.enemyLife.toString()).slice(-3)) + ('/100');
    }

    initSkill1(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; 
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill1";

        cc.find("Canvas/skills/skill1").getComponent(cc.Button).clickEvents.push(clickEventHandler);

        
    }

    initSkill2(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; 
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill2";

        cc.find("Canvas/skills/skill2").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    initSkill3(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; 
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill3";

        cc.find("Canvas/skills/skill3").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    initSkill4(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; 
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill4";

        cc.find("Canvas/skills/skill4").getComponent(cc.Button).clickEvents.push(clickEventHandler);

        
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
        let enemyAnimation = cc.find("Canvas/enemy").getComponent(cc.Animation);
        let enemyParticleEffect = cc.find("Canvas/enemy/magic").getComponent(cc.ParticleSystem);
        let enemyParticleEffect3 = cc.find("Canvas/enemy/punch").getComponent(cc.ParticleSystem);
        
        let shakeCamera = cc.callFunc(function(target) {
            const mainCamera = cc.Camera.main;
            this.originalPosition = mainCamera.node.position.clone();
            const shakeSequence = cc.sequence(
                cc.moveTo(0.05, cc.v2(this.originalPosition.x , this.originalPosition.y + 8)),
                cc.moveTo(0.05, cc.v2(this.originalPosition.x, this.originalPosition.y - 8)),
                cc.moveTo(0.05, this.originalPosition)
            );
    
            // Run the shake sequence on the camera
            cc.find("Canvas/Main Camera").getComponent(cc.Camera).node.runAction(shakeSequence);
            //this.camera.node.runAction(shakeSequence);
        });

        let shakeCamera2 = cc.callFunc(function(target) {
            const mainCamera = cc.Camera.main;
            this.originalPosition = mainCamera.node.position.clone();
           //let shakeSequence;
            
                const shakeSequence = cc.sequence(
                    cc.moveTo(0.05, cc.v2(this.originalPosition.x+15 , this.originalPosition.y)),
                    cc.moveTo(0.05, cc.v2(this.originalPosition.x-15, this.originalPosition.y)),
                    cc.moveTo(0.05, this.originalPosition)
                );
            cc.find("Canvas/Main Camera").getComponent(cc.Camera).node.runAction(shakeSequence);
        });

        if(this.enemynum == 4){
            enemyAnimation.play("dong_move");
        }else if(this.enemynum == 5){
            enemyAnimation.play("red_dong_move");
        }else if(this.enemynum == 6){
        }
        let myLifeDeduct = cc.callFunc(function(target) {
            //console.log("enemyNum in mylife deduct:", this.enemynum);
            if(this.enemynum == 4) this.myLife -= 10;
            else if(this.enemynum == 5) this.myLife -= 20;
            else if(this.enemynum == 6) this.myLife -= 40;
        }, this);

        let turnSwitch1 = cc.callFunc(function(target) {
            this.myTurn = false;
            this.enemyTurn = false;
        }, this);

        let turnSwitch2 = cc.callFunc(function(target) {
            this.myTurn = true;
            this.enemyTurn = false;
        }, this);

        let particleAction = cc.callFunc(function(target) {
            if(this.enemynum == 4 )enemyParticleEffect.resetSystem();
            else if(this.enemynum == 5) enemyParticleEffect3.resetSystem();
        }, this);

        // let particleAction = cc.callFunc(function(target) {
        //     enemyParticleEffect.stopSystem();
        // }, this);

        
        let moveAction = cc.callFunc(function(target) {
            if(this.enemynum == 4)
                enemy.runAction(cc.sequence(cc.moveBy(0.6, cc.v2(0, 50)), cc.moveBy(0.2, cc.v2(0, -50)), particleAction, shakeCamera,myLifeDeduct));
            else if(this.enemynum == 5)
                enemy.runAction(cc.sequence(cc.moveBy(0.8, cc.v2(-460, 0)), shakeCamera2, particleAction, cc.moveBy(1.5, cc.v2(460, 0)),myLifeDeduct));
            else if(this.enemynum == 6)
                enemy.runAction(cc.sequence(cc.moveBy(1, cc.v2(-480, 0)), cc.moveBy(1, cc.v2(520, 0)),myLifeDeduct));
        }, this);

        


        let enemy = cc.find("Canvas/enemy");
        enemy.runAction(cc.sequence(turnSwitch1, moveAction,  turnSwitch2))
    }
    

}

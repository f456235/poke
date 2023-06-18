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

    @property({type:cc.AudioClip})
    red_dong_punch: cc.AudioClip = null;

    @property({type:cc.Node})
    mainCamera: cc.Node = null;

    @property({type:cc.SpriteFrame})
    enemy1: cc.SpriteFrame = null;

    @property({type:cc.SpriteFrame})
    enemy2: cc.SpriteFrame = null;

    @property({type:cc.SpriteFrame})
    enemy3: cc.SpriteFrame = null;

    @property({type:cc.SpriteFrame})
    enemy7: cc.SpriteFrame = null;

    @property(cc.ProgressBar)
    myHP: cc.ProgressBar = null;

    @property(cc.ProgressBar)
    enemyHP: cc.ProgressBar = null;

    @property(Man)
    man: Man = null;

    @property([cc.SpriteFrame])
    sprite: cc.SpriteFrame[] = [];

    bag: number[] = GlobalData.pokewoman;

    mylife: number =GlobalData.mylife;

    private myLife: number = 100;
    private enemyLife: number = 100;
    private isWin: boolean = false;
    private myTurn: boolean = true;
    private enemyTurn: boolean = false;
    private isLose: boolean = false;
    private enemynum = 0;
    private renew: boolean = true;
    private last_myself: number = -1;
    public skill1Button: cc.Button = null;
    public skill2Button: cc.Button = null;
    public skill3Button: cc.Button = null;
    public skill4Button: cc.Button = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        cc.find('Canvas/skills/bag2').on('click', () => {
            cc.find('Canvas/skills').active = false;
            cc.find('Canvas/bags2').active = true;
        });
        this.skill1Button = cc.find("Canvas/skills/skill1").getComponent(cc.Button);
        this.skill2Button = cc.find("Canvas/skills/skill2").getComponent(cc.Button);
        this.skill3Button = cc.find("Canvas/skills/skill3").getComponent(cc.Button);
        this.skill4Button = cc.find("Canvas/skills/skill4").getComponent(cc.Button);
        this.skill1Button.node.on('click', this.skill1, this);
        this.skill2Button.node.on('click', this.skill2, this);
        this.skill3Button.node.on('click', this.skill3, this);
        this.skill4Button.node.on('click', this.skill4, this);
        
    }

    start () {
        this.last_myself = GlobalData.myelf;
        this.enemynum = cc.director.getScene()["enemyNum"];

        if(this.enemynum == 4){
            if(cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null){
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy1;
            }
            
        }else if(this.enemynum == 5){
            if(cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null){
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy2;
                cc.find("Canvas/enemy").color = cc.Color.RED;
            }
        }else if(this.enemynum == 6){
            if(cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null){
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy3;
               // cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame.setFlipX(true);
                cc.find("Canvas/enemy").scaleX *= -1;
                cc.find("Canvas/enemy").width = 300;
                cc.find("Canvas/enemy").y = 0;    
            }
        }
        else if(this.enemynum == 7){
            if(cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null){
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy7;
                cc.find("Canvas/enemy").color = cc.Color.RED;
            }
        }
        cc.audioEngine.playMusic(this.battleBgm, true);
        

        let enemyParticleEffect2 = cc.find("Canvas/enemy/onLoad").getComponent(cc.ParticleSystem);
        if(this.enemynum == 4){
            console.log("this.enemynum == 4");
            enemyParticleEffect2.playOnLoad = true;
            enemyParticleEffect2.resetSystem();
        }
    }

    update(dt){
        if(this.renew){
            this.renew = false;
            if(GlobalData.myelf == 0){
                cc.find("Canvas/skills/skill1/Background/Label").getComponent(cc.Label).string = "魔法攻擊";
                cc.find("Canvas/skills/skill4/Background/Label").getComponent(cc.Label).string = "懶蛋攻擊";
            }
            else{
                cc.find("Canvas/skills/skill1/Background/Label").getComponent(cc.Label).string = "衝撞";
            }
        }
        if(GlobalData.myelf != this.last_myself){
            console.log("GlobalData.myelf:", GlobalData.myelf);
            this.last_myself = GlobalData.myelf;
            this.renew = true;
        }
        
        this.node.getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[GlobalData.myelf]];
        this.updateUI(dt);
        if(this.enemyLife <= 0 && !this.isWin){
            GlobalData.pokewoman.push(this.enemynum);


            this.enemyLife = 0;
            this.isWin = true;
            this.enemyHP.progress = 0;
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.winSound, false);
            GlobalData.exp += 100;
            this.scheduleOnce(function() {
                cc.director.loadScene("map2", ()=>{
                    let enemyNumString = cc.js.formatStr("%d", this.enemynum);
                    GlobalData.nodeToDestroy.push(enemyNumString);
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
        // console.log(this.enemynum);
        this.myHP.progress = this.myLife / 100;
        this.enemyHP.progress = this.enemyLife / 100;
        const myLifeLabel = cc.find("Canvas/myLife").getComponent(cc.Label);
        const enemyLifeLabel = cc.find("Canvas/enemyLife").getComponent(cc.Label);
      
        myLifeLabel.string = ((Array(7).join("0") + this.myLife.toString()).slice(-3)) + ('/100');
        enemyLifeLabel.string = ((Array(7).join("0") + this.enemyLife.toString()).slice(-3)) + ('/100');
    }

    skill1(){
        let enemyLifeDeduct = cc.callFunc(function(target) {
            if(GlobalData.myelf == 0) this.enemyLife -= 80;
            else this.enemyLife -= 20;
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
        let enemyParticleEffect4 = cc.find("Canvas/enemy/boom").getComponent(cc.ParticleSystem);
        
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
            enemyAnimation.play("boom");
        }
        else if(this.enemynum == 7){
            enemyAnimation.play("fish3");
        }
        let myLifeDeduct = cc.callFunc(function(target) {
            console.log("enemyNum in mylife deduct:", this.enemynum);
            if(this.enemynum == 4) this.myLife -= 10;
            else if(this.enemynum == 5) this.myLife -= 20;
            else if(this.enemynum == 6) this.myLife -= 45;
            else if(this.enemynum == 7) this.myLife -= 10;
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
            else if(this.enemynum == 6){ 
                enemyParticleEffect4.resetSystem();
                cc.find("Canvas/enemy/boom").runAction(cc.moveBy(0.2, cc.v2(-525, 0)));
                cc.find("Canvas/enemy/boom").x = 17.366;
            }
        }, this);

        let sound = cc.callFunc(function(target) {
            if(this.enemynum == 4 ){}//enemyParticleEffect.resetSystem();
            else if(this.enemynum == 5) {
                cc.audioEngine.playEffect(this.red_dong_punch, false);
                console.log("sound");
            }else if(this.enemynum == 6) {
                cc.audioEngine.playEffect(this.red_dong_punch, false);
                console.log("sound");
            }
            }, this); 
        
        let moveAction = cc.callFunc(function(target) {
            if(this.enemynum == 4)
                enemy.runAction(cc.sequence(cc.moveBy(0.6, cc.v2(0, 50)), cc.moveBy(0.2, cc.v2(0, -50)), particleAction, shakeCamera,myLifeDeduct,turnSwitch2));
            else if(this.enemynum == 5)
                enemy.runAction(cc.sequence(cc.moveBy(0.8, cc.v2(-460, 0)), sound, shakeCamera2, particleAction, cc.moveBy(1.5, cc.v2(460, 0)),myLifeDeduct,turnSwitch2));
            else if(this.enemynum == 6)
            enemy.runAction(cc.sequence(cc.moveBy(0.6, cc.v2(0, 20)), sound, shakeCamera2, particleAction, cc.moveBy(0.1, cc.v2(0, -20)),myLifeDeduct,turnSwitch2));
            else if(this.enemynum == 7){enemy.runAction(cc.sequence(cc.moveBy(1, cc.v2(-480, 0)), cc.moveBy(1, cc.v2(520, 0)),myLifeDeduct,turnSwitch2));}
            
        }, this);

        


        let enemy = cc.find("Canvas/enemy");
        enemy.runAction(cc.sequence(turnSwitch1, moveAction))
    }
    

}
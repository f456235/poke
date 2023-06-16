const {ccclass, property} = cc._decorator;
import GameManager from "./gamemanager";
@ccclass
export default class NewClass extends cc.Component {

    @property(GameManager)
    Gamemanger: GameManager = null;

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property({type:cc.AudioClip})
    bgm: cc.AudioClip = null;
    
    @property({type:cc.AudioClip})
    goinSound: cc.AudioClip = null;

    @property(cc.Integer)
    moveSpeed: number = 1; // 移动速度，可以根据需要调整

    animation= null; // 动画组件

    private isBattle: boolean = false;

    private isMovingUp: boolean = false;
    private isMovingDown: boolean = false;
    private isMovingLeft: boolean = false;
    private isMovingRight: boolean = false;


    start(){
        cc.audioEngine.playMusic(this.bgm, true);
        this.Gamemanger = cc.find('Canvas/gamemanager').getComponent('gamemanager');
        // console.log(this.Gamemanger);
        this.Gamemanger.palse = false;
    }

    onLoad() {
        // 注册键盘事件
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.animation = this.getComponent(cc.Animation);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        
    }

    onDestroy() {
        // 移除键盘事件监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    playAnimation(animationName: string) {
        if (this.animation && this.animation.getAnimationState(animationName).isPlaying) {
            return;
        }

        this.animation.play(animationName);
    }

    stopAnimation(animationName: string) {
        if (this.animation && this.animation.getAnimationState(animationName).isPlaying) {
            this.animation.stop(animationName);
        }
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        switch(event.keyCode) {
            case cc.macro.KEY.up:
                this.isMovingUp = true;
                // this.playAnimation("man_up");
                //this.animation.play("man_up");
                break;
            case cc.macro.KEY.down:
                this.isMovingDown = true;
                // this.playAnimation("man_down");
                //this.animation.play("man_down");
                break;
            case cc.macro.KEY.left:
                this.isMovingLeft = true;
                // this.playAnimation("man_left");
                //this.animation.play("man_left");
                break;
            case cc.macro.KEY.right:
                this.isMovingRight = true;
                // this.playAnimation("man_right");
                //this.animation.play("man_right");
                break;
        }
    }

    onKeyUp(event: cc.Event.EventKeyboard) {
        switch(event.keyCode) {
            case cc.macro.KEY.up:
                this.isMovingUp = false;
                 this.stopAnimation("man_up");
                break;
            case cc.macro.KEY.down:
                this.isMovingDown = false;
                 this.stopAnimation("man_down");
                break;
            case cc.macro.KEY.left:
                this.isMovingLeft = false;
                 this.stopAnimation("man_left");
                break;
            case cc.macro.KEY.right:
                this.isMovingRight = false;
                 this.stopAnimation("man_right");
                break;
        }
    }

    update(dt: number) {
        //cc.log(this.node.x, this.node.y);
        // 根据按键状态更新角色位置
        if(this.Gamemanger.palse==false)
        {
            if (this.isMovingUp) {
            this.node.y += (this.moveSpeed * dt - 0.5 );
                if(!this.animation.getAnimationState("man_up").isPlaying)this.animation.play("man_up");
            }
            if (this.isMovingDown) {
                this.node.y -= this.moveSpeed * dt - 0.5;
                if(!this.animation.getAnimationState("man_down").isPlaying)this.animation.play("man_down");
            }
            if (this.isMovingLeft) {
                this.node.x -= this.moveSpeed * dt - + 0.5;
                if(!this.animation.getAnimationState("man_left").isPlaying)this.animation.play("man_left");
            }
            if (this.isMovingRight) {
                this.node.x += this.moveSpeed * dt - 0.5;
                if(!this.animation.getAnimationState("man_right").isPlaying)this.animation.play("man_right");
            }
        }
        
        if ((this.node.x >= 48 && this.node.x <= 88) && (this.node.y >= 50 && this.node.y <= 86) && this.isBattle == false) {
            // this.isBattle = true;
            // cc.audioEngine.pauseMusic();
            // cc.audioEngine.playEffect(this.goinSound, false);
        
            // var canvasNode = cc.find("Canvas"); // 获取画布节点
            // var blinkAction = cc.blink(2, 5); // 闪烁动画，持续时间为2秒，闪烁次数为5次
            // this.Gamemanger.palse = true;
            // console.log(this.Gamemanger.palse);
            // canvasNode.runAction(cc.sequence(
            //     blinkAction,
            //     cc.callFunc(function () {
            //         cc.director.loadScene("battle");
            //     })
            // ));
        }   
    }

    onBeginContact(contact, selfCollider, otherCollider) {
        cc.log("Player hits the bush");
        let worldManifold = contact.getWorldManifold();
        let points = worldManifold.points;
        let normal = worldManifold.normal;
        if(otherCollider.tag == 1){
            cc.log("Player hits the enemy");
            this.isBattle = true;
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.goinSound, false);
        
            var canvasNode = cc.find("Canvas"); // 获取画布节点
            var blinkAction = cc.blink(2, 5); // 闪烁动画，持续时间为2秒，闪烁次数为5次
            this.Gamemanger.palse = true;
            console.log(this.Gamemanger.palse);
            canvasNode.runAction(cc.sequence(
                blinkAction,
                cc.callFunc(function () {
                    cc.director.loadScene("battle");
                })
            ));
            //cc.audioEngine.pauseMusic();
            //cc.audioEngine.playEffect(this.battleBgm, true);
        }
    }
}
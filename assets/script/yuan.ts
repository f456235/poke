const { ccclass, property } = cc._decorator;
import GameManager from "./gamemanager";
import GlobalData from "./GlobalData";

@ccclass
export default class No extends cc.Component {

    @property({ type: cc.AudioClip })
    yuan: cc.AudioClip = null;

    animation = null; // 动画组件
    audioId = -1; // Audio ID for the yuan audio clip

    onLoad() {
        this.animation = this.getComponent(cc.Animation);
    }

    start() {
        this.audioId = cc.audioEngine.playEffect(this.yuan, false);
        cc.audioEngine.setVolume(this.audioId, 1.0); // Set the volume to 1.0 (maximum)
        this.scheduleOnce(this.changeScene, 4.3); // Schedule the scene change after 2 seconds
    }

    update(dt: number) {
        if (this.animation && !this.animation.getAnimationState("yuan").isPlaying) {
            this.animation.play("yuan");
        }
    }

    changeScene() {
        cc.director.loadScene("map2"); // Load the "map2" scene
    }
}
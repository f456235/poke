// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    public email:string = null;
    public password:string = null;
    public login:cc.Button = null;
    public toRegister:cc.Button = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.login = cc.find('login').getComponent(cc.Button);
        this.login.node.on('click',this.handleLogin,this);
        this.toRegister = cc.find('register').getComponent(cc.Button);
        this.toRegister.node.on('click',this.toRegisterPage,this);
    }

    handleLogin(){
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(this.email,this.password).
        then((userCredential)=>{
            cc.director.loadScene('map2');
        })
        .catch((error){
            console.log(error.message);
            cc.error(error.message);
        })
    }

    toRegisterPage(){
        cc.director.loadScene('register');
    }
    update (dt) {
        this.email = cc.find('account/label').getComponent(cc.Label).string;
        this.password = cc.find('password/label').getComponent(cc.Label).string;
    }
}

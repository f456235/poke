// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
export default class GlobalData {
    static uid: string = "";
    static pokewoman: any[] = [];
    static level: number = 1;
    static PlayerPosX : number = 29;
    static PlayerPosY : number = -62;
    static cameraPosX : number = 138;
    static cameraPosY : number = 71;
    static volume : number = 0.5;
    static mute : boolean = this.volume == 0 ? false : true;
    static map : string = 'map2';
}


                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '639abIFlBBLWo5pa1bbo+/q', 'login');
// script/login.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalData_1 = require("./GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.email = null;
        _this.password = null;
        _this.login = null;
        _this.toRegister = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.login = cc.find('login').getComponent(cc.Button);
        this.login.node.on('click', this.handleLogin, this);
        this.toRegister = cc.find('register').getComponent(cc.Button);
        this.toRegister.node.on('click', this.toRegisterPage, this);
    };
    NewClass.prototype.handleLogin = function () {
        var auth = firebase.auth();
        auth.signInWithEmailAndPassword(this.email, this.password).
            then(function (userCredential) {
            GlobalData_1.default.uid = userCredential.user.uid;
            cc.director.loadScene('map2');
        })
            .catch(function (error) {
            console.log(error.message);
            cc.error(error.message);
        });
    };
    NewClass.prototype.toRegisterPage = function () {
        cc.director.loadScene('register');
    };
    NewClass.prototype.update = function (dt) {
        this.email = cc.find('account/label').getComponent(cc.Label).string;
        this.password = cc.find('password/label').getComponent(cc.Label).string;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5Q0M7UUF0Q0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBRWhCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFDcEIsY0FBUSxHQUFVLElBQUksQ0FBQztRQUN2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBQ3ZCLGdCQUFVLEdBQWEsSUFBSSxDQUFDOztJQThCdkMsQ0FBQztJQTdCRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDSSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN6RCxJQUFJLENBQUMsVUFBQyxjQUFjO1lBQ2hCLG9CQUFVLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3pDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzVFLENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUM1QjtJQUFELGVBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBeUNqRDtrQkF6Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2xvYmFsRGF0YSBmcm9tIFwiLi9HbG9iYWxEYXRhXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZSA6IGFueTtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIHB1YmxpYyBlbWFpbDpzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHBhc3N3b3JkOnN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgbG9naW46Y2MuQnV0dG9uID0gbnVsbDtcclxuICAgIHB1YmxpYyB0b1JlZ2lzdGVyOmNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubG9naW4gPSBjYy5maW5kKCdsb2dpbicpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMubG9naW4ubm9kZS5vbignY2xpY2snLHRoaXMuaGFuZGxlTG9naW4sdGhpcyk7XHJcbiAgICAgICAgdGhpcy50b1JlZ2lzdGVyID0gY2MuZmluZCgncmVnaXN0ZXInKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLnRvUmVnaXN0ZXIubm9kZS5vbignY2xpY2snLHRoaXMudG9SZWdpc3RlclBhZ2UsdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTG9naW4oKXtcclxuICAgICAgICBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG4gICAgICAgIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQodGhpcy5lbWFpbCx0aGlzLnBhc3N3b3JkKS5cclxuICAgICAgICB0aGVuKCh1c2VyQ3JlZGVudGlhbCk9PntcclxuICAgICAgICAgICAgR2xvYmFsRGF0YS51aWQgPSB1c2VyQ3JlZGVudGlhbC51c2VyLnVpZDtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAyJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgY2MuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0b1JlZ2lzdGVyUGFnZSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgncmVnaXN0ZXInKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLmVtYWlsID0gY2MuZmluZCgnYWNjb3VudC9sYWJlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBjYy5maW5kKCdwYXNzd29yZC9sYWJlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
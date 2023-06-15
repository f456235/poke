
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/register.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3576fo2O/lL2JgpoYZrhI4j', 'register');
// script/register.ts

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
        _this.email = null;
        _this.password = null;
        _this.register = null;
        _this.toLogin = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.register = cc.find('register').getComponent(cc.Button);
        this.register.node.on('click', this.handleRegister, this);
        this.toLogin = cc.find('login').getComponent(cc.Button);
        this.toLogin.node.on('click', this.toLoginPage, this);
    };
    NewClass.prototype.handleRegister = function () {
        var auth = firebase.auth();
        auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(function (userCredential) {
            GlobalData_1.default.uid = userCredential.user.uid;
            var database = firebase.database();
            firebase.database().ref('user').child(GlobalData_1.default.uid).set({
                level: GlobalData_1.default.level,
                myArray: [],
            });
            cc.director.loadScene('select');
        })
            .catch(function (err) {
            console.log(err.message);
            cc.error(err.message);
        });
    };
    NewClass.prototype.toLoginPage = function () {
        cc.director.loadScene('login');
    };
    NewClass.prototype.update = function (dt) {
        this.email = cc.find('account/label').getComponent(cc.Label).string;
        this.password = cc.find('password/label').getComponent(cc.Label).string;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwQ0M7UUF2Q0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUNoQixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBQ3BCLGNBQVEsR0FBVSxJQUFJLENBQUM7UUFDdkIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUMxQixhQUFPLEdBQWEsSUFBSSxDQUFDOztJQW1DcEMsQ0FBQztJQWxDRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDSSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM1RCxJQUFJLENBQUMsVUFBQyxjQUFjO1lBQ2pCLG9CQUFVLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFBO1lBQ3hDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDdEQsS0FBSyxFQUFFLG9CQUFVLENBQUMsS0FBSztnQkFDdkIsT0FBTyxFQUFFLEVBQUU7YUFDZCxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM1RSxDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFITixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEM1QjtJQUFELGVBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBMENqRDtrQkExQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2xvYmFsRGF0YSBmcm9tIFwiLi9HbG9iYWxEYXRhXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZSA6IGFueTtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZW1haWw6c3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBwYXNzd29yZDpzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHJlZ2lzdGVyOmNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBwdWJsaWMgdG9Mb2dpbjpjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyID0gY2MuZmluZCgncmVnaXN0ZXInKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyLm5vZGUub24oJ2NsaWNrJyx0aGlzLmhhbmRsZVJlZ2lzdGVyLHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9Mb2dpbiA9IGNjLmZpbmQoJ2xvZ2luJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy50b0xvZ2luLm5vZGUub24oJ2NsaWNrJyx0aGlzLnRvTG9naW5QYWdlLHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlZ2lzdGVyKCl7XHJcbiAgICAgICAgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuICAgICAgICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCh0aGlzLmVtYWlsLHRoaXMucGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKT0+e1xyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLnVpZCA9IHVzZXJDcmVkZW50aWFsLnVzZXIudWlkXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3VzZXInKS5jaGlsZChHbG9iYWxEYXRhLnVpZCkuc2V0KHtcclxuICAgICAgICAgICAgICAgIGxldmVsOiBHbG9iYWxEYXRhLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgbXlBcnJheTogW10sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3NlbGVjdCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvTG9naW5QYWdlKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdsb2dpbicpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBjYy5maW5kKCdhY2NvdW50L2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGNjLmZpbmQoJ3Bhc3N3b3JkL2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIl19
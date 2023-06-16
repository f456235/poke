
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/handleSetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7677e2WM5lKEZMWMP0sxwHk', 'handleSetting');
// script/handleSetting.ts

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
        _this.volume_slider = null;
        _this.save = null;
        _this.quit = null;
        _this.back = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.save.node.on('click', this.SaveGame, this);
        this.quit.node.on('click', this.quitGame, this);
        this.back.node.on('click', this.backToMap, this);
    };
    NewClass.prototype.SaveGame = function () {
        var uid = GlobalData_1.default.uid;
        var database = firebase.database();
        var userRef = database.ref().child('user').child(uid);
        userRef.child('myArray').set(GlobalData_1.default.pokewoman)
            .then(function () {
            console.log('myArray saved successfully');
        })
            .catch(function (error) {
            console.error('Error saving myArray:', error);
        });
    };
    NewClass.prototype.quitGame = function () {
        GlobalData_1.default.uid = "";
        var auth = firebase.auth();
        auth.signOut().then(function () {
            // User signed out successfully
            cc.director.loadScene('login');
        }).catch(function (error) {
            // An error occurred while signing out
            console.error("Sign out error:", error);
        });
    };
    NewClass.prototype.backToMap = function () {
        cc.director.loadScene('map2');
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        GlobalData_1.default.volume = this.volume_slider.progress;
    };
    __decorate([
        property(cc.Slider)
    ], NewClass.prototype, "volume_slider", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "save", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "quit", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "back", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoYW5kbGVTZXR0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDJDQUFzQztBQUVoQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXlEQztRQXRERyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQzs7SUE2QzNCLENBQUM7SUF6Q0csd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQU0sR0FBRyxHQUFHLG9CQUFVLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxvQkFBVSxDQUFDLFNBQVMsQ0FBQzthQUM3QyxJQUFJLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUNJLG9CQUFVLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztZQUNoQiwrQkFBK0I7WUFDL0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNiLHNDQUFzQztZQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLG9CQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3BELENBQUM7SUFyREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDRztJQVpOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5RDVCO0lBQUQsZUFBQztDQXpERCxBQXlEQyxDQXpEcUMsRUFBRSxDQUFDLFNBQVMsR0F5RGpEO2tCQXpEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZSA6IGFueSA7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TbGlkZXIpXHJcbiAgICB2b2x1bWVfc2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBzYXZlOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBxdWl0OiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBiYWNrOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnNhdmUubm9kZS5vbignY2xpY2snLHRoaXMuU2F2ZUdhbWUsdGhpcyk7XHJcbiAgICAgICAgdGhpcy5xdWl0Lm5vZGUub24oJ2NsaWNrJyx0aGlzLnF1aXRHYW1lLHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmFjay5ub2RlLm9uKCdjbGljaycsdGhpcy5iYWNrVG9NYXAsdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgU2F2ZUdhbWUoKSB7XHJcbiAgICAgICAgY29uc3QgdWlkID0gR2xvYmFsRGF0YS51aWQ7XHJcbiAgICAgICAgY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJSZWYgPSBkYXRhYmFzZS5yZWYoKS5jaGlsZCgndXNlcicpLmNoaWxkKHVpZCk7XHJcbiAgICAgICAgdXNlclJlZi5jaGlsZCgnbXlBcnJheScpLnNldChHbG9iYWxEYXRhLnBva2V3b21hbilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ215QXJyYXkgc2F2ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBteUFycmF5OicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBxdWl0R2FtZSgpe1xyXG4gICAgICAgIEdsb2JhbERhdGEudWlkID0gXCJcIjtcclxuICAgICAgICBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG4gICAgICAgIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVc2VyIHNpZ25lZCBvdXQgc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbG9naW4nKTtcclxuICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzaWduaW5nIG91dFxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU2lnbiBvdXQgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYmFja1RvTWFwKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAyJyk7XHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBHbG9iYWxEYXRhLnZvbHVtZSA9IHRoaXMudm9sdW1lX3NsaWRlci5wcm9ncmVzcztcclxuICAgIH1cclxufVxyXG4iXX0=
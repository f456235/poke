
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/camera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2cc6lDaHpCkYJUApleIHEQ', 'camera');
// script/camera.ts

"use strict";
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
        _this.player = null;
        _this.camera = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // cc.director.getPhysicsManager().enabled = true;
        this.node.setPosition(GlobalData_1.default.cameraPosX, GlobalData_1.default.cameraPosY);
        // const bagNode = cc.find('Canvas/Main Camera/bag');
        // bagNode.on(cc.Node.EventType.MOUSE_ENTER, this.onBagMouseEnter, this);
        // bagNode.on(cc.Node.EventType.MOUSE_LEAVE, this.onBagMouseLeave, this);
        // cc.find('Canvas/Main Camera').on('click', () => {
        //     cc.director.loadScene('bag');
        // });
    };
    // onBagMouseEnter(event) {
    //     const bagNode = event.currentTarget;
    //     bagNode.color = cc.Color.YELLOW; // 设置鼠标悬停时的颜色，这里示例为黄色
    // }
    // onBagMouseLeave(event) {
    //     const bagNode = event.currentTarget;
    //     bagNode.color = cc.Color.WHITE; // 恢复原始颜色
    // }
    // onDestroy() {
    //     const bagNode = cc.find('Canvas/Main Camera/bag');
    //     bagNode.off(cc.Node.EventType.MOUSE_ENTER, this.onBagMouseEnter, this);
    //     bagNode.off(cc.Node.EventType.MOUSE_LEAVE, this.onBagMouseLeave, this);
    // }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        // cc.find('Canvas/Main Camera/bag').on('click', () => {
        //     cc.director.loadScene('bag');
        // });
        //cc.log(this.node.x);
        if (this.player.x <= 62 && this.player.x >= -62)
            this.node.x = this.player.x;
        //else this.node.x = 62;
        if (this.player.y <= 140 && this.player.y >= -136)
            this.node.y = this.player.y;
        //else this.node.y = -147;
        GlobalData_1.default.cameraPosX = this.node.position.x;
        GlobalData_1.default.cameraPosY = this.node.position.y;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property({ type: cc.Node })
    ], NewClass.prototype, "player", void 0);
    __decorate([
        property({ type: cc.Camera })
    ], NewClass.prototype, "camera", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjYW1lcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBRWhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNERDO1FBekRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUd2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBYyxJQUFJLENBQUM7O0lBZ0Q3QixDQUFDO0lBOUNHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFVLENBQUMsVUFBVSxFQUFDLG9CQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkUscURBQXFEO1FBQ3JELHlFQUF5RTtRQUN6RSx5RUFBeUU7UUFFekUsb0RBQW9EO1FBQ3BELG9DQUFvQztRQUNwQyxNQUFNO0lBQ1YsQ0FBQztJQUNELDJCQUEyQjtJQUMzQiwyQ0FBMkM7SUFDM0MsNkRBQTZEO0lBQzdELElBQUk7SUFFSiwyQkFBMkI7SUFDM0IsMkNBQTJDO0lBQzNDLGdEQUFnRDtJQUNoRCxJQUFJO0lBQ0osZ0JBQWdCO0lBQ2hCLHlEQUF5RDtJQUN6RCw4RUFBOEU7SUFDOUUsOEVBQThFO0lBQzlFLElBQUk7SUFFSix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sd0RBQXdEO1FBQ3hELG9DQUFvQztRQUNwQyxNQUFNO1FBQ04sc0JBQXNCO1FBQ3RCLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRTtRQUNqQyx3QkFBd0I7UUFDeEIsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFO1FBQzdCLDBCQUEwQjtRQUMzQixvQkFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDN0Msb0JBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUF4REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLElBQUksRUFBQyxDQUFDOzRDQUNGO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUMsQ0FBQzs0Q0FDRjtJQVpSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0RDVCO0lBQUQsZUFBQztDQTVERCxBQTREQyxDQTVEcUMsRUFBRSxDQUFDLFNBQVMsR0E0RGpEO2tCQTVEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5Ob2RlfSlcclxuICAgIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkNhbWVyYX0pXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKEdsb2JhbERhdGEuY2FtZXJhUG9zWCxHbG9iYWxEYXRhLmNhbWVyYVBvc1kpO1xyXG4gICAgICAgIC8vIGNvbnN0IGJhZ05vZGUgPSBjYy5maW5kKCdDYW52YXMvTWFpbiBDYW1lcmEvYmFnJyk7XHJcbiAgICAgICAgLy8gYmFnTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbkJhZ01vdXNlRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIGJhZ05vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub25CYWdNb3VzZUxlYXZlLCB0aGlzKTtcclxuICAgIFxyXG4gICAgICAgIC8vIGNjLmZpbmQoJ0NhbnZhcy9NYWluIENhbWVyYScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdiYWcnKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuICAgIC8vIG9uQmFnTW91c2VFbnRlcihldmVudCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGJhZ05vZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgLy8gICAgIGJhZ05vZGUuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7IC8vIOiuvue9rum8oOagh+aCrOWBnOaXtueahOminOiJsu+8jOi/memHjOekuuS+i+S4uum7hOiJslxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAvLyBvbkJhZ01vdXNlTGVhdmUoZXZlbnQpIHtcclxuICAgIC8vICAgICBjb25zdCBiYWdOb2RlID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIC8vICAgICBiYWdOb2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7IC8vIOaBouWkjeWOn+Wni+minOiJslxyXG4gICAgLy8gfVxyXG4gICAgLy8gb25EZXN0cm95KCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGJhZ05vZGUgPSBjYy5maW5kKCdDYW52YXMvTWFpbiBDYW1lcmEvYmFnJyk7XHJcbiAgICAvLyAgICAgYmFnTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsIHRoaXMub25CYWdNb3VzZUVudGVyLCB0aGlzKTtcclxuICAgIC8vICAgICBiYWdOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgdGhpcy5vbkJhZ01vdXNlTGVhdmUsIHRoaXMpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vIGNjLmZpbmQoJ0NhbnZhcy9NYWluIENhbWVyYS9iYWcnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnYmFnJyk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy9jYy5sb2codGhpcy5ub2RlLngpO1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLnggPD0gNjIgJiYgdGhpcy5wbGF5ZXIueCA+PSAtNjIpIFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMucGxheWVyLnggO1xyXG4gICAgICAgIC8vZWxzZSB0aGlzLm5vZGUueCA9IDYyO1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLnkgPD0gMTQwICYmIHRoaXMucGxheWVyLnkgPj0gLTEzNikgXHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLnBsYXllci55IDtcclxuICAgICAgICAvL2Vsc2UgdGhpcy5ub2RlLnkgPSAtMTQ3O1xyXG4gICAgICAgR2xvYmFsRGF0YS5jYW1lcmFQb3NYID0gdGhpcy5ub2RlLnBvc2l0aW9uLng7XHJcbiAgICAgICBHbG9iYWxEYXRhLmNhbWVyYVBvc1kgPSB0aGlzLm5vZGUucG9zaXRpb24ueTtcclxuICAgIH1cclxufVxyXG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjYW1lcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwREM7UUF2REcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFjLElBQUksQ0FBQzs7SUE4QzdCLENBQUM7SUE1Q0csd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxrREFBa0Q7UUFFbEQscURBQXFEO1FBQ3JELHlFQUF5RTtRQUN6RSx5RUFBeUU7UUFFekUsb0RBQW9EO1FBQ3BELG9DQUFvQztRQUNwQyxNQUFNO0lBQ1YsQ0FBQztJQUNELDJCQUEyQjtJQUMzQiwyQ0FBMkM7SUFDM0MsNkRBQTZEO0lBQzdELElBQUk7SUFFSiwyQkFBMkI7SUFDM0IsMkNBQTJDO0lBQzNDLGdEQUFnRDtJQUNoRCxJQUFJO0lBQ0osZ0JBQWdCO0lBQ2hCLHlEQUF5RDtJQUN6RCw4RUFBOEU7SUFDOUUsOEVBQThFO0lBQzlFLElBQUk7SUFFSix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sd0RBQXdEO1FBQ3hELG9DQUFvQztRQUNwQyxNQUFNO1FBQ04sc0JBQXNCO1FBQ3RCLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRTtRQUNqQyx3QkFBd0I7UUFDeEIsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFO1FBQzdCLDBCQUEwQjtJQUM5QixDQUFDO0lBdEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUMsQ0FBQzs0Q0FDRjtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUM7NENBQ0Y7SUFaUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEQ1QjtJQUFELGVBQUM7Q0ExREQsQUEwREMsQ0ExRHFDLEVBQUUsQ0FBQyxTQUFTLEdBMERqRDtrQkExRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuTm9kZX0pXHJcbiAgICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5DYW1lcmF9KVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICAgICAgLy8gY29uc3QgYmFnTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9NYWluIENhbWVyYS9iYWcnKTtcclxuICAgICAgICAvLyBiYWdOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uQmFnTW91c2VFbnRlciwgdGhpcyk7XHJcbiAgICAgICAgLy8gYmFnTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgdGhpcy5vbkJhZ01vdXNlTGVhdmUsIHRoaXMpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gY2MuZmluZCgnQ2FudmFzL01haW4gQ2FtZXJhJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2JhZycpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gb25CYWdNb3VzZUVudGVyKGV2ZW50KSB7XHJcbiAgICAvLyAgICAgY29uc3QgYmFnTm9kZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAvLyAgICAgYmFnTm9kZS5jb2xvciA9IGNjLkNvbG9yLllFTExPVzsgLy8g6K6+572u6byg5qCH5oKs5YGc5pe255qE6aKc6Imy77yM6L+Z6YeM56S65L6L5Li66buE6ImyXHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIG9uQmFnTW91c2VMZWF2ZShldmVudCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGJhZ05vZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgLy8gICAgIGJhZ05vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTsgLy8g5oGi5aSN5Y6f5aeL6aKc6ImyXHJcbiAgICAvLyB9XHJcbiAgICAvLyBvbkRlc3Ryb3koKSB7XHJcbiAgICAvLyAgICAgY29uc3QgYmFnTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9NYWluIENhbWVyYS9iYWcnKTtcclxuICAgIC8vICAgICBiYWdOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbkJhZ01vdXNlRW50ZXIsIHRoaXMpO1xyXG4gICAgLy8gICAgIGJhZ05vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLm9uQmFnTW91c2VMZWF2ZSwgdGhpcyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgLy8gY2MuZmluZCgnQ2FudmFzL01haW4gQ2FtZXJhL2JhZycpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdiYWcnKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvL2NjLmxvZyh0aGlzLm5vZGUueCk7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIueCA8PSA2MiAmJiB0aGlzLnBsYXllci54ID49IC02MikgXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5wbGF5ZXIueCA7XHJcbiAgICAgICAgLy9lbHNlIHRoaXMubm9kZS54ID0gNjI7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIueSA8PSAxNDAgJiYgdGhpcy5wbGF5ZXIueSA+PSAtMTM2KSBcclxuICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMucGxheWVyLnkgO1xyXG4gICAgICAgIC8vZWxzZSB0aGlzLm5vZGUueSA9IC0xNDc7XHJcbiAgICB9XHJcbn1cclxuIl19
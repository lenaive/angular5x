define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Chatroom = /** @class */ (function () {
        function Chatroom(chatName, numberOfUsers) {
            this._messages = [];
            this.chatName = chatName || 'Nueva Sala';
        }
        Object.defineProperty(Chatroom.prototype, "messages", {
            get: function () {
                return this._messages;
            },
            enumerable: true,
            configurable: true
        });
        Chatroom.prototype.addMessage = function (message) {
            console.log(message);
            this._messages.push(message);
        };
        return Chatroom;
    }());
    exports.Chatroom = Chatroom;
});
//# sourceMappingURL=chatroom.js.map
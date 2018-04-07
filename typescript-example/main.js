define(["require", "exports", "./chatroom"], function (require, exports, chatroom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var chatRoom = new chatroom_1.Chatroom('Sala Fictizia');
    document.querySelector('#chatName').innerHTML = chatRoom.chatName;
    var username = document.querySelector('#username');
    var message = document.querySelector('#message');
    var messageList = document.querySelector('#messageList');
    document.querySelector('#sendMessage').addEventListener('click', function () {
        var userMessage = {
            username: username.value,
            message: message.value,
            date: new Date()
        };
        console.log(userMessage);
        chatRoom.addMessage(userMessage);
        var messages = chatRoom.messages;
        var result = '';
        var minutes = userMessage.date.getMinutes() < 10 ? "0" + userMessage.date.getMinutes() : "" + userMessage.date.getMinutes();
        messages.forEach(function (el) {
            result = result + "<li>Escrito por " + el.username + ": " + el.message + " [" + el.date.getHours() + ":" + minutes + "]</li>";
        });
        console.log(result);
        messageList.innerHTML = result;
    });
});
//# sourceMappingURL=main.js.map
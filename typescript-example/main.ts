
import { Chatroom } from "./chatroom"
import { MessajesInterface } from "./messajes.interface"

let chatRoom = new Chatroom('Sala Fictizia');

document.querySelector('#chatName').innerHTML = chatRoom.chatName;

let username    = (<HTMLInputElement>document.querySelector('#username'));
let message     = (<HTMLInputElement>document.querySelector('#message'));
let messageList = document.querySelector('#messageList');

document.querySelector('#sendMessage').addEventListener('click', () => {

    let userMessage: MessajesInterface = {
        username:   username.value,
        message:    message.value,
        date:       new Date()
    };
    console.log(userMessage);

    chatRoom.addMessage(userMessage);

    let messages = chatRoom.messages;

    let result = '';

    let minutes: string = userMessage.date.getMinutes() < 10 ? `0${userMessage.date.getMinutes()}` : `${userMessage.date.getMinutes()}`;

    messages.forEach((el) => {
        result = `${result}<li>Escrito por ${el.username}: ${el.message} [${el.date.getHours()}:${minutes}]</li>`
    });
    console.log(result);

    messageList.innerHTML = result;

});

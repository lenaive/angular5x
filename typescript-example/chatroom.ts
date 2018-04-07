import {MessajesInterface} from "./messajes.interface";

export class Chatroom {
    public chatName: string;
    public numberOfUsers: string;
    private readonly _messages: Array<MessajesInterface>;

    constructor(chatName: string, numberOfUsers?:number){
        this._messages = [];
        this.chatName = chatName || 'Nueva Sala';
    }

    get messages() {
        return this._messages;
    }

    addMessage(message:MessajesInterface) {
        console.log(message);
        this._messages.push(message);
    }
}
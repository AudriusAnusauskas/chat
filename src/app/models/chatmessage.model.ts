export class ChatMessage{
    constructor(
        public email:string,
        public uid:string,
        public text:string,
        public id?:string
    ){ 

    }
}
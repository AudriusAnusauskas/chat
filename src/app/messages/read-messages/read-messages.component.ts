import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/chatmessage.model';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-read-messages',
  templateUrl: './read-messages.component.html',
  styleUrls: ['./read-messages.component.css']
})
export class ReadMessagesComponent implements OnInit {
  public messages:ChatMessage[];
  
  constructor(private messagesService:MessagesService) { }

  ngOnInit(): void {
    this.messagesService.getMessages().subscribe((messages)=>{
      this.messages=messages;

    })
  }

}

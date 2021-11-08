import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-write-messages',
  templateUrl: './write-messages.component.html',
  styleUrls: ['./write-messages.component.css']
})
export class WriteMessagesComponent implements OnInit {

  constructor(private messagesService:MessagesService) { }

  ngOnInit(): void {
  }

  onPostMessage(form:NgForm){
    this.messagesService.postMessage(form.value.text).subscribe((response)=>{
      console.log(response);
      form.reset();
      
    })
  }

}

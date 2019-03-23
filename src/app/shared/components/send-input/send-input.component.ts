import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kit-send-input',
  templateUrl: './send-input.component.html',
  styleUrls: ['./send-input.component.scss']
})
export class SendInputComponent implements OnInit {
    buttonClicked: boolean;

  constructor() { }

  ngOnInit() {
  }

  okClick() {
      this.buttonClicked = true;
      setTimeout(() => {
        this.buttonClicked = false;
      }, 2000);
  }

  buttonText() {
      return this.buttonClicked ? 'Sent' : 'Send';
  }

}

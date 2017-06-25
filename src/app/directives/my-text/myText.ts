import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


@Component({
  selector: 'my-text',
  templateUrl: './myText.html',
  styleUrls: [ './myText.css' ]
})
export class MyTextComponent {
  @Input() textInput: String = "";
  textLength: Number = 0;

  @Output() textChange = new EventEmitter<String>();

  onEditChange(): void {
    this.textLength = this.textInput.length;
    this.textChange.emit(this.textInput);
  }
}

import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    document: Document;
    @ViewChild('usernameInput') usernameInput: ElementRef;

  constructor(@Inject(DOCUMENT) document: Document) {
    this.document = document;
   }

  ngOnInit() {
  }

  validateUsername(username: string) {
    if (!/\s/g.test(username) && username.length > 2) {
        this.document.getElementById('welcomePageUserNameErrorMessage').style.visibility = 'hidden';
        this.document.getElementById('landingBtnContinue').removeAttribute('disabled');
    } else {
        this.document.getElementById('welcomePageUserNameErrorMessage').style.visibility = 'visible';
        this.document.getElementById('landingBtnContinue').setAttribute('disabled', '');
    }
  }

  onUsernameInputBlur(username: string) {
    if (username === null || username.replace(/ /g, '').length === 0) {
            this.usernameInput.nativeElement.value = '';
        this.document.getElementById('welcomePageUserNameErrorMessage').style.visibility = 'hidden';
    }
  }

}

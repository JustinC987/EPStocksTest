import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatDialog } from '@angular/material';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
	constructor(public dialog: MatDialog) {}

	ngOnInit() {}

	openLogin() {
		this.dialog.open(LoginModalComponent, {});
	}
=======

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

>>>>>>> 5779cd097d0f7d3c64229788bc1e9a0d8b9915e2
}

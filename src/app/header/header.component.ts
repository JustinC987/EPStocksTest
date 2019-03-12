import { Component, OnInit } from '@angular/core';
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
}

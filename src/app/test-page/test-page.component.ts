import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../stocks';
@Component({
	selector: 'app-test-page',
	templateUrl: './test-page.component.html',
	styleUrls: [ './test-page.component.css' ]
})
export class TestPageComponent implements OnInit {
	public stocks?: Stock[] = [];
	public stock: Stock;

	constructor(public stockService: StockService) {
		/* this is mock data. This is the stock object being displayed in the ul in the html 
    //where the div is <div *ngIf="stock"</div>.
    let stock of stocks is for when you use this.getStocks();
    */
		this.stock = {
			id: 1,
			name: 'test',
			price: 500
		};
	}

	ngOnInit() {
		this.getTestStock();
		// use the function below once you have an endpoint
		// this.getStocks();
	}
	getStocks() {
		this.stockService.getUser({}).subscribe((stock) => {
			this.stocks = stock;
			console.log('Stock: ', stock);
		});
	}

	getTestStock() {
		console.log(this.stock);
		return this.stock;
	}
}

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

	constructor(public stockService: StockService) {}

	ngOnInit() {
		this.getStocks();
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

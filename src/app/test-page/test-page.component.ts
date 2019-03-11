import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../stocks';

import { Router, RouterStateSnapshot } from '@angular/router';

@Component({
	selector: 'app-test-page',
	templateUrl: './test-page.component.html',
	styleUrls: [ './test-page.component.css' ]
})
export class TestPageComponent implements OnInit {
	public stocks?: Stock[] = [];
	public stock: Stock;
	public routerSnapshot: RouterStateSnapshot;

	constructor(public stockService: StockService, private router: Router) {
		this.routerSnapshot = router.routerState.snapshot;
	}

	ngOnInit() {
		this.getStocks();
	}
	getStocks() {
		this.stockService.getUser({}).subscribe((stock) => {
			this.stocks = stock;
			console.log('Stock: ', stock);
		});
	}

	/**
	 * Open a chat page with the user
	 * @param stockId Tutor ID to chat with
	 */
	openStockSingle(tutorId) {
		this.router.navigate([ 'stock-single' ], {
			queryParams: {
				with: tutorId
			}
		});
	}
}

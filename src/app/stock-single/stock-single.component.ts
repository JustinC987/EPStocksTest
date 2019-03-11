import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Stock } from '../stocks';
import { StockService } from '../stock.service';

@Component({
	selector: 'app-stock-single',
	templateUrl: './stock-single.component.html',
	styleUrls: [ './stock-single.component.css' ]
})
export class StockSingleComponent implements OnInit {
	public stock: Stock;
	public stockId: number;
	public routerSnapshot: RouterStateSnapshot;
	public with: number;
	constructor(public router: Router, public stockService: StockService) {
		this.routerSnapshot = router.routerState.snapshot;
	}

	ngOnInit() {
		this.with = this.routerSnapshot.root.queryParams['with'];

		this.displayStock();
	}

	displayStock() {
		this.stockService.getOne(this.with).subscribe((stock) => {
			this.stock = stock;
			console.log('Stock: ', this.stock);
		});
	}
}

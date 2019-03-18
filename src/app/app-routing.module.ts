import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from '../app/test-page/test-page.component';
import { StockSingleComponent } from '../app/stock-single/stock-single.component';
import { MarketsDataComponent } from './markets-data/markets-data.component';

// Components

const routes: Routes = [
	{
		path: '',
		component: TestPageComponent
	},
	{
		path: 'stock-single',
		component: StockSingleComponent
  },
  {
    path: 'markets',
    component: MarketsDataComponent
  }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRouterModule {}

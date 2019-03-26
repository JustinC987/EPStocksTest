import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from '../app/test-page/test-page.component';
import { StockSingleComponent } from '../app/stock-single/stock-single.component';

// Components

const routes: Routes = [
	{
		path: '',
		component: TestPageComponent
	},
	{
		path: 'stock-single',
		component: StockSingleComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRouterModule {}

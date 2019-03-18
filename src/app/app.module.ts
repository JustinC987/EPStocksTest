import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestPageComponent } from './test-page/test-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material';
import { AppRouterModule } from './app-routing.module';
import { StockSingleComponent } from './stock-single/stock-single.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarketsDataComponent } from './markets-data/markets-data.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		TestPageComponent,
		StockSingleComponent,
		LoginModalComponent,
		MarketsDataComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatDividerModule,
		AppRouterModule,
		MatDialogModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [ AppComponent ],
	exports: [ MatDialogModule ],
	entryComponents: [ LoginModalComponent ]
})
export class AppModule {}

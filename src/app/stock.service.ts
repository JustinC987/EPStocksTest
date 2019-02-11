import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { HandlerService } from './handler.service';
import { AuthService } from '../app/auth.service';
import { Stock } from './stocks';
@Injectable({
	providedIn: 'root'
})
export class StockService {
	constructor() {}
}

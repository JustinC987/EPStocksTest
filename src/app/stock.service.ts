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
	// Put the url to server/tables here
	private url = 'http://localhost:3000/employees';

	constructor(
		private http: HttpClient,
		public handler: HandlerService,
		public authService: AuthService
	) {}

	//crud operations

	public post(stock: Stock): Observable<Object> {
		this.handler.showLoader();

		return this.http.post(this.url, stock).pipe(
			tap((result) => {
				this.handler.log('UserService', `POST user`, {
					body: stock,
					result: result
				});
				this.handler.hideLoader();
			}),
			catchError(this.handler.error<Stock>('UserService::post'))
		);
	}

	public getUser(params: any): Observable<Stock[]> {
		this.handler.showBackgroundLoader();

		return this.http
			.get<Stock[]>(this.url, {
				headers: this.authService.getHeaders(),
				params: new HttpParams({ fromObject: params })
			})
			.pipe(
				map((results) => {
					this.handler.log('UserService', 'GET user', {
						params: params,
						results: results
					});

					// Array-ify
					if (!(results instanceof Array)) {
						results = [ results ];
					}
					this.handler.hideBackgroundLoader();

					return results;
				}),
				catchError(this.handler.error<Stock[]>('UserService::getOne'))
			);
	}

	/**
	 * Update a user
	 *
	 * @param userId User ID to update by
	 * @param data User data to update
	 */
	public update(stockId: number, data: Stock): Observable<any> {
		this.handler.showLoader();

		return this.http
			.put(`${this.url}/${stockId}`, data, {
				headers: this.authService.getHeaders(),
				observe: 'response'
			})
			.pipe(
				tap((results) => {
					this.handler.log('UserService', `PUT user (#${stockId})`, {
						stockId: stockId,
						data: data,
						results: results
					});
					this.handler.hideLoader();
				}),
				catchError(
					this.handler.error<Stock>(
						'UserService::update',
						`PUT user (#${stockId}) failed.`
					)
				)
			);
	}

	/**
	 * Delete a user
	 *
	 * @param userId User ID to delete by
	 */
	public delete(stockId: number): Observable<any> {
		this.handler.showLoader();

		return this.http
			.delete(`${this.url}/${stockId}`, {
				headers: this.authService.getHeaders(),
				observe: 'response'
			})
			.pipe(
				tap((results) => {
					this.handler.log(
						'UserService',
						`DELETE user (#${stockId})`,
						{
							stockId: stockId,
							results: results
						}
					);
					this.handler.hideLoader();
				}),
				catchError(
					this.handler.error<number>(
						'UserService::delete',
						`DELETE user (#${stockId}) failed.`
					)
				)
			);
	}
}

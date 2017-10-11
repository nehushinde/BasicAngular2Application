import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
 
import { Observable } from 'rxjs/Rx';
 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
 
@Injectable()
export class HttpService{ 
	http: Http;
	posts_Url: string = 'https://jsonplaceholder.typicode.com/posts';
	constructor(public _http: Http)
	 { 
		 this.http = _http;    
	 }
	getUserPosts() 
	{ 
	 return this.http.get(this.posts_Url) .map((res: Response) => { return res.json(); }); }
	 } 

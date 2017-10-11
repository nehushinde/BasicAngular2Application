import { Component,OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
    selector:'app-http',
    templateUrl:'../view/httpData.component.html',
    styleUrls:['../app.component.css'],
    providers: [HttpService]
})
export class HttpComponent implements OnInit {
	
	   constructor(private _postService: HttpService) { }
	
	   posts:Object = [];
	
	   ngOnInit() {
		   this.getPosts();
		}
			
	   getPosts()
	   {
		   this._postService.getUserPosts()
			   .subscribe(arg => this.posts = arg);
		   
	   };
   }
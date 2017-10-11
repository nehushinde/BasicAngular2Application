import { Component } from '@angular/core';
import { ExampleService } from '../service/title.service';


@Component({
  selector: 'app-root',
  templateUrl: '../view/app.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ExampleService]
  
})
export class AppComponent {
  title:string;
  constructor(private _exampleService: ExampleService) {
    
  }
  ngOnInit() {
    this.title = this._exampleService.someMethod();
  }
}

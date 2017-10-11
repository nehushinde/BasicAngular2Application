import { Component } from '@angular/core';
@Component({
    selector:'app-pipes',
    templateUrl:'../view/pipes.component.html',
    styleUrls:['../app.component.css']
})
export class PipesComponent{
    name = 'Welcome'
    date = new Date();
    a: number = 0.259;
    b: number = 1.3495;
    object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
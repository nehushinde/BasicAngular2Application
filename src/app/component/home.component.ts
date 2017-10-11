import { Component,OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/interval';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-home',
    templateUrl: '../view/home.component.html',
    styleUrls: ['../app.component.css']
    
})
export class HomeComponent implements OnInit,OnDestroy {
    numberObsSubscription: Subscription;
    customObsSubscription: Subscription; 

      constructor() { }
    
    ngOnInit() {
        const myNumbers = Observable.interval(1000);
        this.numberObsSubscription = myNumbers.subscribe(
          (number: number) => {
            // console.log('Observable');
            console.log(number);
          }
        );


        const myObservable = Observable.create((observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('First package');
        },2000);

        setTimeout(() => {
          observer.next('Second package');
        },4000);

        setTimeout(() => {
        //   observer.error('Not work');
        observer.complete();
        },5000);

        setTimeout(() => {
            observer.next('third package');
          },6000);
        });

        this.customObsSubscription = myObservable.subscribe(
        (data: string) => { console.log(data); },
        (error: string) => { console.log(error); },
        () => { console.log('completed'); }
      );
    }

    //cleanup observable subscription
    ngOnDestroy(){
        this.numberObsSubscription.unsubscribe();
        this.customObsSubscription.unsubscribe();
    }
}
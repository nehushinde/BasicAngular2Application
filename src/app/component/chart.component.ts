import { Component} from '@angular/core';
@Component({
    selector:'app-charts',
    templateUrl:'../view/chart.component.html',
    styleUrls:['../app.component.css']
})
export class ChartsComponent{
    public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData:number[] = [300, 500, 100];
    public pieChartType:string = 'pie';
   
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }
}
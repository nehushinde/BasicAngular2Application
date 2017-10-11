import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { AppComponent } from './component/app.component';
import { AddsComponent } from './component/adds.component';
import { GalleryComponent } from './component/gallery.component';
import { DetailComponent } from './component/detail.component'; 
import { HomeComponent } from './component/home.component';
import { RouteLinkComponent } from './component/routelink.component';
import { FormComponent } from './component/rform.component';
import { TDFormComponent } from './component/tdform.component';
import { HttpService } from './service/http.service';
import { HttpComponent } from './component/httpData.component';
import { PipesComponent } from './component/pipes.component';
import { ChartsComponent } from './component/chart.component';
import { ChartInfoComponent } from './component/chartInfo.component';
import { PieChartComponent } from './component/pieChart.component';

const appRoutes: Routes=[
  { path: '' ,component:HomeComponent },
  { path: 'gallery' ,component:GalleryComponent },
  { path: 'adds' ,component:AddsComponent },
  { path: 'details' ,component:DetailComponent },
  { path: 'temp-Driven' ,component:TDFormComponent },
  { path: 'reactive' ,component:FormComponent },
  { path: 'http' ,component:HttpComponent },
  { path: 'pipes' ,component:PipesComponent },
  { path: 'chart' ,component:PieChartComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    AddsComponent,
    GalleryComponent,
    DetailComponent,
    HomeComponent,
    RouteLinkComponent,
    FormComponent,
    TDFormComponent,
    HttpComponent,
    PipesComponent,
    ChartsComponent,
    ChartInfoComponent,
    PieChartComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

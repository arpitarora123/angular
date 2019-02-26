import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { HttpClientModule } from '@angular/common/http';

const route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view/:name', component: HomeViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

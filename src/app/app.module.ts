import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopularComponent } from './popular/popular.component';
import { PopularService } from './services/popular.service';
import { TodayService } from './services/today.service';
import { EntryService } from './services/entry.service';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { TodayComponent } from './today/today.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EntryComponent } from './entry/entry.component';

const appRoutes: Routes = [
  { path: 'popular', component: PopularComponent },
  { path: 'today',      component: TodayComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    TodayComponent,
    NavbarComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PopularService,TodayService,EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

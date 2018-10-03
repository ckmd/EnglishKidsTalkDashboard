import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
// import { HeroSearchComponent } from './hero-search/hero-search.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
//import { QuestionDifficultyComponent } from './question-difficulty/question-difficulty.component';
import { ItemsService } from './service/items.service';

@NgModule({
  providers:[
    ItemsService
  ],
  declarations: [
    AppComponent,
    // HeroesComponent,
    // HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    // HeroSearchComponent,
    UsersComponent,
    UserDetailComponent,
    ItemsComponent,
    ItemDetailComponent,
//    QuestionDifficultyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
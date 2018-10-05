import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsService } from './service/items.service';

import { UserShowComponent } from './user/user-show/user-show.component';
import { UserService } from './service/user.service';

import { QuestionDifficultyComponent } from './question-difficulty/question-difficulty.component';
import { QuestionDifficultyService } from './service/questiondifficulty.service';

import { QuestionCategoryComponent } from './question-category/question-category.component';
import { QuestioncategoryService } from './service/questioncategory.service';

import { LearningTopicShowComponent } from './learning-topic/learning-topic-show/learning-topic-show.component';
import { LearningtopicService } from './service/learningtopic.service';
import { LearningItemShowComponent } from './learning-item/learning-item-show/learning-item-show.component';
import { QuestionDifficultyCreateComponent } from './question-difficulty-create/question-difficulty-create.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';

@NgModule({
  providers:[
    ItemsService,
    UserService,
    QuestionDifficultyService,
    QuestioncategoryService,
    LearningtopicService,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    UserDetailComponent,
    ItemsComponent,
    ItemDetailComponent,
    UserShowComponent,
    QuestionDifficultyComponent,
    QuestionCategoryComponent,
    LearningTopicShowComponent,
    LearningItemShowComponent,
    QuestionDifficultyCreateComponent,
    ItemCreateComponent,
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
// HttpClientInMemoryWebApiModule.forRoot(
//   InMemoryDataService, { dataEncapsulation: false }
// )
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
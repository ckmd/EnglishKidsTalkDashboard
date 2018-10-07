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
import { QuestionDifficultyDetailComponent } from './question-difficulty-detail/question-difficulty-detail.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ChallengeIndexComponent } from './challenge/challenge-index/challenge-index.component';
import { ChallengeService } from './service/challenge.service';
import { ChallengeDetailComponent } from './challenge/challenge-detail/challenge-detail.component';
import { ChallengeCreateComponent } from './challenge/challenge-create/challenge-create.component';
import { LearningItemIndexComponent } from './learning-item/learning-item-index/learning-item-index.component';
import { LearningItemDetailComponent } from './learning-item/learning-item-detail/learning-item-detail.component';
import { LearningItemCreateComponent } from './learning-item/learning-item-create/learning-item-create.component';
import { LearningItemUpdateComponent } from './learning-item/learning-item-update/learning-item-update.component';

@NgModule({
  providers:[
    ItemsService,
    UserService,
    QuestionDifficultyService,
    QuestioncategoryService,
    LearningtopicService,
    ChallengeService,
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
    QuestionDifficultyDetailComponent,
    ItemCreateComponent,
    ChallengeIndexComponent,
    ChallengeDetailComponent,
    ChallengeCreateComponent,
    LearningItemIndexComponent,
    LearningItemDetailComponent,
    LearningItemCreateComponent,
    LearningItemUpdateComponent,
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
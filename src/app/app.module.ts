import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule} from '@angular/material';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
// import { InMemoryDataService }  from './in-memory-data.service';
import { ItemsComponent } from './item/items/items.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemsService } from './service/items.service';

import { UserShowComponent } from './user/user-show/user-show.component';
import { UserService } from './service/user.service';

import { QuestionDifficultyComponent } from './question-difficulty/question-difficulty-index/question-difficulty.component';
import { QuestionDifficultyService } from './service/questiondifficulty.service';

import { QuestionCategoryComponent } from './question-category/question-category-index/question-category.component';
import { QuestioncategoryService } from './service/questioncategory.service';

import { LearningTopicShowComponent } from './learning-topic/learning-topic-show/learning-topic-show.component';
import { LearningtopicService } from './service/learningtopic.service';
import { LearningItemShowComponent } from './learning-item/learning-item-show/learning-item-show.component';

import { QuestionDifficultyCreateComponent } from './question-difficulty/question-difficulty-create/question-difficulty-create.component';
import { QuestionDifficultyDetailComponent } from './question-difficulty/question-difficulty-detail/question-difficulty-detail.component';

import { ItemCreateComponent } from './item/item-create/item-create.component';

import { ChallengeIndexComponent } from './challenge/challenge-index/challenge-index.component';
import { ChallengeService } from './service/challenge.service';
import { ChallengeDetailComponent } from './challenge/challenge-detail/challenge-detail.component';
import { ChallengeCreateComponent } from './challenge/challenge-create/challenge-create.component';

import { LearningItemIndexComponent } from './learning-item/learning-item-index/learning-item-index.component';
import { LearningItemDetailComponent } from './learning-item/learning-item-detail/learning-item-detail.component';
import { LearningItemCreateComponent } from './learning-item/learning-item-create/learning-item-create.component';
import { LearningItemUpdateComponent } from './learning-item/learning-item-update/learning-item-update.component';
import { LearningitemService } from './service/learningitem.service';

import { QuestionCategoryCreateComponent } from './question-category/question-category-create/question-category-create.component';
import { QuestionCategoryDetailComponent } from './question-category/question-category-detail/question-category-detail.component';

import { LearningTopicCreateComponent } from './learning-topic/learning-topic-create/learning-topic-create.component';
import { LearningTopicDetailComponent } from './learning-topic/learning-topic-detail/learning-topic-detail.component';

import { LoginComponent } from './login/login.component';

import { AnswerCreateComponent } from './answer/answer-create/answer-create.component';
import { AnswerShowComponent } from './answer/answer-show/answer-show.component';
import { AnswerUpdateComponent } from './answer/answer-update/answer-update.component';
import { HomeComponent } from './home/home.component';
import { ItemCategoryIndexComponent } from './item-category/item-category-index/item-category-index.component';
import { ItemCategoryCreateComponent } from './item-category/item-category-create/item-category-create.component';
import { ItemCategoryDetailComponent } from './item-category/item-category-detail/item-category-detail.component';
import { LoginService } from './service/login.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './service/token-interceptor.service';

@NgModule({
  providers:[
    ItemsService,
    UserService,
    QuestionDifficultyService,
    QuestioncategoryService,
    LearningtopicService,
    ChallengeService,
    LearningitemService,
    LoginService,
    AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    }
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
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
    QuestionCategoryCreateComponent,
    QuestionCategoryDetailComponent,
    LearningTopicCreateComponent,
    LearningTopicDetailComponent,
    LoginComponent,
    AnswerCreateComponent,
    AnswerShowComponent,
    AnswerUpdateComponent,
    HomeComponent,
    ItemCategoryIndexComponent,
    ItemCategoryCreateComponent,
    ItemCategoryDetailComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule

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
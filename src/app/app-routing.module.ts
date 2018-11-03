import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserShowComponent }      from './user/user-show/user-show.component';

import { QuestionDifficultyComponent }      from './question-difficulty/question-difficulty-index/question-difficulty.component';
import { QuestionDifficultyCreateComponent }      from './question-difficulty/question-difficulty-create/question-difficulty-create.component';
import { QuestionDifficultyDetailComponent }      from './question-difficulty/question-difficulty-detail/question-difficulty-detail.component';

import { ItemCreateComponent }      from './item/item-create/item-create.component';
import { ItemsComponent }      from './item/items/items.component';
import { ItemDetailComponent }      from './item/item-detail/item-detail.component';

import { ChallengeIndexComponent } from './challenge/challenge-index/challenge-index.component';
import { ChallengeDetailComponent } from './challenge/challenge-detail/challenge-detail.component';
import { ChallengeCreateComponent } from './challenge/challenge-create/challenge-create.component';

import { LearningItemIndexComponent } from './learning-item/learning-item-index/learning-item-index.component';
import { LearningItemDetailComponent } from './learning-item/learning-item-detail/learning-item-detail.component';
import { LearningItemCreateComponent } from './learning-item/learning-item-create/learning-item-create.component';
import { LearningItemUpdateComponent } from './learning-item/learning-item-update/learning-item-update.component';

import { QuestionCategoryComponent }      from './question-category/question-category-index/question-category.component';
import { QuestionCategoryCreateComponent } from './question-category/question-category-create/question-category-create.component';
import { QuestionCategoryDetailComponent } from './question-category/question-category-detail/question-category-detail.component';

import { LearningTopicShowComponent }      from './learning-topic/learning-topic-show/learning-topic-show.component';
import { LearningTopicCreateComponent } from './learning-topic/learning-topic-create/learning-topic-create.component';
import { LearningTopicDetailComponent } from './learning-topic/learning-topic-detail/learning-topic-detail.component';

import { AnswerCreateComponent } from './answer/answer-create/answer-create.component';
import { AnswerShowComponent } from './answer/answer-show/answer-show.component';
import { AnswerUpdateComponent } from './answer/answer-update/answer-update.component';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
// { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // untuk menambahkan default routing pada saat dibuka pertama kali
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'users', 
    component: UserShowComponent,
    canActivate: [AuthGuard]
  },

  { 
    path: 'items', 
    component: ItemsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'items-create', 
    component: ItemCreateComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'items/:id', 
    component: ItemDetailComponent,
    canActivate: [AuthGuard]
  },

  { 
    path: 'question-difficulties',
    component: QuestionDifficultyComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'question-difficulties-create', 
    component: QuestionDifficultyCreateComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'question-difficulties/:id', 
    component: QuestionDifficultyDetailComponent,
    canActivate: [AuthGuard]
  },

  { 
    path: 'challenges', 
    component: ChallengeIndexComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'challenges/:id', 
    component: ChallengeDetailComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'challenges-create', 
    component: ChallengeCreateComponent,
    canActivate: [AuthGuard]
  },

  { 
    path: 'learning-items-create', 
    component: LearningItemCreateComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'learning-items', 
    component: LearningItemIndexComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'learning-items/:id', 
    component: LearningItemDetailComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'learning-items-update', 
    component: LearningItemUpdateComponent,
    canActivate: [AuthGuard]
  },

  { 
    path: 'question-categories', 
    component: QuestionCategoryComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'question-categories-create', 
    component: QuestionCategoryCreateComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'question-categories/:id', 
    component: QuestionCategoryDetailComponent,
    canActivate: [AuthGuard]
  },

  { 
    path: 'learning-topics', 
    component: LearningTopicShowComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'learning-topics-create', 
    component: LearningTopicCreateComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'learning-topics/:id', 
    component: LearningTopicDetailComponent,
    canActivate: [AuthGuard]
  },

  { 
    path: 'answers', 
    component: AnswerShowComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'answers-create', 
    component: AnswerCreateComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'answers/:id', 
    component: AnswerUpdateComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
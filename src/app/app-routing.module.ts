import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { ItemsComponent }      from './items/items.component';
import { UserDetailComponent }      from './user-detail/user-detail.component';
import { ItemDetailComponent }      from './item-detail/item-detail.component';
import { UserShowComponent }      from './user/user-show/user-show.component';
import { QuestionDifficultyComponent }      from './question-difficulty/question-difficulty.component';
import { QuestionDifficultyCreateComponent }      from './question-difficulty-create/question-difficulty-create.component';
import { QuestionDifficultyDetailComponent }      from './question-difficulty-detail/question-difficulty-detail.component';
import { LearningTopicShowComponent }      from './learning-topic/learning-topic-show/learning-topic-show.component';
import { ItemCreateComponent }      from './item/item-create/item-create.component';
import { ChallengeIndexComponent } from './challenge/challenge-index/challenge-index.component';
import { ChallengeDetailComponent } from './challenge/challenge-detail/challenge-detail.component';
import { ChallengeCreateComponent } from './challenge/challenge-create/challenge-create.component';

import { LearningItemIndexComponent } from './learning-item/learning-item-index/learning-item-index.component';
import { LearningItemDetailComponent } from './learning-item/learning-item-detail/learning-item-detail.component';
import { LearningItemCreateComponent } from './learning-item/learning-item-create/learning-item-create.component';
import { LearningItemUpdateComponent } from './learning-item/learning-item-update/learning-item-update.component';

import { QuestionCategoryComponent }      from './question-category/question-category.component';
import { QuestionCategoryCreateComponent } from './question-category/question-category-create/question-category-create.component';
import { QuestionCategoryDetailComponent } from './question-category/question-category-detail/question-category-detail.component';

const routes: Routes = [
// { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // untuk menambahkan default routing pada saat dibuka pertama kali
  { path: 'items', component: ItemsComponent },
  { path: 'users', component: UserShowComponent },
  { path: 'itemdetail/:id', component: ItemDetailComponent },
  { path: 'userdetail/:id', component: UserDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'question-difficulties', component: QuestionDifficultyComponent },
  { path: 'question-difficulties/create', component: QuestionDifficultyCreateComponent },
  { path: 'question-difficulties/:id', component: QuestionDifficultyDetailComponent },
  { path: 'learning-topics', component: LearningTopicShowComponent },
  { path: 'items/create', component: ItemCreateComponent },
  { path: 'challenges', component: ChallengeIndexComponent },
  { path: 'challenges/:id', component: ChallengeDetailComponent },
  { path: 'challenges-create', component: ChallengeCreateComponent },

  { path: 'learning-items-create', component: LearningItemCreateComponent },
  { path: 'learning-items', component: LearningItemIndexComponent },
  { path: 'learning-items/:id', component: LearningItemDetailComponent },
  { path: 'learning-items-update', component: LearningItemUpdateComponent },

  { path: 'question-categories', component: QuestionCategoryComponent },
  { path: 'question-categories-create', component: QuestionCategoryCreateComponent },
  { path: 'question-categories/:id', component: QuestionCategoryDetailComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { ItemsComponent }      from './items/items.component';
import { UserDetailComponent }      from './user-detail/user-detail.component';
import { ItemDetailComponent }      from './item-detail/item-detail.component';
import { UserShowComponent }      from './user/user-show/user-show.component';
import { QuestionDifficultyComponent }      from './question-difficulty/question-difficulty.component';
import { QuestionDifficultyCreateComponent }      from './question-difficulty-create/question-difficulty-create.component';
import { QuestionCategoryComponent }      from './question-category/question-category.component';
import { LearningTopicShowComponent }      from './learning-topic/learning-topic-show/learning-topic-show.component';
import { ItemCreateComponent }      from './item/item-create/item-create.component';

const routes: Routes = [
// { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // untuk menambahkan default routing pada saat dibuka pertama kali
  { path: 'items', component: ItemsComponent },
  { path: 'users', component: UserShowComponent },
  { path: 'itemdetail/:id', component: ItemDetailComponent },
  { path: 'userdetail/:id', component: UserDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'question-difficulties', component: QuestionDifficultyComponent },
  { path: 'question-difficulties/create', component: QuestionDifficultyCreateComponent },
  { path: 'question-categories', component: QuestionCategoryComponent },
  { path: 'learning-topics', component: LearningTopicShowComponent },
  { path: 'items/create', component: ItemCreateComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
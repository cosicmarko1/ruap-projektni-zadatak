import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationComponent } from './classification/classification.component';

const routes: Routes = [
  { path: '', redirectTo: '/classification', pathMatch: 'full' },
  { path: 'classification', component: ClassificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

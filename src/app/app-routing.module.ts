import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CongratulationComponent } from './components/congratulation/congratulation.component';
import { MultiFormComponent } from './components/multi-form/multi-form.component';

const routes: Routes = [
  {
    path: '', component: MultiFormComponent,
  },
  {
    path: 'validate', component: CongratulationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiFormComponent } from './components/multi-form/multi-form.component';
import { CongratulationComponent } from './components/congratulation/congratulation.component';

@NgModule({
  declarations: [AppComponent, MultiFormComponent, CongratulationComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

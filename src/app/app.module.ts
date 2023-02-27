import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassificationComponent } from './classification/classification.component';
import { MobileService } from './mobile.service';
import { BackendService } from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    ClassificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MobileService, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

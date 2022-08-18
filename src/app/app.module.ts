import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Test2Component } from './Test2/Test2.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './route.routing';
import { HighlightbcDirective } from './highlightbc.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextChangePipe } from './text-change.pipe';
import { TestServerComponent } from './test-server/test-server.component';
import { ChildComponent } from './child/child.component';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent,
      Test2Component,
      HighlightbcDirective,
      TextChangePipe,
      TestServerComponent,
      ChildComponent,
      GrandchildComponent,
      TransferComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

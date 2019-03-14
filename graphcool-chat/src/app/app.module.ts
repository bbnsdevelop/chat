import { NgModule } from '@angular/core';
import { MatToolbarModule, MatListModule } from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { ApolloConfigModule } from './apollo-config.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    ApolloConfigModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

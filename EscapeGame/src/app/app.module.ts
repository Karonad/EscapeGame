import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuzzleCalculationComponent } from './puzzle/puzzle-calculation/puzzle-calculation.component';
import { PuzzleSquareComponent } from './puzzle/puzzle-square/puzzle-square.component';
import { PuzzleJarComponent } from './puzzle/puzzle-jar/puzzle-jar.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleCalculationComponent,
    PuzzleSquareComponent,
    PuzzleJarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

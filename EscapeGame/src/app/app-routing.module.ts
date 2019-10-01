import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuzzleCalculationComponent } from './puzzle/puzzle-calculation/puzzle-calculation.component';
import { PuzzleJarComponent } from './puzzle/puzzle-jar/puzzle-jar.component';
import { PuzzleSquareComponent } from './puzzle/puzzle-square/puzzle-square.component';


const routes: Routes = [
  { path: 'puzzle/puzzle-calculation', component: PuzzleCalculationComponent },
  { path: 'puzzle/puzzle-square', component: PuzzleSquareComponent },
  { path: 'puzzle/puzzle-jar', component: PuzzleJarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

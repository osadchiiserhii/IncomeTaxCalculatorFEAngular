import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
const routes: Routes = [
  { path: 'tax-calculator', component: TaxCalculatorComponent },
  { path: '', redirectTo: '/tax-calculator', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { TaxCalculatorService } from '../services/tax-calculator.service';
import { Salary } from '../models/salary.model';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.scss']
})
export class TaxCalculatorComponent {
  grossAnnualSalary: number;
  result: Salary | undefined;

  constructor(private taxCalculatorService: TaxCalculatorService) {
    this.grossAnnualSalary = 0.00;
    this.result = undefined;
  }

  onCalculateButtonPressed() {
    this.taxCalculatorService
      .calculateTax(this.grossAnnualSalary)
      .subscribe(
        (result) => {
          this.result = result;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}

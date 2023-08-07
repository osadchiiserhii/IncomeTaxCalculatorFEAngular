import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salary } from '../models/salary.model';

@Injectable({
  providedIn: 'root',
})
export class TaxCalculatorService {
  private baseUrl = 'https://localhost:7048';

  constructor(private http: HttpClient) {}

  calculateTax(grossAnnualSalary: number): Observable<Salary> {
    return this.http.post<Salary>(
      `${this.baseUrl}/TaxCalculator`,
      { grossAnnualSalary }
    );
  }
}
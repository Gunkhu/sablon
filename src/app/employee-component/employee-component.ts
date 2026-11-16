import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpfilterPipe } from '../shared/pipe/empfilter-pipe';
import { NameFilterPipe } from '../shared/pipe/name-filter-pipe';

@Component({
  imports: [FormsModule,EmpfilterPipe,NameFilterPipe],
  selector: 'app-employee-component',
  styleUrl: './employee-component.css',
  templateUrl: './employee-component.html',
})
export class EmployeeComponent {

    actCity!: string;
    actName!: string;

    employees = [
    {id: 1, name: "Peres Béla", city: "Pécs", salary:395 },
    {id: 2, name: "Energia Árpád", city: "Szeged", salary: 397 },
    {id: 3, name: "Gyenge Valér", city: "Miskolc", salary: 398 },
    {id: 4, name: "Pásztó László", city: "Pécs", salary: 399 },
    {id: 5, name: "Trombita Béla", city: "Debrecen", salary: 400 },
    {id: 6, name: "Rendes Lajos", city: "Szeged", salary: 401 },
 
  ];

  isFilterVisible = false;

  toogleFilter(){
    this.isFilterVisible = !this.isFilterVisible
    if(this.isFilterVisible == false){
      this.actName = ''
      this.actCity = ''
    }
  }
}

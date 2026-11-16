import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter',
})
export class NameFilterPipe implements PipeTransform {
  transform(employees:any[], filter: string): any {
    if(!employees || !filter){
      return employees;
    }

    return employees.filter(emp =>
      emp.name.toLowerCase().includes(filter.toLowerCase())
    )

  }
}

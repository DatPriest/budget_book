import { Pipe, PipeTransform } from '@angular/core';
import { ExpensesModule } from 'src/app/model/expenses/expenses.module';

@Pipe({
  name: 'expensesFilter'
})
export class ExpensesFilterPipe implements PipeTransform {

  transform(expenses: ExpensesModule[], searchTerm: string): ExpensesModule[] {
    if (!expenses || !searchTerm) {
      return expenses;
    }

    console.warn(searchTerm);

    var amount = "[0-9]";
    if (searchTerm.match(amount)){
      return expenses.filter(expenses => expenses.amount.toFixed().indexOf(searchTerm.toLowerCase()) !== -1);
    } else {
      return expenses.filter(expenses => expenses.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
  }
}

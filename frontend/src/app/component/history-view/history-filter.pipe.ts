import { Pipe, PipeTransform } from '@angular/core';
import { HistoryModule } from 'src/app/model/history/history.module';

@Pipe({
  name: 'historyFilter'
})
export class HistoryFilterPipe implements PipeTransform {

  transform(history: HistoryModule[], searchTerm: string): HistoryModule[] {
    if (!history || !searchTerm) {
      return history;
    }

    return history.filter(history => history.actionName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}

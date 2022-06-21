import { ExpensesFilterPipe } from './expenses-filter.pipe';

describe('ExpensesFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ExpensesFilterPipe();
    expect(pipe).toBeTruthy();
  });
});

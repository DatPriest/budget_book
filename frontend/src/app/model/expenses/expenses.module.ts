export class ExpensesModule {
  constructor (
    public expenseId: number,
    public groupId: number,
    public userId: number,
    public amount: any,
    public categoryId: number,
    public date_Created: string,
    public description: string,
  ) { }
}

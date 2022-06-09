export class NewExpensesModule {
  constructor (
    public groupId: number,
    public categoryId: number,
    public amount: number,
    public date: string
  ) { }
}

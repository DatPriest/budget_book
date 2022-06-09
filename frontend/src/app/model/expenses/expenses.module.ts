export class ExpensesModule {
  constructor (
    public groupId: number,
    public subject: string,
    public amount: string,
    public date: string,
  ) { }
}

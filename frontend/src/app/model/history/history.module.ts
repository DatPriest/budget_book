export class HistoryModule {
  constructor(
    public id: number,
    public actionName: string,
    public additionalInformation: string,
    public date_Created: string,
    public date_Changed: string,
    public groupId: number
  ) { }
}

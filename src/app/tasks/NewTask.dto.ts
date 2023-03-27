// DTO
// Data Transform Object
// Its a bridge from transfer info from html to ts
export class NewTask {
  constructor(public title: string = '', public date: Date = new Date()) {}
}

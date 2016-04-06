export class todo{

  completed: Boolean;

  constructor(title: String){
    this._title = title.trim();
  }

  private _title: String;
  get title() {
    return this._title;
  }
  set title(value: String){
    this._title = value.trim();
    this.completed = false;
  }
}
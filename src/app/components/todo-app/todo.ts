export class todo{

  editing: Boolean;

  constructor(title: String){
    this._title = title.trim();
    this._completed = false;
    this.editing = false;
  }

  private _title: String;
  get title() {
    return this._title;
  }
  set title(value: String){
    this._title = value.trim();
  }
  
  private _completed: Boolean;
  get completed() {
    return this._completed;
  }
  set completed(value: Boolean){
    this._completed = value;
  } 
}
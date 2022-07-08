import { LightningElement, api } from "lwc";

export default class NotesList extends LightningElement {
  @api notes;
  index = 0;

  get note() {
    return (this.notes ? this.notes[this.index] : null);
  }

  getNextNote() {
    this.index++;
  }

  getPreviousNote() {
    this.index--;
  }

  size() {
    return (this.notes ? this.notes.length : 0);
  }

  get noPreviousNote() {
    return this.index === 0;
  }

  get noNextNote() {
    return this.index === (this.size() - 1);
  }
  
  get noteExists() {
    return this.note != null;
  }
}

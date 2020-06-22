import { LightningElement, api } from "lwc";

export default class NotesList extends LightningElement {
  @api notes;
  note;
  index = -1;

  connectedCallback() {
    // initialize component
    this.getNextNote();
    console.log("notes :" + JSON.stringify(this.notes));
  }

  getNextNote() {
    this.note = this.notes[++this.index];
  }

  getPreviousNote() {
    this.note = this.notes[--this.index];
  }

  size() {
    return this.notes.length;
  }

  get noPreviousNote() {
    return this.index === 0;
  }

  get noNextNote() {
    return this.index === this.size() - 1;
  }
}

import { LightningElement } from "lwc";
import { notesGenerator, getNotes } from "./notesIterator";

export default class TestNotes extends LightningElement {
  notesGenerator = notesGenerator();
  notes = getNotes();
}

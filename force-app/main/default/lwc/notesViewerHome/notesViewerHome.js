import { LightningElement } from "lwc";
import { notesGenerator, getNotes } from "./notesIterator";

export default class NotesViewerHome extends LightningElement {
  notesGenerator = notesGenerator();
  notes = getNotes();
}

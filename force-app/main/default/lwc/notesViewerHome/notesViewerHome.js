import { LightningElement, wire } from "lwc";
import { notesGenerator } from "./notesIterator";
import getAllNotes from "@salesforce/apex/NotesController.getNotes";

export default class NotesViewerHome extends LightningElement {
  notesGenerator = notesGenerator();
  notes;

  @wire(getAllNotes)
	getNotes({error, data}) {
		if (data) {
			this.notes = data;
			this.error = undefined;
		} else if (error) {
			this.error = error;
			this.notes = undefined;
		}
	}
}

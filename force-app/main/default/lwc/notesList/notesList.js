import { LightningElement, api } from 'lwc';

export default class NotesList extends LightningElement {
    @api notesiterator;
    note;
    done;

    connectedCallback() {
        // initialize component
        this.note = this.notesiterator.next().value;
    }

    getNextNote() {
        if(this.done)
            return;
        const nextItem = this.notesiterator.next();
        this.note = nextItem.value;
        this.done = nextItem.done;
        console.log(`${this.done}`);
    }
}
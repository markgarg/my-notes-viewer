import { LightningElement, api } from 'lwc';

export default class NotesList extends LightningElement {
    @api notes;
}
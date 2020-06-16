import { LightningElement } from 'lwc';
import { notesGenerator } from './notesIterator';

export default class TestNotes extends LightningElement {
    notesGenerator = notesGenerator();
}
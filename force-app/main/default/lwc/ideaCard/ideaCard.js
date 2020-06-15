import { LightningElement, api } from 'lwc';

export default class IdeaCard extends LightningElement {
    @api tags;
    @api description;
}
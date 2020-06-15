import { LightningElement } from 'lwc';
import { IdeaCard } from 'c/ideaCard';

export default class TestIdeas extends LightningElement {
    description = "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.";
    tags = [
        {
            "id": 1,
            "name": "quotes"
        },
        {
            "id": 2,
            "name": "life"
        },
    ]
}
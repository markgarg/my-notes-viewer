const notes = [
  {
    description:
      "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived."
  },
  {
    description: "test note"
  },
  {
    description: "another line from the note"
  }
];

export function* notesGenerator() {
  for (let note of notes) {
    console.log(`note : ${note}`);
    yield note;
  }
}

export function getNotes() {
  return notes;
}

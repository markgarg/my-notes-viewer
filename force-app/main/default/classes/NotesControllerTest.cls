@isTest
private with sharing class NotesControllerTest {
    @isTest
    static void shouldReturnAllNotes() {
        Note__c n1 = new Note__c(Text__c = 'test 1');
        Note__c n2 = new Note__c(Text__c = 'test 2');
        Note__c n3 = new Note__c(Text__c = 'test 3');
        insert new List<Note__c>{n1, n2, n3};

        List<Note__c> allNotes = NotesController.getNotes();

        System.assert(allNotes.size() == 3, 'all 3 notes should be returned');
    }
}

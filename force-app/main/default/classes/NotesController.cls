// without sharing so external users can also see data
public without sharing class NotesController {
  @AuraEnabled(cacheable=true)
  public static List<Note__c> getNotes() {
    List<Note__c> notes = [SELECT Id, Text__c FROM Note__c LIMIT 100];
    return notes;
  }
}

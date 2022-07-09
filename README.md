# My Notes Viewer

sfdx force:source:deploy -u <org> -p force-app -w 10
sfdx force:user:permset:assign --permsetname Edit_Note_Viewer -u <org>
sfdx force:data:tree:import -f data/Note__c.json -u <org>

Give `NotesController` access to the site guest user.
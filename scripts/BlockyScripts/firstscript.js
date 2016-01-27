/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_Console_log" id="39" inline="true" x="0" y="172"><field name="level">log</field><value name="message"><block type="text" id="54"><field name="TEXT">my message</field></block></value></block></xml>*#*#*/
(function(){ console.log('my message')})();			
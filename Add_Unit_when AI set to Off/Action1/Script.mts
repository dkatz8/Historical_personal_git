Browser("Login -").Page("Login -").Sync
Browser("Login -").Navigate "https://qa3.almoctane.com/ui/"
If Browser("Login -").Page("Login -").WebButton("CONTINUE").Exsit Then
	Reporter.ReportEvent micPass, "Add Unit ", " AUT ןד UP !"
Else
	Reporter.ReportEvent micFail, "Add Unit", "Add Unit failed!"
	ExitTest("AUT is down or not responding!")
End If

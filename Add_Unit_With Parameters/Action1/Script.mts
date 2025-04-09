Browser("Login -").Page("Login -").Sync
Browser("Login -").Navigate Parameter ("Site")
If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Exist Then
Reporter.ReportEvent micPass, "Staging Sainty test live", " Staging  is UP !"
else
	Reporter.ReportEvent micFail, "Staging Sainty test ", " Staging AUT is down or not responding" 
	ExitTest("AUT is down or not responding.")
End If

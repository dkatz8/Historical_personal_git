Browser("Login -").Page("Login -").Sync
Browser("Login -").Navigate "https://qa3.almoctane.com/ui/" @@ hightlight id_;_986284_;_script infofile_;_ZIP::ssf11.xml_;_

If Browser("Login -").Page("Login -").WebButton("CONTINUE").Exsit Then
	Reporter.ReportEvent micPass, "Add Unit ", " Tenant is Active !"
Else
	Reporter.ReportEvent micFail, "Add Unit", "Add Unit failed!"
	ExitTest("AUT is down or not responding!")
End If
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set Parameter("User_name") @@ script infofile_;_ZIP::ssf39.xml_;_
rowser("Login -").Page("Login -").WebButton("CONTINUE").Click
Browser("Login -_2").Page("Login -").WebEdit("password").Set Parameter("Password")
Browser("Login -").Page("Login -").WebButton("SIGN IN").Click
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Unit").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").WebEdit("Name").Set "Unit 1"
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").Image("user avatar").Click

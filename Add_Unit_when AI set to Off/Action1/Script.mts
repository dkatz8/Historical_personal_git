Browser("Login -").Page("Login -").Sync
Wait 5
Browser("Login -").Navigate "https://integration-branch-prod.almoctane.com/ui/?p=21003/1002#/mbt-designer/hierarchy/units" @@ hightlight id_;_986284_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set Parameter("User_name")
Wait 5
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click
Browser("Login -_2").Page("Login -").WebEdit("password").Set Parameter("Password")
Browser("Login -").Page("Login -").WebButton("SIGN IN").Click
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Unit").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").WebEdit("Name").Set "Unit 1"
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").Image("user avatar").Click
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Sign out").Click
Browser("Login -").Page("Login -").Sync
Browser("Login -").Navigate "https://integration-branch-prod.almoctane.com/error-pages/not-active.html#/fte/fte-scheduler-tests/grid" @@ hightlight id_;_986284_;_script infofile_;_ZIP::ssf11.xml_;_
If Browser("Login -").Page("Login -").WebButton("CONTINUE").Exsit Then
	Reporter.ReportEvent micPass, "Add Unit ", " Tenant is Active !"
Else
	Reporter.ReportEvent micFail, "Add Unit", "Add Unit failed!"
	ExitTest("This shared space is not active.Contact your administrator for details on when it will be available")
End If
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set Parameter("User_name")
Wait 5
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf44.xml_;_
Wait 2
Browser("Login -_2").Page("Login -").WebEdit("password").Set Parameter("Password")
Browser("Login -").Page("Login -").WebButton("SIGN IN").Click
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Unit").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").WebEdit("Name").Set "Unit 1" @@ script infofile_;_ZIP::ssf7.xml_;_
Wait 4
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").Image("user avatar").Click @@ script infofile_;_ZIP::ssf9.xml_;_
wait 3
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Sign out").Click @@ script infofile_;_ZIP::ssf39.xml_;_

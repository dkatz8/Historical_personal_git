Browser("Login -").Page("Login -").Sync
Wait 5
Browser("Login -").Navigate "https://integration-branch-prod.almoctane.com/ui/?p=21003/1002#/fte/fte-scheduler/grid" @@ hightlight id_;_986284_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set Parameter("User_name")
If Not Browser("Login -").Page("Functional Testing Model-Based").WebButton("Unit").Exist  Then 
	Reporter.ReportEvent micPass "login", " login Succeeded !"
else
	Reporter.ReportEvent micFail, "login ", "Failed site is down!"
	ExitTest("Login Failed site is down")
End If
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click
Browser("Login -_2").Page("Login -").WebEdit("password").Set Parameter("Password")
Browser("Login -").Page("Login -").WebButton("SIGN IN").Click
Browser("Login -").Navigate "https://integration-branch-prod.almoctane.com/ui/?p=21003/1002#/fte/fte-scheduler/grid"
If Browser("Login -").Page("Functional Testing Model-Based").WebButton("Unit").Exist Then
	Reporter.ReportEvent micFail, "Unit Creation", " Unit Creation Succeeded!"
else
	Reporter.ReportEvent micPass, "Unit Creation", "Unit Creation Failed no connection with Data base !"
End If
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Unit").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").WebEdit("Name").Set "Unit 1"
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").Image("user avatar").Click
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Sign out").Click @@ script infofile_;_ZIP::ssf10.xml_;_
 @@ script infofile_;_ZIP::ssf39.xml_;_

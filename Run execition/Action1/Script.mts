Browser("Login -").Page("Login -").Sync
Wait 2
Browser("Login -").Navigate "https://integration-branch-prod.almoctane.com/ui/?p=21003/1002#/fte/fte-scheduler/grid"
Browser("Login -_3").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com" @@ script infofile_;_ZIP::ssf47.xml_;_
Browser("Login -_3").Page("Login -").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf48.xml_;_
Browser("Login -_3").Page("Login -").WebEdit("password").SetSecure "67e54271ada918671efad736c4d8042d29ca0f7b8962c9fa3eddc7edb3902f49c52e" @@ script infofile_;_ZIP::ssf49.xml_;_
Browser("Login -_3").Page("Login -").WebButton("Sign in").Click @@ script infofile_;_ZIP::ssf50.xml_;_
wait 2 @@ script infofile_;_ZIP::ssf52.xml_;_
If Not Browser("Login -_3").Page("Functional Testing Model-Based").WebButton("Run Test Suite").Exist  Then 
	Reporter.ReportEvent micPass, "Run test execution", " Connection to MAS Succeeded !"
else
	Reporter.ReportEvent micFail, "Run test execution ", "Request to MAS Failed, An error occurred when trying to send HTTP request to MAS!"
	ExitTest("Request to MAS Failed, An error occurred when trying to send HTTP request to MAS")
End If @@ script infofile_;_ZIP::ssf62.xml_;_
Browser("Login -_3").Page("Functional Testing Model-Based").WebTabStrip("Details Relations Script").Select "Suite Runs" @@ script infofile_;_ZIP::ssf63.xml_;_
Browser("Login -_3").Page("Functional Testing Model-Based").WebTabStrip("Details Relations Script").Select "Report" @@ script infofile_;_ZIP::ssf65.xml_;_
Browser("Login -_3").Page("Functional Testing Model-Based").WebElement("Suite run: MBT - iterations_pa").Click @@ script infofile_;_ZIP::ssf66.xml_;_

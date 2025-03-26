Browser("Browser").Page("Page").Sync
Browser("Browser").Navigate "https://integration-branch-prod.almoctane.com/ui/?admin&p=21003/4003#/settings/workspace/users"
Browser("Login -").Page("Login -").WebElement("Back > Sign in with corporate").Click @@ script infofile_;_ZIP::ssf71.xml_;_
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com" @@ script infofile_;_ZIP::ssf72.xml_;_
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Login -").Page("Login -").WebEdit("password").SetSecure "6790f46bc866c54a09d3f82343aa44e3aa071a6085d7d0269e39164183603155154e" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Login -").Page("Login -").WebButton("SIGN IN").Click
Browser("Browser").Page("Workspaces - Core Software").WebElement("WebElement_4").Click @@ script infofile_;_ZIP::ssf160.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("User").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "d" @@ script infofile_;_ZIP::ssf76.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Last name").Set "k" @@ script infofile_;_ZIP::ssf77.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Email").Set "dkatz@opentext.com" @@ script infofile_;_ZIP::ssf78.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf79.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebList("Roles").Click @@ script infofile_;_ZIP::ssf80.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Phone").Set "123" @@ script infofile_;_ZIP::ssf81.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebCheckBox("Workspace Admin").Set "ON" @@ script infofile_;_ZIP::ssf82.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("OK").Click @@ script infofile_;_ZIP::ssf83.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf84.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "M" @@ script infofile_;_ZIP::ssf85.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Last name").Set "R" @@ script infofile_;_ZIP::ssf86.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Email").Set "myohayrafalo@opentext.com" @@ script infofile_;_ZIP::ssf87.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Phone").Set "456" @@ script infofile_;_ZIP::ssf88.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf89.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "R" @@ script infofile_;_ZIP::ssf90.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Last name").Set "K" @@ script infofile_;_ZIP::ssf91.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Email").Set "rkarat@opentext.com" @@ script infofile_;_ZIP::ssf92.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Phone").Set "987" @@ script infofile_;_ZIP::ssf93.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf94.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "T" @@ script infofile_;_ZIP::ssf95.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Last name").Set "F" @@ script infofile_;_ZIP::ssf96.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Email").Set "tfarchi@opentext.com" @@ script infofile_;_ZIP::ssf97.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Phone").Set "741" @@ script infofile_;_ZIP::ssf98.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add      Add").Click
Browser("Browser").Page("Workspaces - Core Software").WebElement("DevOps").Click @@ script infofile_;_ZIP::ssf130.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebElement("Test Runners").Click
If.Browser("Browser").Page("Workspaces - Core Software").WebElement("Codeless Runner").Exist(15) Then
     Reporter.ReportEvent micPass, "Codeless runner exist successful","Codeless runner  exist   successful"
Else
     Reporter.ReportEvent micFail, "Codeless runner exist  fail","Codeless runner exist failed"
End If @@ script infofile_;_ZIP::ssf159.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("More").Click @@ script infofile_;_ZIP::ssf132.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Cloud Runner").Click @@ script infofile_;_ZIP::ssf133.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebList("WebList").Click @@ script infofile_;_ZIP::ssf134.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("WebEdit").Set "UFT" @@ script infofile_;_ZIP::ssf135.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebCheckBox("UFT").Set "ON" @@ script infofile_;_ZIP::ssf136.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("WebEdit_2").Set "https://github.com/mbtuser/mbtuser.git" @@ script infofile_;_ZIP::ssf137.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf138.xml_;_
wait 1 
Browser("Browser").Page("Workspaces - Core Software").WebButton("Test Connection").Click
If.Browser("Browser").Page("Workspaces - Core Software").WebElement("Connection succeeded with").Exist(15) Then
     Reporter.ReportEvent micPass, "UFT connection to the git  successful","UFT connection to the git   successful"
Else
     Reporter.ReportEvent micFail, "UFT connection to the git fail","UFT connection to the git failed"
End If
Browser("Browser").Page("Workspaces - Core Software").WebButton("Save").Click @@ script infofile_;_ZIP::ssf140.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Cloud Runner").Click @@ script infofile_;_ZIP::ssf141.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebList("WebList").Click @@ script infofile_;_ZIP::ssf142.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("WebEdit").Set "MBT" @@ script infofile_;_ZIP::ssf143.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebCheckBox("MBT (Open Text Functional").Set "ON" @@ script infofile_;_ZIP::ssf144.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("WebEdit_2").Set "https://github.com/mbtuser/mbtuser.git" @@ script infofile_;_ZIP::ssf145.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf146.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf147.xml_;_
If.Browser("Browser").Page("Workspaces - Core Software").WebElement("Connection succeeded with").Exist(15) Then
     Reporter.ReportEvent micPass, "UFT connection to the git  successful","UFT connection to the git   successful"
Else
     Reporter.ReportEvent micFail, "UFT connection to the git fail","UFT connection to the git failed"
End If
Browser("Browser").Page("Workspaces - Core Software").WebButton("Save").Click
Browser("Browser").Page("Workspaces - Core Software").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf100.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf101.xml_;_
Browser("Browser").Page("Workspaces - Core Software").Link("Model-Based Testing").Click @@ script infofile_;_ZIP::ssf102.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add item").Click @@ script infofile_;_ZIP::ssf103.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "Model folder" @@ script infofile_;_ZIP::ssf104.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add & Edit      Add &").Click @@ script infofile_;_ZIP::ssf105.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Model").Click @@ script infofile_;_ZIP::ssf106.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "Model" @@ script infofile_;_ZIP::ssf107.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add      Add").Click
If.Browser("Browser").Page("Workspaces - Core Software").WebElement("Model").Exist(15) Then
     Reporter.ReportEvent micPass, "MBT connection to the git  successful","MBT connection to the git   successful"
Else
     Reporter.ReportEvent micFail, "MBT connection to the git fail","MBT connection to the git failed"
End If
Browser("Browser").Page("Workspaces - Core Software").WebTabStrip("Details Models Units").Select "Units" @@ script infofile_;_ZIP::ssf109.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Unit").Click @@ script infofile_;_ZIP::ssf110.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "Unit" @@ script infofile_;_ZIP::ssf111.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf112.xml_;_
If.Browser("Browser").Page("Workspaces - Core Software").WebElement("Unit").Exist(15) Then
     Reporter.ReportEvent micPass, "Unit  successful","Unit   successful"
Else
     Reporter.ReportEvent micFail, "Unit fail","Unit failed"
End If
Browser("Browser").Page("Workspaces - Core Software").WebButton("WebButton_2").Click @@ script infofile_;_ZIP::ssf113.xml_;_
Browser("Browser").Page("Workspaces - Core Software").Link("Issues").Click @@ script infofile_;_ZIP::ssf114.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Defect").Click @@ script infofile_;_ZIP::ssf115.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Name").Set "Defect" @@ script infofile_;_ZIP::ssf116.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebList("Severity").Click @@ script infofile_;_ZIP::ssf117.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Description textbox").Set "new defect" @@ script infofile_;_ZIP::ssf118.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebCheckBox("Medium").Set "ON" @@ script infofile_;_ZIP::ssf119.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf120.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("WebButton_3").Click @@ script infofile_;_ZIP::ssf121.xml_;_
Browser("Browser").Page("Workspaces - Core Software").Link("Quality").Click @@ script infofile_;_ZIP::ssf122.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebTabStrip("Overview Application Modules").Select "Tests" @@ script infofile_;_ZIP::ssf123.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Manual Test").Click @@ script infofile_;_ZIP::ssf124.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Name").Set "Manual test" @@ script infofile_;_ZIP::ssf125.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Description textbox").Set "New manual text" @@ script infofile_;_ZIP::ssf126.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add      Add").Click
If.Browser("Browser").Page("Workspaces - Core Software").WebElement("Manual test").Exist(15) Then
     Reporter.ReportEvent micPass, "Manual test  successful","Manual test   successful"
Else
     Reporter.ReportEvent micFail, "Manual test fail","Manual test failed"
End If @@ script infofile_;_ZIP::ssf152.xml_;_
Browser("Browser").Page("Workspaces - Core Software").Image("user avatar").Click @@ script infofile_;_ZIP::ssf128.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebButton("Sign out").Click @@ script infofile_;_ZIP::ssf129.xml_;_

 @@ script infofile_;_ZIP::ssf158.xml_;_

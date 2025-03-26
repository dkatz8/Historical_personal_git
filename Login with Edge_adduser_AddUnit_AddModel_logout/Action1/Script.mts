Browser("Login -").Page("Workspaces - Core Software").Sync
Browser("Login -").Navigate "https://integration-branch-prod.almoctane.com/ui/?admin&p=21001/4001#/settings/workspace/users"
Browser("Login -").Page("Login - MyAccount").WebEdit("federateLoginName").Set "MFI-adm.rd.mqm.devops@opentext.com"
Browser("Login -").Page("Login - MyAccount").WebElement("Submit your email address").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Login -").Page("Login - MyAccount").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Login -").Page("Login - MyAccount").WebEdit("password").SetSecure "67a359a4703ea9ddba64eecaf33f06f369c14e430e1b078af08887f596572dec2a6a" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Login -").Page("Login - MyAccount").WebButton("SIGN IN").Click
Browser("Login -_2").Page("Workspaces - Core Software").WebButton("User").Click
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set Parameter("Name") @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf65.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set Parameter("Last_Name") @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf67.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set Parameter("Email") @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebElement("WebElement_3").Click
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set Parameter("Phone") @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebList("Roles").Click
Browser("Login -_2").Page("Workspaces - Core Software").WebCheckBox("Workspace Admin").Set "ON" @@ script infofile_;_ZIP::ssf72.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebButton("OK").Click
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf31.xml_;_
Wait 1
Browser("Login -").Page("Workspaces - Core Software").WebElement("DevOps").Click @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("Test Runners").Click @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("More").Click @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Cloud Runner").Click @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebList("WebList").Click @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit").Set Parameter("Runner_name") @@ script infofile_;_ZIP::ssf37.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebCheckBox("UFT").Set "ON" @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit_2").Set Parameter("Runner_git_url") @@ script infofile_;_ZIP::ssf39.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf40.xml_;_
Wait 2
Browser("Login -").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf41.xml_;_
Wait 1
Browser("Login -").Page("Workspaces - Core Software").WebButton("Save").Click @@ script infofile_;_ZIP::ssf42.xml_;_
wait 1 @@ script infofile_;_ZIP::ssf46.xml_;_
Browser("Login -").Page("Workspaces - Core Software").Sync
Browser("Login -").Navigate "https://integration-branch-prod.almoctane.com/ui/?p=21001/4001#/mbt-designer/hierarchy/models" @@ hightlight id_;_269054_;_script infofile_;_ZIP::ssf47.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebButton("Add item").Click @@ script infofile_;_ZIP::ssf74.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebEdit("First name").Set Parameter("Model_folder_name") @@ script infofile_;_ZIP::ssf75.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebButton("Add & Edit      Add &").Click @@ script infofile_;_ZIP::ssf76.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebTabStrip("Details Models Units").Select "Units" @@ script infofile_;_ZIP::ssf77.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebButton("Unit").Click @@ script infofile_;_ZIP::ssf78.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebEdit("First name").Set Parameter("Unit_name") @@ script infofile_;_ZIP::ssf79.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf80.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebTabStrip("Details Models Units").Select "Models" @@ script infofile_;_ZIP::ssf81.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebButton("Model").Click @@ script infofile_;_ZIP::ssf82.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebEdit("First name").Set Parameter("Model_name") @@ script infofile_;_ZIP::ssf83.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf56.xml_;_
Browser("Login -").Page("Workspaces - Core Software").Image("user avatar").Click @@ script infofile_;_ZIP::ssf57.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Sign out").Click @@ script infofile_;_ZIP::ssf84.xml_;_

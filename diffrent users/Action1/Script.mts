Browser("Login -").Page("Login - MyAccount").WebEdit("federateLoginName").Set "MFI-adm.rd.mqm.devops@opentext.com" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Login -").Page("Login - MyAccount").WebElement("Submit your email address").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Login -").Page("Login - MyAccount").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Login -").Page("Login - MyAccount").WebEdit("password").SetSecure "67a359a4703ea9ddba64eecaf33f06f369c14e430e1b078af08887f596572dec2a6a" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Login -").Page("Login - MyAccount").WebButton("SIGN IN").Click @@ script infofile_;_ZIP::ssf10.xml_;_

Browser("Login -").Page("Page").Link("Back to Home page.").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebCheckBox("personal").Set "ON" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Assign me to workspace").Click @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("Users").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("User").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "Sam" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "line" @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "Jim" @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "bell" @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "Jim@bell.com" @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "9887455" @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf31.xml_;_

Browser("Login -").Page("Workspaces - Core Software").WebElement("DevOps").Click @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("Test Runners").Click @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("More").Click @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Cloud Runner").Click @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebList("WebList").Click @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit").Set "JimBell_runner" @@ script infofile_;_ZIP::ssf37.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebCheckBox("UFT").Set "ON" @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit_2").Set "https://github.com/mbtuser/mbtuser.git" @@ script infofile_;_ZIP::ssf39.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf40.xml_;_
Wait 2
Browser("Login -").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf41.xml_;_
Wait 1
Browser("Login -").Page("Workspaces - Core Software").WebButton("Save").Click @@ script infofile_;_ZIP::ssf42.xml_;_
 @@ script infofile_;_ZIP::ssf46.xml_;_
Browser("Login -").Page("Workspaces - Core Software").Sync
Browser("Login -").Navigate "https://integration-master-dev.almoctane.com/ui/?p=2008/2002#/mbt-designer/hierarchy/models" @@ hightlight id_;_269054_;_script infofile_;_ZIP::ssf47.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebTabStrip("Models Units").Select "Units" @@ script infofile_;_ZIP::ssf48.xml_;_
Browser("Login -").Page("Workspaces - Core Software").Link("model_folder Personal").Click @@ script infofile_;_ZIP::ssf49.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Unit").Click @@ script infofile_;_ZIP::ssf50.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "JimBell_Unit" @@ script infofile_;_ZIP::ssf51.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf52.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebTabStrip("Models Units").Select "Models" @@ script infofile_;_ZIP::ssf53.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Model").Click @@ script infofile_;_ZIP::ssf54.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "JimBell_Model" @@ script infofile_;_ZIP::ssf55.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf56.xml_;_
Browser("Login -").Page("Workspaces - Core Software").Image("user avatar").Click @@ script infofile_;_ZIP::ssf57.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Sign out").Click @@ script infofile_;_ZIP::ssf58.xml_;_


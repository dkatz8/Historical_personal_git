Browser("Login -").Page("Login -").Sync
Browser("Login -").Navigate "https://integration-master-dev.almoctane.com/ui/?p=1001%2F1002&site=#/site-admin/site-admin-shared-spaces" @@ hightlight id_;_6297698_;_script infofile_;_ZIP::ssf1.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "MFI-adm.rd.mqm.devops@opentext.com" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Login -").Page("Login -").WebEdit("password").SetSecure "677699004dff5bd2993ab66f661da1fcb37a02e686d26f5ac296abc7710b9bc77686" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Login -").Page("Login -").WebButton("SIGN IN").Click @@ script infofile_;_ZIP::ssf10.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebElement("FTE_020125_Jok_266613753").Click @@ script infofile_;_ZIP::ssf47.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("Go to Space_2").Click @@ script infofile_;_ZIP::ssf37.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebElement("DevOps").Click @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebElement("Test Runners").Click @@ script infofile_;_ZIP::ssf39.xml_;_
Browser("Browser").Page("Workspaces - Core Software").Sync
Browser("Browser").Close @@ script infofile_;_ZIP::ssf23.xml_;_
wait 5
Browser("Login -").Page("Site Admin - Spaces -").WebElement("2002").Click @@ script infofile_;_ZIP::ssf48.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("Go to Space_2").Click @@ script infofile_;_ZIP::ssf49.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebElement("DevOps").Click @@ script infofile_;_ZIP::ssf50.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebElement("Test Runners").Click @@ script infofile_;_ZIP::ssf32.xml_;_
wait 5
Browser("Browser").Page("Workspaces - Core Software").Sync
Browser("Browser").Close @@ hightlight id_;_6297698_;_script infofile_;_ZIP::ssf52.xml_;_
wait 5
Browser("Login -").Page("Site Admin - Spaces -").WebElement("FTE_020125_uNr_862401392").Click @@ script infofile_;_ZIP::ssf61.xml_;_
wait 5
Browser("Login -").Page("Site Admin - Spaces -").WebButton("Go to Space_2").Click @@ script infofile_;_ZIP::ssf62.xml_;_
wait 5
Browser("Browser").Page("Workspaces - Core Software").WebElement("DevOps").Click @@ script infofile_;_ZIP::ssf63.xml_;_
wait 5
Browser("Browser").Page("Workspaces - Core Software").WebElement("Test Runners_2").Click @@ script infofile_;_ZIP::ssf64.xml_;_
wait 5
Browser("Browser").Page("Workspaces - Core Software").Sync
wait 5
Browser("Browser").Close @@ hightlight id_;_6297698_;_script infofile_;_ZIP::ssf65.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebElement("2001").Click @@ script infofile_;_ZIP::ssf66.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("Go to Space_2").Click @@ script infofile_;_ZIP::ssf67.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebElement("DevOps").Click @@ script infofile_;_ZIP::ssf63.xml_;_
Browser("Browser").Page("Workspaces - Core Software").WebElement("Test Runners_2").Click

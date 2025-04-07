AIUtil.SetContext Browser("Site Admin - Spaces - ValueEdg")
AIUtil.RunSettings.OCR.UseConfigSet UFT_OCR
AIUtil.RunSettings.OCR.ConsiderUIControlBorders.Enable

offset_y = AIUtil.FindText("Design nightly aviator tenant",micFromBottom,1).GetObjectProperty("y") + AIUtil.FindText("Design nightly aviator tenant",micFromBottom,1).GetObjectProperty("height")/2 - AIUtil.FindText("ID",micFromBottom,1).GetObjectProperty("y") - AIUtil.FindText("ID",micFromBottom,1).GetObjectProperty("height")/2
AIUtil.FindText("ID",micFromBottom,1).Click ,offset_y

AIUtil.RunSettings.OCR.ConsiderUIControlBorders.Enable

AIUtil.RunSettings.OCR.UseConfigSet AI_OCR

For i = 1 To 3
	If AIUtil.FindText("Go to Space").Exist Then
	       AIUtil.FindText("Go to Space").Click	
	else
		wait 3
	End If
Next

AIUtil.SetContext Browser("Site Admin - Spaces - ValueEdg")
If Not AIUtil.FindText("Go to Space").Exist(0) Then
      AIUtil.FindTextBlock("Administrators:").Click
      AIUtil.FindTextBlock("Type to search").Type "mqm_rnd"
      wait 3
	AIUtil("check_box", micAnyText, micFromTop, 1).SetState "On"
	Browser("S129001 Design nightly aviator").Page("S129001 Design nightly aviator").WebButton("OK").Click
	Browser("S129001 Design nightly aviator").Page("S129001 Design nightly aviator").WebButton("Save").Click
      wait 3
      AIUtil.FindText("Go to Space").Click
End If

AIUtil.SetContext Browser("Workspaces - ValueEdge")

For i = 1 To 3
	If AIUtil.FindTextBlock("Next").Exist Then
	         AIUtil.FindTextBlock("Next").Click
	else
		Exit For
       End If
Next

If AIUtil.FindTextBlock("Got it!").Exist(0) Then
	AIUtil.FindTextBlock("Got it!").Click
End If

If AIUtil("button","Accept").Exist(0) Then
	AIUtil.FindTextBlock("Accept").Click
End If

If AIUtil.FindTextBlock("OK").Exist(0) Then
	AIUtil.FindTextBlock("OK").Click
End If

Browser("Workspaces - ValueEdge").Page("Workspaces - ValueEdge").WebElement("DevOps").Click
Browser("Workspaces - ValueEdge").Page("Workspaces - ValueEdge").WebElement("CI Servers").Click

connected = False
For i = 1 To 5
	'Refresh
	PressRefreshHotKey
	If AIUtil("check_mark", micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("Connected")).Exist Then
		connected = True
		Exit For
	else
		wait 30
	End If
Next

If Not connected Then
	Reporter.ReportEvent micFail, "CI Server Connection", "CI Server Not Connected!"
else
	Reporter.ReportEvent micPass, "CI Server Connection", "CI Server Connected!"
	Browser("Workspaces - ValueEdge").Page("Workspaces - ValueEdge").WebElement("Test Runners").Click
	ready = False
	For i = 1 To 5
		PressRefreshHotKey
		If Browser("Workspaces - ValueEdge").Page("Workspaces - ValueEdge").WebElement("Codeless Runner").Exist Then
			ready = True
			Exit For
		else
			wait 60
		End If
	Next
	
	If Not ready Then
		Reporter.ReportEvent micFail, "Codeless Runner Creation", "Codeless Runner Not Created!"
	else
		Reporter.ReportEvent micPass, "Codeless Runner Creation", "Codeless Runner Created!"
	End If
End If

Browser("Workspaces - ValueEdge").Page("Workspaces - ValueEdge").WebElement("WebElement").Click
AIUtil.SetContext Browser("Workspaces - ValueEdge")
AIUtil("hamburger_menu").Click

Browser("Workspaces - ValueEdge").Page("Workspaces - ValueEdge").Link("Design").Click

wait 3
AIUtil.SetContext Browser("Design - Home")

If AIUtil.FindTextBlock("Submit your email address").Exist(5) Then
	'Log in
	Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com"
	Browser("Login -").Page("Login -").WebButton("CONTINUE").Click
	wait 2
	Browser("Login -").Page("Login -").WebEdit("password").Set "JustK33pGoing!"
	Browser("Login -").Page("Login -").WebButton("SIGN IN").Click
End If

If Not AIUtil.FindTextBlock("New Codeless Script").Exist Then
	Reporter.ReportEvent micFail, "Design Home Page", "Failed to Open Design Home Page!"
else
	Reporter.ReportEvent micPass, "Design Home Page", "Design Home Page Opened Successfully!"
	
	ve_page_url = Browser("Workspaces - ValueEdge").Page("Workspaces - ValueEdge").GetROProperty("url")
	
	Set FSO=CreateObject("Scripting.FileSystemObject")
	Set FS=FSO.CreateTextFile("C:\design_env_deploy\environment.txt", True)
	FS.WriteLine "EnvType=QA91"
	FS.WriteLine "ValueEdgeUrl=" & ve_page_url
	FS.Close
	
	Set FS=Nothing
	Set FSO=Nothing
	
End If

Browser("Design - Home").Close
Browser("Workspaces - ValueEdge").CloseAllTabs




Browser("Functional Testing Model-Based").Navigate "https://integration-branch-prod.almoctane.com/ui/?p=21001/3001#/mbt-designer/hierarchy/models" @@ hightlight id_;_987774_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Functional Testing Model-Based").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com" @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Functional Testing Model-Based").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Functional Testing Model-Based").Page("Login -").WebEdit("password").SetSecure "67643d73dbf26fb5560e80664051d3980b55865437447456277039b154da08b3b6e5" @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Functional Testing Model-Based").Page("Login -").WebButton("SIGN IN").Click
 @@ script infofile_;_ZIP::ssf9.xml_;_

 @@ script infofile_;_ZIP::ssf14.xml_;_
 @@ script infofile_;_ZIP::ssf18.xml_;_

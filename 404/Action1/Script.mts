Browser("Login -").Page("Login -").Sync
Browser("Login -").Navigate "https://wtfifyouexample.com/nonexistentpage"
Wait 5
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com"
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click
Browser("Login -").Page("Login - MyAccount").WebEdit("password").SetSecure "676ac18a2063604b2fd15195399420fc6a9fba33b99ffc68eddb6eec3ee96477b9d4"
Browser("Login -").Page("Login - MyAccount").WebButton("SIGN IN").Click
Browser("Login -").Page("Workspaces - Core Software").WebButton("OK").Click

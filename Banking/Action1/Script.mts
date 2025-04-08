If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Exist Then @@ script infofile_;_ZIP::ssf1.xml_;_
Reporter.ReportEvent micPass, "Bank Server ", " Bank Server is up !"
else
	Reporter.ReportEvent micFail, "Server ", " Server not reachable: ECONNREFUSED!" 
	ExitTest("Bank-  Server not reachable: ECONNREFUSED.")
End If
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set "Avi N" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "67f4c94d8650d36a35a2fe7fad4120f19df88a19b742abc7aed241cb" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Home - Advantage Bank").Page("Dashboard - Advantage").Link("New Transfer").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.name").Set "Elad R" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.iban").Set "New state test" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.bic").Set "12" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.bankName").Set "OneZ" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebNumber("amount").Set "200" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("description").Set "Transaction number 1" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebButton("Send").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Home - Advantage Bank").Page("Accounts - Advantage Bank").Link("Dashboard").Click @@ script infofile_;_ZIP::ssf13.xml_;_

If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebElement("200.00").Exist Then @@ script infofile_;_ZIP::ssf14.xml_;_
	Reporter.ReportEvent micPass, "Bank Transfer Payment ", " Bank Transfer Paymentt Succeeded !"
else
	Reporter.ReportEvent micFail, "Bank Transfer Payment ", " Bank Transfer Payment failed. Error 501 from Back office!" 
	ExitTest("Bank Transfer Payment failed. Error 501 from Back office. Please retry or contact support.")
End If @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Home - Advantage Bank").Page("Accounts - Advantage Bank").Link("Cards").Click @@ script infofile_;_ZIP::ssf17.xml_;_

Browser("Home - Advantage Bank").Page("Cards - Advantage Bank").WebElement("credit Card").Click @@ script infofile_;_ZIP::ssf18.xml_;_
If Browser("Home - Advantage Bank").Page("Cards - Advantage Bank").WebElement("active").Exsit Then @@ script infofile_;_ZIP::ssf22.xml_;_
Reporter.ReportEvent micPass, "Credit card ", " Credit card is Active"
else
	Reporter.ReportEvent micFail, "Credit card  - status: Inactive ", " Credit card - status: Inactive" 
	ExitTest("Credit card - status: Inactive.")
End If
Browser("Home - Advantage Bank").Page("Cards - Advantage Bank").WebElement("debit Card").Click @@ script infofile_;_ZIP::ssf19.xml_;_
 @@ script infofile_;_ZIP::ssf21.xml_;_
If Browser("Home - Advantage Bank").Page("Cards - Advantage Bank").WebElement("active").Exsit Then @@ script infofile_;_ZIP::ssf22.xml_;_
Reporter.ReportEvent micPass, "Debit card ", " Debit card is Active"
else
	Reporter.ReportEvent micFail, "Debit card  - status: Inactive ", " Debit card - status: Inactive" 
	ExitTest("Debit card - status: Inactive.")
End If

 @@ script infofile_;_ZIP::ssf23.xml_;_

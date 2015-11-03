#pragma strict
var CurrentMenu:String;
function Start()
{
	CurrentMenu = "Main";
}

function OnGUI()
{
	if(CurrentMenu == "Main")
		MainMenu();
	if(CurrentMenu == "Credits")
		Credits();
	if(CurrentMenu == "Tutorial")
		Tutorial();
}

function NavGate(nextMenu:String)
{
	CurrentMenu = nextMenu;
}

function MainMenu()
{
	if(GUI.Button (new Rect(500, 150, 200, 50), "Start"))
	{
		Application.LoadLevel("AoW");
	}
	if(GUI.Button (new Rect(500, 200, 200, 50), "Tutorial"))
	{
		NavGate("Tutorial");
	}
	if(GUI.Button (new Rect(500, 250, 200, 50), "Credits"))
	{
		NavGate("Credits");
	}
	if(GUI.Button (new Rect(500, 300, 200, 50), "Exit"))
	{
		Application.Quit();
	}
}

function Credits()
{
	(GUI.Button (new Rect(500, 150, 200, 100), "Developed by James Blakeley,\n Adrian Flaherty,\nArthur Franca\n and Declan Hanley"));
	if(GUI.Button (new Rect(500, 250, 200, 50), "Back"))
	{
		NavGate("Main");
	}
}

function Tutorial()
{
	if(GUI.Button (new Rect(500, 250, 200, 50), "Back"))
	{
		NavGate("Main");
	}
}
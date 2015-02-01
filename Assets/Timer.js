﻿#pragma strict

var timer: float = 70;
var isFinishedLevel : boolean = false;
public var displayText : UnityEngine.UI.Text;
public var timeText : UnityEngine.UI.Text;

private var oldTimer : float;

function Start(){
	oldTimer = timer;
}

function Update()
{
	if (!isFinishedLevel) {
		timer -= Time.deltaTime;
	} 

	if (timer > 0) {
		var minsDisplay : String = parseInt( timer / 60 ).ToString();
		var secsDisplay : String = parseInt( timer ).ToString();
		 
		if ( (timer - ( parseInt(minsDisplay) * 60)) > 10 ) {
		     secsDisplay = parseInt( timer - ( parseInt(minsDisplay) * 60) ).ToString();
		} 
		else {
			secsDisplay = "0" + parseInt( timer - ( parseInt(minsDisplay) * 60) ).ToString();
		}
		
		displayText.text = minsDisplay + " : " + secsDisplay;
	} 
	else {
	 	timer = oldTimer;
	}
	
	CurrentTime();
}

function CurrentTime() { 
	var dt : System.DateTime = System.DateTime.Now;
	var h : int = dt.Hour; 
	var m : int = dt.Minute; 
	var s : int = dt.Second;

	timeText.text = h + ":" + m + ":" + s;
}
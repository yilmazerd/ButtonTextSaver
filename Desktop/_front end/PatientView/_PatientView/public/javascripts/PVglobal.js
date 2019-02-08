/*property
    _hide, _load, ca, display, expla, getElementById, givenanswer, pvclass,
    showExplanation, showRightAnswer, style
global 
	CURRENT_INDEX, CURRENT_OBJECT, INDEX_LENGTH, NUMBER_OF_QUESTIONS, 
	PATIENT_OBJECTS, PV_HIDE_OBJECT, PV_HIDE_TOP_MENU, PV_LOAD_OBJECT, 
	PV_NEXT, PV_SHOW_TOP_MENU, QUESTION_ID, startpv
*/

"use strict";
// Global Variables
var CURRENT_OBJECT = {};
var CURRENT_INDEX = 0;
var PATIENT_OBJECTS = [];
var NUMBER_OF_QUESTIONS = 0;
var INDEX_LENGTH = 0;
var QUESTION_ID = 1;

function PV_SHOW_TOP_MENU() {
	document.getElementById('top_buttons_ms').style.display = 'block';
}

function PV_HIDE_TOP_MENU() {
	document.getElementById('top_buttons_ms').style.display = 'none';
}



function PV_LOAD_OBJECT(_i) {
	if (_i>0) {PV_HIDE_OBJECT(_i-1);}
	if (_i<INDEX_LENGTH-1) {PV_HIDE_OBJECT(_i+1);}
	PATIENT_OBJECTS[_i]._load();

} 

function PV_HIDE_OBJECT(_i) {
	PATIENT_OBJECTS[_i]._hide();
} 

function startpv() {
	PV_HIDE_OBJECT(0);
	PV_HIDE_OBJECT(1);
	PV_LOAD_OBJECT(0);
	document.getElementById('top_nav_bar').display='inline';
}

function PV_NEXT() { 
	if (PATIENT_OBJECTS[CURRENT_INDEX].pvclass = 'quiz') {
		if (PATIENT_OBJECTS[CURRENT_INDEX].expla && PATIENT_OBJECTS[CURRENT_INDEX].givenanswer!=PATIENT_OBJECTS[CURRENT_INDEX].ca) { // if explanation is on and if the patient gives incorrect answer
			PATIENT_OBJECTS[CURRENT_INDEX].showExplanation();
			PATIENT_OBJECTS[CURRENT_INDEX].expla=false;
			PATIENT_OBJECTS[CURRENT_INDEX].showRightAnswer(PATIENT_OBJECTS[CURRENT_INDEX].ca);
			return;
		}
	}
	if (CURRENT_INDEX<INDEX_LENGTH) {
		CURRENT_INDEX++;
		PV_LOAD_OBJECT(CURRENT_INDEX);	
		PV_HIDE_TOP_MENU();
	}

	
};

function PV_PREVIOUS() { 
	if (CURRENT_INDEX>0) {
		CURRENT_INDEX--;
		PV_LOAD_OBJECT(CURRENT_INDEX);
		// hide next button		
		PV_HIDE_TOP_MENU();
	}

};

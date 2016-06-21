/**************************************************************************
	frameset.js
	Copyright (c) 2010 arcplan Information Services GmbH (www.arcplan.com)
**************************************************************************/

//Settings
//**
	//Availability of Sliders and Elements
	var m_showNavigation = true //Navigation Frame
	var m_showHeader = true //Header
	var m_showDropDownMenu = true //DropDownMenu
	var m_showNavigationButtons = true; //Navigation Buttons back, forward & home
		var m_showShortCut = true;  //Shortcut input field
		var m_showTabBar = true //TabBar (pending)

//Variables
//***
	var m_openSlider = null //currently opened slider
	var m_numSliders = 0
	var m_dropDownMenu = null;
	var m_toolbar = null;
	
	//sizes
	var m_headerH = (m_showHeader) ? 50 : 0
	var m_tabBarH = (m_showDropDownMenu) ? 22 : 0
	var m_sliderBarW = 190
	var m_sliderBarCollapsedW = 25
	var m_separatorW = 11
	
	//Arrays for Mashup Communication 
	//Contain information about the sliders content
	var m_docTree = new Array
	var m_tabListText = new Array;
	var m_tabListInfo = new Array;

//***
//Initializations after the page is loaded
function pageinit() {

	//Initialized the slider bar when the page is opened within the browser.
	setSliderAvailability("nav", m_showNavigation)

	showElement("header", m_showHeader, "block")

	showElement("dropdownmenu", m_showDropDownMenu, "block");
	m_dropDownMenu = document.getElementById("dropdownmenu");
	m_toolbar = document.getElementById("toolbar");
	showElement("shortcut", m_showShortCut, "block")
	openSlider(m_openSlider)
	//only show help windows if browser size is sufficient
	var appletWText = getCurrentElementStyle("arcClient", "width");
	var appletW = Number(appletWText.replace("px", ""));
	if (document.body.offsetWidth < (m_sliderBarW + m_separatorW + appletW)) {
		toggleSliderBar()
	}
	else {
		resizeApplet()
	}
}

//Global Resize functions
//resizeAll
function resizeAll() {
	resizeOpenSlider()
	resizeApplet()
}

//ResizeApplet
function resizeApplet() {
	//set the size of the applet window

	var availableW = getWindowWidth() - m_separatorW
	availableW -= isSliderBarOpen() ? m_sliderBarW : m_sliderBarCollapsedW;
	var availableH = getWindowHeight() - m_headerH - m_tabBarH
	document.getElementById('appletScroller').style.width = availableW + "px"
	document.getElementById('appletScroller').style.height = availableH + "px"
}

//Slider Control Section
//***
	//OpenTopSlider
	function openTopSlider() {
		var topSlider = getTopSlider();
		openSlider(topSlider);
	}

	//openSlider - Opens the i_newSlider. 
	function openSlider(i_newSlider) {
		if (isSliderBarOpen() == false) {
			toggleSliderBar();
		}
		if (m_openSlider != null) {
			toggleSlider(m_openSlider, false)
		}
		if (i_newSlider) {
			toggleSlider(i_newSlider, true)
		}
		m_openSlider = i_newSlider
		resizeOpenSlider()
	}

	//resizeOpenSlider
	function resizeOpenSlider() {
		var sliderArea = m_openSlider + "Area"
		var sliderIFrame = m_openSlider + "IFrame"
		var availableH = getWindowHeight() - m_headerH - 7 //why 7? tbd...
		availableH -= m_numSliders * 20
		document.getElementById(sliderArea).style.height = availableH + "px"
		document.getElementById(sliderIFrame).style.height = availableH + "px"
	}

	//toggleSlider
	function toggleSlider(i_slider, i_doOpen) {
		var display = i_doOpen ? "block" : "none"
		var sliderArea = i_slider + "Area"
		var sliderIFrame = i_slider + "IFrame"
		document.getElementById(sliderArea).style.display = display
		document.getElementById(sliderIFrame).style.display = display
	}
	
	//setSliderAvailability
	function setSliderAvailability(i_sliderName, i_show) {
		if (i_show) {
			if (m_openSlider == null) {
				m_openSlider = i_sliderName
			}
			m_numSliders++
		}
		else {
			var sliderButton = i_sliderName + "Button"
			var sliderArea = i_sliderName + "Area"
			document.getElementById(sliderButton).style.display = "none"
			document.getElementById(sliderArea).style.display = "none"
		}
	}

	//Check the available size of the applet and resize the scroller container accordingly
	function toggleSliderBar() {
		var toggleSliderBarImg = document.getElementById("separatorimg"),
			newDisplay, doOpen = isSliderBarOpen();
		if (doOpen) {
			//Collapse
			newDisplay = "none";
			toggleSliderBarImg.src = "img/slider/openSliderBar.png";
			getStyleSheetRule("#sliderBar .button").style.width = m_sliderBarCollapsedW + "px";
			toggleSlider(m_openSlider, false);
			//openSlider("com");
		}
		else {
		//Open
			newDisplay = "inline";
			toggleSliderBarImg.src = "img/slider/closeSliderBar.png";
			getStyleSheetRule("#sliderBar .button").style.width = m_sliderBarW + "px";
			toggleSlider("nav", true);
		}
		showSlider("nav", newDisplay);
		resizeApplet();
		document.getElementById('arcClient').RefreshClientArea();
	}

	//showSlider
	function showSlider(i_slider, i_show) {
		var sliderText = i_slider + "Text"
		document.getElementById(sliderText).style.display = i_show;
	}

//Slider Help Functions 

	//getTopSlider
	function getTopSlider() {
		return "nav";
	}

	//IsSliderBarOpen
	function isSliderBarOpen() {
		return (document.getElementById("navText").style.display == "none") ? false : true;
	}

	//showElement
	function showElement(i_element, i_show, i_showStyle) {
		value = (i_show) ? i_showStyle : "none";
		document.getElementById(i_element).style.display = value;
	}


	//fill comment frame with text from arcplan application
	function textFromClient(myText) {
		document.getElementById('comIFrame').contentWindow.textFromClient(myText)
	}
	
	//return text from comment frame to arcplan application
	function textToClient(myText) {
		return document.getElementById('comIFrame').contentWindow.textToClient()
	}

	//Actives the desired tab.
	//This is executed from the arcplan application, to keep the tab setting in sync 
	//with the current application document
	function setTab(index) {
		getIFrameWindow('tabIFrame').tabPane1.setSelectedIndex(index)
	}


//Filling routines for the sliders

	//Called by mashup from the server
	function fillNavigation(i_text) {
		//Depending on what navigation element is used, 
		//the according filling function is executed
		if (m_showNavigation) {
			fillNavigationTree(i_text);
		}
		if (m_showDropDownMenu) {
			fillNavigationMenu(i_text);
		}

	}

	//Fill the vertical navigation slider
	function fillNavigationTree(i_text) {
		var nodes = i_text.split("||")
		m_docTree = new Array;
		for (i = 0; i< nodes.length; i++) {
			m_docTree[i] = nodes[i]
		}
		getIFrameWindow("navIFrame").location.reload(true)
	}

	//Fills the dropdownmenu within the header
	function fillNavigationMenu(i_text) {
		var innerHTML = "";
		var nodeInfoList = i_text.split("||");
		if (nodeInfoList.length > 0) {
			var ret = getNavigationSubHTML(nodeInfoList, 0, 1);
			innerHTML = "<table cellpadding=0 cellspacing=0 style=border:0px;margin:0px;padding:0px><tr><td>";
			if (m_showNavigationButtons) {
				innerHTML += "<ul class='button'><li><h2 class='small'><a href='javascript:parent.doNavigate(\"EVENT:HOME\")'><img alt=Home src=img/menu/home.gif /></a></h2></li></ul>"
							+ "<ul class='button'><li><h2 class='small'><a href='javascript:parent.doNavigate(\"EVENT:BACK\")'><img alt=Back src=img/menu/back.gif /></a></h2></li></ul>"
							+ "<ul class='button'><li><h2 class='small'><a href='javascript:parent.doNavigate(\"EVENT:FORWARD\")'><img alt=Forward src=img/menu/forward.gif /></a></h2></li></ul>";
			}
			innerHTML += ret[1];
			innerHTML += "</td></tr></table>";
			m_dropDownMenu.innerHTML = innerHTML;
		}
	}

	//Recursive function to fill the dropdownmenu
	//Returns an array, containing the content HTML of the recursion step, 
	//and the current index of the i_nodeInfoList.
	function getNavigationSubHTML(i_nodeInfoList, i_index, i_level) {
		var liString = "", iframeString = "";
		var liBeginString = "", liCloseString = "", titleCloseString = "";
		var numNodes = 0;
		var ret = new Array(2) 


		while (i_index < i_nodeInfoList.length) {
			var nodeInfo = i_nodeInfoList[i_index].split("|");
			var newLevel = nodeInfo[0];

			if (newLevel < i_level) {
				break; //exit recursion step, back one level up
			}
			else if (newLevel > i_level) {
				//call next recursive step
				tret = getNavigationSubHTML(i_nodeInfoList, i_index, i_level + 1);
				i_index = tret[0];
				liString += tret[1];
				liString += liCloseString;
				liCloseString = "";
			}
			else {
				//same Level, package liString
				liString += liCloseString;
				//Start and End tags of the first level are different from the others
				liBeginString = (i_level == 1) ? "<ul class='button'><li><h2>" : "<li>";
				liCloseString = (i_level == 1) ? "</li></ul>" : "</li>";
				titleCloseString = (i_level == 1) ? "</h2>" : "";
				liString += liBeginString + "<a href='javascript:parent.doNavigate(\"" 
								+ nodeInfo[3] + ":" + nodeInfo[2] + "\")'>"
								+ nodeInfo[1] + "</a>" + titleCloseString;
				i_index++;
			}
		}
		liString += liCloseString;
		ret[0] = i_index;
		if (i_level == 1) {
			ret[1] = liString;
		}
		else {
			//Insert iframe only for submenus
			ret[1] = "<ul><iframe class='level" + (i_level - 1)
						+ "' style='height:" + numNodes * 18 + "px;'></iframe>"
						+ liString + "</ul>";
		}
		return ret;
	}

	//Fills the toolbar
	function fillToolbar(i_text) {
		var innerHTML = "";
		var infoArray = {
			textArray: i_text.split("||"),
			index: 0
		}

		while (infoArray.index < infoArray.textArray.length) {
			var nodeInfo = infoArray.textArray[infoArray.index].split("|");
			var nodeLevel = nodeInfo[0];
			var nodeText = nodeInfo[1];
			var nodeId = nodeInfo[2];
			var nodeEnabled = (nodeInfo[3] == "1") ? true : false;

			innerHTML += "<ul class='icon'><li><h2>"
			if (nodeEnabled) {
				innerHTML += "<a href='javascript:parent.clickToolbarButton(\""
				+ nodeId
				+ "\")'>"
			}
			innerHTML += "<img alt='" + nodeText + "' src=img/header/"
				+ getToolbarIcon(nodeText, nodeEnabled)
				+ ">"
			if (nodeEnabled) {
				innerHTML += "</a>"
			}
			innerHTML += "</h2>"

			infoArray.index++;
			innerHTML += fillToolbarPopup(infoArray, innerHTML);

			innerHTML += "</li></ul>";
		}
		m_toolbar.innerHTML = innerHTML;
	}
	
	function fillToolbarPopup(i_infoArray, i_innerHTML) {
		var startTagWritten = false,
			innerHTML = "",
			nodesCount = 0;

		while (i_infoArray.index < i_infoArray.textArray.length) {
			var nodeInfo = i_infoArray.textArray[i_infoArray.index].split("|");
			var nodeLevel = nodeInfo[0];
			var nodeText = nodeInfo[1];
			var nodeId = nodeInfo[2];
			var nodeEnabled = (nodeInfo[3] == "1") ? true : false;

			if (nodeLevel == 1) {
				break;
			}

			i_infoArray.index++;

			if (!nodeEnabled) {
				continue;
			}

			innerHTML += "<li><a href='javascript:parent.clickToolbarButton(\""
				+ nodeId
				+ "\")'>"
				+ nodeText
				+ "</a></li>";

			nodesCount += 1;
		}
		
		if (innerHTML.length > 0) {
			innerHTML = "<ul><iframe class='level1' style='height: " + (nodesCount * 19 - 6) + "px; left: 0px;'></iframe>" + innerHTML + "</ul>";
		}

		return innerHTML;
	}

	function fillTabList(text) {
		var nodes = text.split("||")
		m_tabListText = new Array
		m_tabListInfo = new Array
		var j = 0
		for (i = 0; i< nodes.length; i++) {
			i++
			m_tabListText[j] = nodes[i++]
			m_tabListInfo[j++] = nodes[i]
		}
		getIFrameWindow("tabIFrame").location.reload(true)
	}
	
	function fillCommentSlider(text) {
		getIFrameWindow('comIFrame').setComment(text)
	}

//***	

//Client Mashup Communication functions
//***
	//send the click on a toolbar button to the arcplan application, identified by the object id
	function clickToolbarButton(i_buttonId) {
		document.getElementById('arcClient').acSendInputEvent("fsToolbar", 146, i_buttonId, 1, 1);
	}

	function handleShortcutKeyPress(ev, value) {
		var key = ev.keyCode || ev.which;
		if (key == 13) {
			enterToolbarText(value);
		}
	}

	//send entered text from the toolbar to the arcplan application
	function enterToolbarText(inputText) {
		document.getElementById('arcClient').acSendInputEvent("fsNavigation", 31, inputText, 1, 1);
	}

	//This function is executed when the tab is changed by the user
	function doNavigate(i_target) {

		var myTarget;
		var arcClient = document.getElementById('arcClient');

		//refresh menü to remove dropdown windows
		var mymenu = document.getElementById('dropdownmenu');
		mymenu.innerHTML = mymenu.innerHTML;
		if (i_target.indexOf("HTML:") == 0) {
			//if the text starts with "INNERHTML:", the following HTML text will be placed within the tabContainer div
			var innerHTML = i_target.substring(5)
			document.getElementById('tabContainer').innerHTML = innerHTML
			document.getElementById('tabContainer').style.display = "block"
			document.getElementById('appletScroller').style.display = "none"
		}
		else if (i_target.indexOf("URL:") == 0) {
			//if the text starts with "URL:", the following html page will be placed within the tabContainer div
			var URL = i_target.substring(4)
			var innerHTML = "<iframe frameborder=0 id=tabControl style=width:1024px;height:768px;padding-top:2px src=" + URL + "></iframe>";

			document.getElementById('tabContainer').innerHTML = innerHTML
			document.getElementById('tabContainer').style.display = "block"
			document.getElementById('appletScroller').style.display = "none"
		}
		else if (i_target.indexOf("LOCATION:") == 0) {
			//the whole HTML page will be replaced with location
			myTarget = i_target.substring(9);
			parent.location = myTarget;
		}
		else {
			document.getElementById('appletScroller').style.display = "block"
			document.getElementById('tabContainer').style.display = "none"

			if (i_target.indexOf("EVENT:") == 0) {
				//Event should be fired within the application
				var objId = -1;
				myTarget = i_target.substring(6);
				if (myTarget == "BACK") objId = 26;
				else if (myTarget == "FORWARD") objId = 27;
				else if (myTarget == "HOME") objId = 39;
				else if (myTarget == "FAVORITES") objId = 41;
				else if (myTarget == "PRINT") objId = 35;
				else if (myTarget == "PDF") objId = 28;
				else if (myTarget == "EXCEL") objId = 37;
				if (objId > -1) {
					arcClient.acSendClickEvent("fsNavigation", objId, 1, 1)
				}
			}
			else if (i_target.indexOf("DOC:") == 0) {
				//An application document should be opened
				myTarget = i_target.substring(4);
				arcClient.acSendInputEvent("fsNavigation", 29, myTarget, 1, 1)
			}
			else {
				//alert("Invalid target: " + i_target)
			}
		}
	}

	function logOut() {
		parent.location.reload();
		//document.getElementById('arcClient').acSendClickEvent("fsSettings", 26, 1, 1)
	}
//***


//Tool functions
//***
	//Get the available width of the browser window
	function getWindowWidth() {
		var myWidth = 0;
		if( typeof( window.innerWidth ) == 'number' ) {
			//Non-IE
			myWidth = window.innerWidth;
		} else if( document.documentElement && document.documentElement.clientWidth) {
			//IE 6+ in 'standards compliant mode'
			myWidth = document.documentElement.clientWidth;
		} else if( document.body && document.body.clientWidth) {
			//IE 4 compatible
			myWidth = document.body.clientWidth;
		}
		return myWidth
	}	
	
	//Get the available height of the browser window
	function getWindowHeight() {
		var myHeight = 0;
		if( typeof( window.innerWidth ) == 'number' ) {
			//Non-IE
			myHeight = window.innerHeight;
		} else if( document.documentElement && document.documentElement.clientHeight) {
			//IE 6+ in 'standards compliant mode'
			myHeight = document.documentElement.clientHeight;
		} else if( document.body && document.body.clientHeight) {
			//IE 4 compatible
			myHeight = document.body.clientHeight;
		}
		return myHeight
	}

	//Switch the waiting animation image on or off
	function getCurrentElementStyle(i_elem, i_style) {
		var elem = document.getElementById(i_elem);

		if (elem.currentStyle) { //IE
			return elem.currentStyle[i_style];
		}
		else { //NonIE
			return document.defaultView.getComputedStyle(elem, null).getPropertyValue(i_style);
		}
	}

	//getIFrameWindow
	function getIFrameWindow(i_IFrameName) {
		return document.getElementById(i_IFrameName).contentWindow
	}
	
	function setCursor(i_style) {
		document.body.style.cursor = i_style;
	}

	function getStyleSheetRule(i_rulename) {	
		var myRule = null
		var mysheet=document.styleSheets[0]
		var myrules = mysheet.cssRules ? mysheet.cssRules : mysheet.rules
		for (i = 0; i < myrules.length; i++) {
			if (myrules[i].selectorText == i_rulename) {
				myRule = myrules[i]
				break
			}
		}
		return myRule
}

function getToolbarIcon(i_icon, i_enabled) {
	var iconName = "";

	if (i_icon.toLowerCase() == "pdf") iconName = "PDF-Export";
	else if (i_icon.toLowerCase() == "xls") iconName = "XLS-Export";
	else if (i_icon.toLowerCase() == "ppt") iconName = "PPT-Export";
	else if (i_icon.toLowerCase() == "comments") iconName = "Comment_outline";
	else if (i_icon.toLowerCase() == "bookmark") iconName = "Favorite_outline";
	else if (i_icon.toLowerCase() == "language") iconName = "Language";
	else if (i_icon.toLowerCase() == "help") iconName = "Help";
	else if (i_icon.toLowerCase() == "workflow") iconName = "Workflow";
	else if (i_icon.toLowerCase() == "export and share") iconName = "Export_group";
	else if (i_icon.toLowerCase() == "share and export") iconName = "Export_group";
	else if (i_icon.toLowerCase() == "user profile") iconName = "user";
	else if (i_icon.toLowerCase() == "add") iconName = "add";
	else if (i_icon.toLowerCase() == "accept") iconName = "accept";
	else if (i_icon.toLowerCase() == "cancel") iconName = "cancel";
	
	iconName += (i_enabled == 1) ? "_white_" : "_grey_";
	iconName += "32x32.png";

	return iconName;
}

function notifyWaitingState(i_switch) {
	//not implemented
}

//***

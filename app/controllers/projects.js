//Leeland
var args = arguments[0] || {};


//This line add the image of the picture to the mainscreen.
$.menuButton.add(getMenuButton({
	h: '60dp',
	w: '60dp'
}));

//Minor changes to click event. Update the menuOpen status;
$.menuButton.addEventListener('click',function(){
	
	$.slidingMainView.showhidemenu();
	$.slidingMainView.menuOpen=!$.slidingMainView.menuOpen;
}); // method is exposed by widget

//This gets executed and gets the parameters from lines 5-8.
function getMenuButton(args){
	//This is the background color of the sliding menu button.
	//passes in the size of the button through the "args" parameter.
	var v=Ti.UI.createView({
		height: args.h,
		width: args.w,
		backgroundColor: '#0ee67b'
	});
	//This is the slider picture that is moving.
	var b=Ti.UI.createView({
		height: "20dp",
		width: "20dp",
		backgroundImage: "/logo.png"
	});
	
	//add the picture of the slider.png to the view.
	v.add(b);
	
	//returns the button
	return v;
}

var menuView = Alloy.createController('menuview');

$.slidingMainView.init({
    
    menuview:menuView.getView(),
    mainview:$.mainView,
    duration:200,
    parent: $.projects
});

function doClick1() {
		var win = Titanium.UI.createWindow({
			title: 'PROJECT 1',
		});
			var info=Titanium.UI.createButton({
			title:'Project 1 Information Goes Here',
			width: Ti.UI.SIZE,
			height: Ti.UI.SIZE
		});
		win.add(info);
};
function doClick2() {
		var win = Titanium.UI.createWindow({
			title: 'PROJECT 2',
		});
			var info=Titanium.UI.createButton({
			title:'Project 2 Information Goes Here',
			width: Ti.UI.SIZE,
			height: Ti.UI.SIZE
		});
		win.add(info);
};
function doClick3() {
		var win = Titanium.UI.createWindow({
			title: 'PROJECT 3',
		});
			var info=Titanium.UI.createButton({
			title:'Project 3 Information Goes Here',
			width: Ti.UI.SIZE,
			height: Ti.UI.SIZE
		});
		win.add(info);
};
function doClick4() {
		var win = Titanium.UI.createWindow({
			title: 'PROJECT 4',
		});
			var info=Titanium.UI.createButton({
			title:'Project 4 Information Goes Here',
			width: Ti.UI.SIZE,
			height: Ti.UI.SIZE
		});
		win.add(info);
};
function doClick5() {
		var win = Titanium.UI.createWindow({
			title: 'PROJECT 5',
		});
			var info=Titanium.UI.createButton({
			title:'Project 5 Information Goes Here',
			width: Ti.UI.SIZE,
			height: Ti.UI.SIZE
		});
		win.add(info);
};
function doClick6() {
		var win = Titanium.UI.createWindow({
			title: 'PROJECT 6',
		});
			var info=Titanium.UI.createButton({
			title:'Project 6 Information Goes Here',
			width: Ti.UI.SIZE,
			height: Ti.UI.SIZE
		});
		win.add(info);
};
$.projects.open();

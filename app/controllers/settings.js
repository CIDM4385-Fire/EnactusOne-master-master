//Jack
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
    parent: $.settings
});

OS_IOS && $.logoutBtn.addEventListener("click", handleLogoutBtnClick);

$.handleLogoutMenuClick = function(_event) {
  handleLogoutBtnClick(_event);
};

function handleLogoutBtnClick(_event) {

  // push logout
  require('pushNotifications').logout(function() {

    Alloy.Globals.currentUser.logout(function(_response) {
      if (_response.success) {
        Ti.API.debug('user logged out');


        // show login window
        $.parentController.index();

      } else {
        Ti.API.error('error logging user out');
      }
    });
  });
};


$.settings.open();


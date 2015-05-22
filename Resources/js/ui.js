(function($) {  //Self Initiating function

//Text-Area Numbering
	$("textarea#bulk-product-entry").linenumbers({col_width:'15px'});

	
//     * WINDOW HIDE
//     
    $("#windowMinimize").click(function()
    {
        event.preventDefault();
        // From http://developer.appcelerator.com/question/131596/minimize-unminimize-under-windows-7
        // One user found if we follow this magical sequence (max-unmax-min), the
        // window will be responsive after restore. Confirmed on my Win 7
        Ti.UI.getMainWindow().maximize();
        Ti.UI.getMainWindow().unmaximize();
        Ti.UI.getMainWindow().minimize();
    });

    
//    * WINDOW CLOSE
//    


    $("#windowClose").click(function()
    {
        event.preventDefault();
        Ti.UI.getMainWindow().close();
        //system.window.target.hide();
        Ti.App.exit();
    });


    
//     * WINDOW Click And Drag - Refer at the bottom page for cleaner code

 $("#windowTitleBar").mousedown ( function ( event )
    {
     				var target = $( event.target );

		event.preventDefault();
		
        if(!Ti.UI.getMainWindow().isMaximized() && !target.is( "main" ) )
        {
            var diffX = event.pageX;
            var diffY = event.pageY;

            $(document).mousemove ( function ( event )
            {
                event.preventDefault();

                if (event.screenY - diffY < screen.height-100)
                Ti.UI.getMainWindow().moveTo(event.screenX - diffX, event.screenY - diffY);
            });
        }
    });

    $(document).mouseup ( function ( event )
    {
        event.preventDefault();
        $(document).unbind('mousemove');
    });
	
	
// If Text-Area is not empty, enable "Update" button

$("textarea#bulk-product-entry").bind('input propertychange', function() {

	if($(this).val()){
		$("button#bulk-product-update").removeAttr('disabled');	  
	 } else {
		$("button#bulk-product-update").prop('disabled', true);	  
	 }
	 
});

}(jQuery)); //Self Initiating function - END

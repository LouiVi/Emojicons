"use strict"

//Create a Home object.
function Home( path, layContent )
{
		var self = this;
		
    //Get page states.
    this.IsVisible = function() { return lay.IsVisible() }
    this.IsChanged = function() { return false }
    
    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) lay.Animate("FadeIn");
        else lay.Animate( "FadeOut" );
    }
    
    this.Another = function ()
{
	if(c<icons.length) {
	c++;
	img.Clear();
	var wh2 = img.MeasureText(icons[0]);
	//img.DrawText( icons[c], 0.5 - wh.width / 2, 0.5 - wh.height / 2 );
	img.DrawText( icons[c], 0.5 - wh2.width / 2, 1 - wh2.height / 2);
	img.Update();
	img.Save("/storage/emulated/0/Download/emoji_"+c+".png"  );
	setTimeout(self.Another, 3000);
	}
}

    
    //Create layout for app controls.
    var lay = app.CreateLayout( "Linear", "FillXY,VCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    var c = 0;
    
    var icons = app.ReadFile( "emojis.txt" ).split(" ");
   // alert(JSON.stringify(icons))
    //Add a logo.
	var img = app.CreateImage( "Img/Icon.png");
	img.SetAutoUpdate( true );
	img.SetPixelMode( false );
	img.ClearFocus()
	img.Clear();
	img.SetTextSize( 54 )
	img.SetPaintColor( "#000000" )
	var wh = img.MeasureText(icons[c]);
	img.DrawText( icons[c], 0.5 - wh.width/ 2, 1 - wh.height / 2);
	img.Update();
	img.Save("/storage/emulated/0/Download/emoji_"+c+".png"  );
	lay.AddChild( img );
	
setTimeout(self.Another, 3000);

	
	//Create a text with formatting.
    var text = "<p><font color=#4285F4><big>Welcome</big></font></p>" + 
    "Todo: Put your home page controls here! </p>" + 
    "<p>You can add links too - <a href=https://play.google.com/store>Play Store</a></p>" +
    "<br><br><p><font color=#4285F4><big><big><b>&larr;</b></big></big> Try swiping from the " + 
    "left and choosing the <b>'New File'</b> option</font></p>";
    var txt = app.CreateText( text, 1, -1, "Html,Link" );
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 );
    txt.SetTextSize( 18 );
    txt.SetTextColor( "#444444" );
    //lay.AddChild( txt );
}
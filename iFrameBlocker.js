function iFrameBlocker()
{
	var iframes=document.getElementsByTagName('iframe');
	window.alert('This webpage contains ' + iframes.length +' iframes');
	var counter = 1;
	var loop = iframes.length;
	deletionCounter = 0;
	while(loop > 0)
	{
	    var conf = confirm('Would you like to block iframe #'+counter+' from initiating a connection to : "'+iframes[deletionCounter].src+'" ?');
        if (conf == true)
		{
	    window.alert('Iframe #' +counter+ ' blocked');
		iframes[deletionCounter].parentNode.removeChild(iframes[deletionCounter]);
		loop--;
		counter++;		
	    }
		else
		{
		  loop--;
		  counter++;
		  deletionCounter++;
		}
    }
}

iFrameBlocker();

function stringToNode(str) {
  const c = document.createElement('div');
  c.innerHTML = str.trim();
  return c.firstChild; 
}

window.onload = function()
{
	const elements = {
		"mediabtns_class": "PlayerControlsNeo__button-control-row",
		"player_tag": "video",
	}
	
	const objects = {
		"resbutton": stringToNode(`
			<button class="olesodynets-custombtn touchable PlayerControls--control-element nfp-button-control default-control-button button-nfplayerEpisodes" tabindex="0" role="button" aria-label="More Episodes"><svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
						</svg></button>
		`)
	}
	
	// X
	const callback = function(mutationsList, observer) {
	    const controls = document.getElementsByClassName(elements["mediabtns_class"])[0]; // get the controls container
	    
	    if(!controls) return; // the controls div hasn't been rendered yet.
		observer.disconnect(); // stop listening for dom updates
		
		// assign an onclick action for the new button
		objects["resbutton"]
		
		controls.insertBefore(objects["resbutton"], controls.lastChild); // add an extra button to the controls menu
		objects["resbutton"].addEventListener("click", function(e) {
			const player = document.getElementsByTagName("video")[0];
			
			if(!player) return alert("We couldn't find the player, probably netflix made some changes in their code. Please, request an update on github!");
			
			player.requestPictureInPicture();
		});
	};
	
	const observer = new MutationObserver(callback);
	observer.observe(document, { attributes: true, childList: true, subtree: true });
}

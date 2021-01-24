"use strict";

(function () {
	
	function Start()
	{
		window.cr_createRuntime({
			exportType: "instant-games"
		});
	};
	
	if (document.readyState === "loading")
		document.addEventListener("DOMContentLoaded", Start);
	else
		Start();
	
})();
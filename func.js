$(function(){
	var dark = false;

	if(localStorage.getItem('modo') == 'dark'){
		aplicaDark();
	}

	mudaModo();

	function mudaModo(){
		$('button').click(function(){
			if(dark)
				aplicaLight();
			else
				aplicaDark();
		})
	}

	function aplicaDark(){
		$('body,header').removeClass('light');
		$('body,header').addClass('dark')
		$('header p b').html('Dark mode');

		localStorage.setItem('modo','dark');

		dark = true;
	}

	function aplicaLight(){
		$('body,header').removeClass('dark');
		$('body,header').addClass('light')
		$('header p b').html('Light mode');

		localStorage.removeItem('modo');

		dark = false;
	}
})
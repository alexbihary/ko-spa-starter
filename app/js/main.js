require.config({
	baseUrl: 'app/',
	paths: {
		//Third-party Libraries
		'jquery': ['//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min', 'lib/jquery/jquery-1.8.2.min'],
		'ko': ['//cdnjs.cloudflare.com/ajax/libs/knockout/2.1.0/knockout-min', 'lib/knockout/knockout-2.1.0'],
		'bootstrap': ['//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.1.1/bootstrap.min', 'lib/bootstrap/bootstrap.min'],

		//RequireJS plugins
		'i18n': 'lib/require/i18n',
		'json': 'lib/require/json',
		'noext': 'lib/require/noext',
		'text': 'lib/require/text'
	},
	shim: {
		'bootstrap': ['jquery']
	}
})

require(['jquery', 'ko', 'bootstrap'], function($, ko) {
	//start your engines
})
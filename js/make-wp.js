var makeWP = (function ( w, d ) {
	"use strict";

	var makes       = {
		    'editor-code': 'Core',
		    'art': 'Design',
		    'smartphone': 'Mobile',
		    'universal-access': 'Accessibility',
		    'translation': 'Polyglots',
		    'format-chat': 'Support',
		    'admin-page': 'Documentation',
		    'admin-appearance': 'Themes',
		    'admin-plugins': 'Plugins',
		    'groups': 'Community',
		    'networking': 'Meta',
		    'welcome-learn-more': 'Training',
		    'welcome-view-site': 'Flow',
		    'video-alt2': 'TV',
		    'wordpress': 'YOURS',
		    'wordpress-alt': 'YOURS',
		    'heart': 'YOURS'
	    },
	    swap        = d.querySelector( '.make-wp' ),
	    swapCount   = 0,
	    delayedSwap = function () {
		    console.log( 'Starting swap' );
		    var itemCount  = Object.keys( makes ).length,
		        currentKey = Object.keys( makes )[swapCount],
		        done       = false;
		    console.log( itemCount );
		    console.log( currentKey );

		    var pulse = function () {
			    var pulseIcons = [
				    'wordpress', 'wordpress-alt', 'heart',
				    'wordpress', 'wordpress-alt', 'heart',
				    'wordpress', 'wordpress-alt', 'heart'
			    ];
			    pulseIcons.forEach( function ( el, item, pulseIcons ) {
				    swap.innerHTML = '<i class="dashicons dashicons-' + el + '"></i>&thinsp;YOURS';
				    //swap.className = 'dashicons dashicons-' + el;
			    } );
			    setInterval( pulse, 800 );
		    };

		    if ( ++ swapCount > itemCount ) {
			    return;
		    }
		    var swapText = makes[currentKey];
		    console.debug( swapCount, swapText );

		    swap.innerHTML = '<i class="dashicons dashicons-' + currentKey + '"></i>&thinsp;';
		    swap.innerHTML += swapText.toString();
		    //swap.className = 'dashicons dashicons-' + make;


		    w.delayedSwapTimer = w.setTimeout( delayedSwap, 800 );
	    },
	    stopSwap    = function () {
		    console.log( 'Stopping swap' );
		    w.clearTimeout( w.delayedSwapTimer );
	    };

	return {
		alpha: delayedSwap,
		omega: stopSwap
	};

})( window, document, null );

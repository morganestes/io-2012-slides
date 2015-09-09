var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Scratching an Itch',
    subtitle: 'Taking the First Step to Becoming a WordPress Contributor',
    eventInfo: {
      title: 'WordCamp DFW',
      date: '9/12/2015'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: false, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: false, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in index.html instead.
    favIcon: 'images/wpmini-blue.png',
    webFonts: [
      //'Open Sans:regular,semibold,italic,italicsemibold',
      //'Source Code Pro'
    ],
    theme: ['wcdfw2015'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Morgan Estes',
    title: 'Web Engineer',
    company: '10up',
    //gplus: 'http://plus.google.com/1234567890',
    twitter: '@morganestes',
    www: 'https://www.morganestes.com',
    github: 'https://github.com/morganestes'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};


var assets = require('postcss-assets'),
    pxtorem = require('postcss-pxtorem');

var cssTaskOptions = {
    postcssPlugins: [
        assets({
            loadPaths: ['src/img/']
        }),
        require('postcss-font-magician')({
            variants: {
                'Open Sans': {
                    '300': ['woff, eot, woff2'],
                    '400 italic': ['woff2']
                }
            }
        }),
        pxtorem()
    ],

    sassOptions: { outputStyle: 'expanded', indentType: 'tab', indentWidth: '1' },

    autoprefixerOptions: {
        browsers: ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 11'],
        cascade: false
    },

    combineMqOptions: { beautify: true },
    
    cleanCSSOptions: { compatibility: 'ie11' }
};

module.exports = cssTaskOptions;
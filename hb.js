/**
 * Handlebars plugin for require.js
 * @author elwiz
 */
define(['underscore', 'handlebars'], function (_, Handlebars) {
    'use strict';

    return {
        load: function (name, parentRequire, onload, config) {

            // default configuration
            var hbc = {
                location: '',
                extension: 'html'
            };

            // import configuration from require
            if (config.hb) {
                hbc = _.extend(hbc, config.hb);
            }

            // use predefined template location
            if (hbc.location) {
                if (hbc.location.charAt(hbc.location.length - 1) !== '/') {
                    hbc.location += '/';
                }
                name = hbc.location + name;
            }

            // use predefined template extension
            if (hbc.extension) {
                if (hbc.extension.charAt(0) !== '.') {
                    hbc.extension = '.' + hbc.extension;
                }
                name += hbc.extension;
            }

            // use the text plugin to load the template source
            parentRequire(['text!' + name], function (template) {
                onload(Handlebars.compile(template));
            });
        }
    };
});

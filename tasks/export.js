/*
 * grunt-export
 * https://github.com/mahdaen/grunt-export
 *
 * Copyright (c) 2015 Nanang Mahdaen El Agung
 * Licensed under the MIT license.
 */

'use strict';

/* Using Node Import */
var exports = require('node-import');

module.exports = function (grunt) {
    grunt.registerMultiTask('export', 'Import javascript dependencies and export to file. Like concat, but it\'s accept inline files.', function () {
        /* Getting options */
        var options = this.options({
            exec: false,
            sync: true,

            export: true,
            uglify: true,
            uglifyOptions: null,
            sourcemap: true,

            verbose: false
        });

        /* Iterate file objects */
        this.files.forEach(function (fileobj) {
            /* Warn no destination and escape if no dest defined */
            if (!fileobj.dest) {
                grunt.log.warn('Destinations not found.');
                return;
            }

            /* Iterate each file */
            fileobj.src.map(function(file) {
                if (grunt.file.exists(file)) {
                    var exp = exports(file, {
                        exec: options.exec,
                        sync: options.sync,

                        export: options.export,
                        exportDir: fileobj.dest,
                        exportMin: options.uglify,
                        exportMap: options.sourcemap,
                        exportOptions: options.uglifyOptions
                    }, options.verbose);

                    if (exp) {
                        /* Log success message */
                        grunt.log.writeln('File "' + fileobj.dest + '/' + file + '" created.');
                    } else {
                        /* Warn unknow error */
                        grunt.log.warn('Unknown errors.');
                    }
                } else {
                    /* Warn no file found */
                    grunt.log.warn('Source file "' + file + '" not found.');
                }
            });
        });
    });
};

/*
 * grunt-export
 * https://github.com/mahdaen/grunt-export
 *
 * Copyright (c) 2015 Nanang Mahdaen El Agung
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        /* Cleanup tmp before running test */
        clean: {
            tests: ['tmp']
        },

        /* Export test */
        exports: {
            people: {
                options: {
                    verbose: true
                },
                files: {
                    'tmp': ['test/people.js']
                }
            }
        }
    });

    /* Load itself */
    grunt.loadTasks('tasks');

    /* Cleanup task */
    grunt.loadNpmTasks('grunt-contrib-clean');

    /* Register test task */
    grunt.registerTask('test', ['clean', 'exports']);

    /* Register default task */
    grunt.registerTask('default', ['test']);
};

# grunt-export v0.1.2

> Import javascript dependencies and export to file. Like concat, but it's accept inline files.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-export --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-export');
```

## The "export" task

### Overview
In your project's Gruntfile, add a section named `export` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  export: {
    options: {
      // Task options
    },
    your_target: {
      // Target dir and files.
    },
  },
});
```

### Options

#### options.exec
Type: `Boolean`
Default value: `false`

Execute scripts while exporting or not.

#### options.sync
Type: `Boolean`
Default value: `false`

Execute scripts in synchronus mode.

#### options.export
Type: `Boolean`
Default value: `true`

Export imported scripts or just execute the scripts.

#### options.uglify
Type: `Boolean`
Default value: `true`

Export the minified version to file using UglifyJS.

#### options.uglifyOptions
Type: `Object`
Default value: `null`

Uglify options that will be passed to UglifyJS

#### options.sourcemap
Type: `Boolean`
Default value: `true`

Export the sourcemap to file.

#### options.verbose
Type: `Boolean`
Default value: `false`

Logs all activity.

### Usage Examples

#### Default Options
In this example, task using default options and use verbose to logs all activity.

```js
grunt.initConfig({
  export: {
    test: {
      options: {
        verbose: true
      },
      files: {
        'tmp': ['test/people.js'],
      },
    }
  }
});
```

## Release History
* 2015-02-21        v0.1.2      "First release, follow the release version of `node-import`."

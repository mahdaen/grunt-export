# Grunt Export

Import javascript dependencies and export to file using `NodeImport`. Like a concat plugin, but it's accept inline files.
So we don't need to define all files in grunt config, also not only append the next scripts into previous scripts.
We can import files even though the import statement is inside a function block `function() {}`.

Since the basic function of `NodeImport` is to execute scripts, you also can run scripts using this plugin, but it's not
a main function of this plugin.

Reads the [NodeImport](https://github.com/mahdaen/node-import) to find out how the import and export works.

## Getting Started
This plugin requires Grunt `~0.4.5` and NodeImport `~0.1.3`.

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
In your project's Gruntfile, add a section named `exports` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  exports: {
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

#### options.async
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
  exports: {
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
* 2015-02-25        v0.1.7      "Updating NodeImport version."
* 2015-02-25        v0.1.6      "Fixing namespace and async orders. Renaming export to exports since it's and reserved word."
* 2015-02-24        v0.1.5      "Updating NodeImport version."
* 2015-02-24        v0.1.4      "Updating namespace variable getter."
* 2015-02-21        v0.1.3      "Fixing mistakes with `async` option."
* 2015-02-21        v0.1.2      "First release, follow the release version of `node-import`."

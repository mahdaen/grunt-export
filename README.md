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

#### options.beautify
Type: `Boolean`
Default value: `true`

Beautify the scripts.

#### options.noscript
Type: `Boolean`
Default value: `false`

Mark as non-javascript files.

#### options.formatter
Type: `Function`
Default value: `null`

Custom formatter to format/beautify the imported files.

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
* 2015-03-30        v0.9.0      "Adding support to concatenate non-javascript files."
* 2015-03-27        v0.8.0      "Updating NodeImport"
* 2015-03-08        v0.6.0      "Adding include() module - NodeImport"
* 2015-03-05        v0.5.0      "Fixing namespace and add return variables as object for imports.module()"
* 2015-03-05        v0.4.1      "Fixing source-map sources url mistake."
* 2015-03-05        v0.4.0      "Adding support to import scripts by call it inside a module."
* 2015-03-05        v0.3.1      "Fixing namespace conflict when using null-extension."
* 2015-03-05        v0.3.0      "Adding support to ignore file extension using plain object as namespace."
* 2015-02-26        v0.2.1      "Updating NodeImport."
* 2015-02-26        v0.2.0      "Updating NodeImport."
* 2015-02-26        v0.1.9      "Updating NodeImport."
* 2015-02-25        v0.1.8      "Updating NodeImport version."
* 2015-02-25        v0.1.7      "Updating NodeImport version."
* 2015-02-25        v0.1.6      "Fixing namespace and async orders. Renaming export to exports since it's and reserved word."
* 2015-02-24        v0.1.5      "Updating NodeImport version."
* 2015-02-24        v0.1.4      "Updating namespace variable getter."
* 2015-02-21        v0.1.3      "Fixing mistakes with `async` option."
* 2015-02-21        v0.1.2      "First release, follow the release version of `node-import`."

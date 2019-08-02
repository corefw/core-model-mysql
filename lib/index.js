/**
 * @file
 * Loads dependency modules and adds the namespace(s) for this Core Framework Module.
 *
 * @author Luke Chavers <luke@c2cschools.com>
 * @since 0.1.0
 * @version 1.0
 * @copyright 2019 C2C Schools, LLC
 * @license MIT
 */

"use strict";

// Because this is a Core Framework Module, the `Core`
// global singleton should already be loaded.
class MysqlModelsInitializer extends Core.cls( "Core.asset.module.Initializer" ) {

	/**
	 * Loads "Framework Dependencies", which are external modules that are structured as "Core Framework Modules".
	 *
	 * @public
	 * @static
	 * @param {Core.module.Loader} moduleLoader - The Core Framework Module loader.
	 * @returns {Promise}
	 */
	static async initFrameworkDependencies( moduleLoader ) {

		moduleLoader.load(
			[
				require( "@corefw/model" )
			]
		);

	}

	static async initExternalDependencies( assetManager ) {

		/*
		Am.registerDependencies( {
			"commander"      : () => { return require( "commander" ); 	   },
		} );

		// Add a few dependency aliases
		Am.addDependencyAliases( {
			"node-symbols" : "symbols",
		} );
		*/

	}

	static async registerNamespaces( assetManager ) {

		/*
		Am.registerNamespace(
			"Core.cli",
			[ __dirname, "../" ]
		);
		*/

	}

}

// Export the module initializer
module.exports = MysqlModelsInitializer;

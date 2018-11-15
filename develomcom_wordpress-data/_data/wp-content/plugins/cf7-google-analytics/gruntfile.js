module.exports = function( grunt ) {

	'use strict';
	var banner = '/**\n * <%= pkg.homepage %>\n * Copyright (c) <%= grunt.template.today("yyyy") %>\n * This file is generated automatically. Do not edit.\n */\n';
	// Project configuration
	grunt.initConfig( {

		pkg:    grunt.file.readJSON( 'package.json' ),

		addtextdomain: {
			options: {
				textdomain: 'woocommerce-customers-robly',
			},
			target: {
				files: {
					src: [ '*.php', '**/*.php', '!node_modules/**', '!php-tests/**', '!bin/**' ]
				}
			}
		},

		wp_readme_to_markdown: {
			your_target: {
				files: {
					'README.md': 'readme.txt'
				}
			},
		},

		makepot: {
			target: {
				options: {
					domainPath: '/languages',
					mainFile: 'cf7-google-analytics.php',
					potFilename: 'cf7-google-analytics.pot',
					potHeaders: {
						poedit: true,
						'x-poedit-keywordslist': true
					},
					type: 'wp-plugin',
					updateTimestamp: true
				}
			}
		},

		phpcs: {
			plugin_files: {
				src: ['**/*.php', '**/*.js',],
			},
			options: {
				bin: '/usr/local/bin/phpcs',
				standard: 'WordPress-Extra',
			}
		},

		uglify: {
			target: {
				files: {
					'js/cf7-google-analytics.min.js': ['js/cf7-google-analytics.js'],
					'js/admin.min.js': ['js/admin.js']
				}
			}
		}
	} );

	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-phpcs' );
	grunt.loadNpmTasks( 'grunt-wp-i18n' );
	grunt.loadNpmTasks( 'grunt-wp-readme-to-markdown' );
	grunt.registerTask( 'i18n', ['addtextdomain', 'makepot'] );
	grunt.registerTask( 'readme', ['wp_readme_to_markdown']);
	grunt.registerTask( 'default', ['i18n', 'uglify', 'i18n', 'readme',]);

	grunt.util.linefeed = '\n';

};

<?php
/*
 * Plugin Name: Ele Custom Skin
 * Version: 1.0.9
 * Description: Elementor Custom Skin for Posts and Archive Posts. You can create a skin as you want.
 * Plugin URI: https://www.eletemplator.com
 * Author: Liviu Duda
 * Author URI: https://www.leadpro.ro
 * Text Domain: elecustomskin
 * Domain Path: /languages
 * License: GPLv3
 * License URI: http://www.gnu.org/licenses/gpl-3.0
*/
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

define( 'ELECS_DIR', plugin_dir_path( __FILE__ ));
add_action( 'elementor_pro/init', 'elecs_elementor_init' );
function elecs_elementor_init(){
		//load templates types
	
	//require_once ELECS_DIR.'theme-builder/init.php';
	require_once ELECS_DIR.'theme-builder/init.php';

}

add_action('elementor/widgets/widgets_registered','elecs_add_skins');
function elecs_add_skins(){
	require_once ELECS_DIR.'skins/skin-custom.php';
}

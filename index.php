<?php
/**
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context = Timber::context();
$context['posts'] = new Timber\PostQuery();
$context['skills'] = [
	[
		'name' => 'TypeScript',
		'color' => '#007ACC',
	],
	[
		'name' => 'Django',
		'color' => '#092E20',
	],
	[
		'name' => 'React',
		'color' => '#4F5D95',
	],
	[
		'name' => 'VueJS',
		'color' => '#41B883',
	],
	[
		'name' => 'PHP',
		'color' => '#4F5D95',
	],
	[
		'name' => 'Laravel',
		'color' => '#FF2D20',
	],
	[
		'name' => 'NestJS',
		'color' => '#E0234E',
	],
	[
		'name' => 'React Native',
		'color' => '#61DAFB',
	],
	[
		'name' => 'Python',
		'color' => '#306998',
	],
];
$templates = array('index.twig');

if (is_home()) {
	array_unshift($templates, 'front-page.twig', 'home.twig');
}
Timber::render($templates, $context);

<?php

header('Content-Type: application/json; charset=utf-8');

include "images.php";


$keys  = array(
		's',
		'order',
		'orderby',
		'posts_per_page',
		'paged',
		'post_mime_type',
		'post_parent',
		'author',
		'post__in',
		'post__not_in',
		'year',
		'monthnum',
	);


$query = isset( $_REQUEST['query'] ) ? (array) $_REQUEST['query'] : array();
$query              = array_intersect_key( $query, array_flip( $keys ) );

$dataobj = new stdClass;

if ($_REQUEST['action'] == "query-attachments"){
	if (isset($query ["post__in"])) {
        $dataobj->peter= "aaa";
		$data = $images->getImage($query ["post__in"]);
	}
	else {
		$data = $images->getImages();
	}
}



$dataobj->success = true;
$dataobj->data = $data;

echo json_encode($dataobj);



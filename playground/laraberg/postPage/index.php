<?php


// Retrieve the raw POST data
$jsonData = file_get_contents('php://input');
// Decode the JSON data into a PHP associative array
$data = json_decode($jsonData, true);
// Check if decoding was successful
if ($data !== null) {
	
	
	$saveDataTitle = new stdClass;
	$saveDataTitle->raw = "ffdgh";
    $saveDataTitle->rendered = "ffdgh";
	
	$saveDataContent = new stdClass;
    $saveDataContent->raw =  $data['content'];
    $saveDataContent->rendered = "";
    $saveDataContent->protected = false;
    $saveDataContent->block_version = 1;
	
    
	
	$saveData = new stdClass;
	$saveData->id = $data['id'];
	$saveData->date = date("Y-m-d H:i:s");
	$saveData->date_gmt = date("Y-m-d H:i:s");
	$saveData->modified = date("Y-m-d H:i:s");
	$saveData->modified_gmt = date("Y-m-d H:i:s");
	$saveData->password = ""; 
    $saveData->slug = "";
    $saveData->status = "publish";
    $saveData->type = "page";
    $saveData->link = "";
	$saveData->title = $saveDataTitle;
	$saveData->content = $saveDataContent;
	$saveData->author = 1;
    $saveData->featured_media = 0;
    $saveData->parent = 0;
    $saveData->menu_order = 0;
    $saveData->comment_status = "closed";
    $saveData->ping_status = "closed";
    $saveData->template = "";
    $saveData->permalink_template = "https:\/\/bh.smokenetwork.nl\/%pagename%\/";
    $saveData->generated_slug = "ffdgh";
   
	
	
	echo json_encode($saveData);
	
   // Access the data and perform operations
   //$name = $data['name'];
   //$age = $data['age'];
   // Perform further processing or respond to the request
} else {
   // JSON decoding failed
   http_response_code(400); // Bad Request
   echo "Invalid JSON data";
}



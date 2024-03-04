<?php

function getSize($full, $height, $width, $url, $name, $end){
	$imageSize = new StdClass;
	$imageSize->height = $height;
	$imageSize->width = $width;
	if ($full) {
		$imageSize->url = $url.$name.$end;
	}
	else {
		$imageSize->url = $url.$name."-".$width."x".$height."".$end;
	}
	$imageSize->orientation = "landscape";
	
	return $imageSize;
}


function getSizes($url, $name, $end){
	$imageSizes = new stdClass;
	
	$imageSizes->thumbnail = getSize(false, 150, 150, $url, $name, $end );
	$imageSizes->medium = getSize(false, 169, 300, $url, $name, $end );
	$imageSizes->large = getSize(false, 576, 1024, $url, $name, $end );
	$imageSizes->full = getSize(true, 1080, 1920, $url, $name, $end );
	
	
	
	return $imageSizes;
}


$myImages = array();

$compat = new stdClass;
$compat->item = "";
$compat->meta = "";



$imageOne = new stdClass;
$imageOne->id = 1;
$imageOne->title = "Waitomo-Glowworm-Caves-in-Nieuw-Zeeland";
$imageOne->filename = "Waitomo-Glowworm-Caves-in-Nieuw-Zeeland.jpg";
$imageOne->url = "https://wp.smokenetwork.nl/wp-content/uploads/2024/03/Waitomo-Glowworm-Caves-in-Nieuw-Zeeland.jpg";
$imageOne->name = "waitomo-glowworm-caves-in-nieuw-zeeland";
$imageOne->mime = "image/jpeg";
$imageOne->type = "image";
$imageOne->subtype = "jpeg";
$imageOne->filesizeInBytes = 445514;
$imageOne->filesizeHumanReadable = "435 KB";
$imageOne->height = 1080;
$imageOne->width = 1920;
$imageOne->orientation = "landscape";
$imageOne->sizes = getSizes("https://wp.smokenetwork.nl/wp-content/uploads/2024/03/", "Waitomo-Glowworm-Caves-in-Nieuw-Zeeland", ".jpg");
$imageOne->compat = $compat;

$myImages[] = $imageOne;


$imageTwo = new stdClass;
$imageTwo->id = 2;
$imageTwo->title = "CachedImage_2736_1824_POS4";
$imageTwo->filename = "CachedImage_2736_1824_POS4-scaled.jpg";
$imageTwo->url = "https://wp.smokenetwork.nl/wp-content/uploads/2024/03/CachedImage_2736_1824_POS4-scaled.jpg";
$imageTwo->name = "cachedimage_2736_1824_pos4";
$imageTwo->mime = "image/jpeg";
$imageTwo->type = "image";
$imageTwo->subtype = "jpeg";
$imageTwo->filesizeInBytes = 171423;
$imageTwo->filesizeHumanReadable = "167 KB";
$imageTwo->height = 1707;
$imageTwo->width = 2560;
$imageTwo->orientation = "landscape";
$imageTwo->sizes = getSizes("https://wp.smokenetwork.nl/wp-content/uploads/2024/03/", "CachedImage_2736_1824_POS4", ".jpg");
$imageTwo->compat = $compat;

$myImages[] = $imageTwo;

$imageTree = new stdClass;
$imageTree->id = 3;
$imageTree->title = "woocommerce-placeholder";
$imageTree->filename = "woocommerce-placeholder.png";
$imageTree->url = "https://wp.smokenetwork.nl/wp-content/uploads/woocommerce-placeholder.png";
$imageTree->name = "woocommerce-placeholder";
$imageTree->mime = "image/png";
$imageTree->type = "image";
$imageTree->subtype = "png";
$imageTree->filesizeInBytes = 102644;
$imageTree->filesizeHumanReadable = "100 KB";
$imageTree->height = 1200;
$imageTree->width = 1200;
$imageTree->orientation = "landscape";
$imageTree->sizes = getSizes("https://wp.smokenetwork.nl/wp-content/uploads/", "woocommerce-placeholder", ".png");
$imageTree->compat = $compat;

$myImages[] = $imageTree;



$images = new OwnImages($myImages);


class OwnImages {

    public function __construct(
        public array $images, 
    ) {}

    public function getImages(){
        return $this->images;
    }

    public function getImage($indexs) {
        $selectedImages = array();
        foreach($indexs as $index) {
            foreach($this->images as $image) {
                if ($image->id == $index) {
                    $selectedImages[] = $image;
                }
            }
            

        }

        return $selectedImages;
    }

}
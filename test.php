<?php 
	
require_once 'vendor\autoload.php';

use WindowsAzure\Common\ServicesBuilder;
use WindowsAzure\Common\ServiceException;

// Create blob REST proxy.
$blobRestProxy = ServicesBuilder::getInstance()->createBlobService('DefaultEndpointsProtocol=https;AccountName=bucles;AccountKey=hICthWX31MNAzY6Ff51dHF4FAZrZ4IXKA0JBkzQ0ZHk2lc/NWfZC6m/a95fJ33WQeCW2ipNQ6Gj8Y9PH2I/rUA==');


try {
 
	$found = false;
	while(!$found){
		
		// List blobs.
		$blob_list = $blobRestProxy->listBlobs("clases");
		$blobs = $blob_list->getBlobs();
		
		foreach($blobs as $blob)
		{
			//echo $blob->getName().": ".$blob->getUrl()."<br />";
			if ($blob->getName() === "tecdemo.mp3"){
				echo $blob->getUrl();
				$found = true;
			}
		}
		sleep(1);
	}
}
catch(ServiceException $e){
    // Handle exception based on error codes and messages.
    // Error codes and messages are here: 
    // http://msdn.microsoft.com/library/azure/dd179439.aspx
    $code = $e->getCode();
    $error_message = $e->getMessage();
    //echo $code.": ".$error_message."<br />";
}
	?>
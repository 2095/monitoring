function jsonData($scope)
{
var Json_1 = {
"title":"Multiple Ajax Image Upload without Refreshing Page using Jquery.", 
"url":"http://www.9lessons.info/2013/08/multiple-ajax-image-upload-refreshing.html",
"description":"Some Text",
"time":"Tuesday, August 6, 2013" ,
"author":"Srinivas Tamada"
};
var Json_2 = { 
"title":"Wall Script 6.0", 
"url":"http://www.9lessons.info/2013/07/wall-script.html",
"description":"Some Text",
"time":"MONDAY, JULY 29, 2013" ,
"author":"Srinivas Tamada"
};
var Json_3 = {"title":"Simple Drop Down Menu with Jquery and CSS", 
"url":"http://www.9lessons.info/2012/06/simple-drop-down-menu-with-jquery-and.html",
"description":"Some Text",
"time":"WEDNESDAY, JUNE 20, 2012" ,
"author":"Ravi Tamada"
};



$scope.getData = function(){
$scope.someJson = [Json_1,Json_2,Json_3];
}
}
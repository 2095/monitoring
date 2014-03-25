var Data = function($scope)
{
 $scope.getData = function(){
    $scope.window.push($http.get('someData.json').success(function(response) {
        return response.data;)
 }
}

angular.module('baabtra').service('addMenu',['$http','$alert','bbConfig',function addMenu($http,$alert,bbConfig) {
this.addMenuDetails=function($scope)
    {
      $http({ //headers: {'Content-Type': 'application/json; charset=utf-8'},
            method: 'post',
            url: bbConfig.BWS+'AddMenus/',
            data:{'menu':$scope.menu},
            contentType:'application/json; charset=UTF-8',
           }).
              success(function(data, status, headers, config) { //success respond from server
                 if (data=="success")
          {
            $alert({title: 'Success!', type:'success', content: 'Menus Insert Successfuly..',animation:'am-fade',duration:'3', placement: 'top-right', template: 'views/ui/angular-strap/alert.tpl.html', show: true});
          }              }).
              error(function(data, status, headers, config) {
             });
    };

    this.FnGetAllMenus=function ($scope,type)//To Load All menus of loded user
      { 
        $http({
          method: 'post',
          url: bbConfig.BWS+'GetAllMenus/',
          data: {'rm_id':$scope.userRoleMappingId,'type':type},
          contentType   : 'application/json; charset=UTF-8',
        }).
        success(function(data, status, headers, config) {
          $scope.allMenus=angular.fromJson(JSON.parse(data));//Converting the result to json object
          console.log($scope.allMenus);
        }).
        error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
               // or server returns response with an error status.
        }); 
      };

}]);
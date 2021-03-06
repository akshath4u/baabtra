angular.module('baabtra').service('addCourseService',['$http','bbConfig','$upload','$state',function addCourseService($http,bbConfig,$upload,$state) {

	
	this.saveCourseObject=function ($scope, courseDetails, keyObj, courseId, toState){ // functon that call web service to add a comapny role
	 	$http({
	 		url: bbConfig.BWS+'saveCourseObject/',
	 		data: {"courseObj":courseDetails, "keyObj":keyObj, "courseId":courseId},
	 		method: "POST",
	 		withCredentials: false,
	 		contentType:"application/json",
	 		dataType:"json",
	 	}).
	 	success(function(data, status, headers, config) {
	 			var result=angular.fromJson(JSON.parse(data));
	 			$scope.courseId = result.str;
	 			$scope.currentState=toState;
	 			$state.go(toState,{'courseId':$scope.courseId});//go to next state,after completing each step
               }).
	 	error(function(data, status, headers, config) {
	 		
	 	});  

	 };

	 this.saveCourseTimelineElement = function ($scope, courseId, courseElement){ 
	 	$http({
	 		url: bbConfig.BWS+'saveCourseTimelineEelement/',
	 		data: {"courseId":courseId, "courseElement":courseElement},
	 		method: "POST",
	 		withCredentials: false,
	 		contentType:"application/json",
	 		dataType:"json",
	 	}).
	 	success(function(data, status, headers, config) {
	 			var result=angular.fromJson(JSON.parse(data));
               }).
	 	error(function(data, status, headers, config) {
	 		
	 	});  

	 };
	
	this.editCourseTimelineElement = function (courseId, courseElemName, tlPoint, courseObj, rmId){ // functon that call web service to remove course element
	 	$http({
	 		url: bbConfig.BWS+'editCourseElement/',
	 		data: {"courseId":courseId, "courseElemName":courseElemName, "tlPoint":tlPoint,"courseObj":courseObj, "rmId":rmId},
	 		method: "POST",
	 		withCredentials: false,
	 		contentType:"application/json",
	 		dataType:"json",
	 	}).
	 	success(function(data, status, headers, config) {
	 			//var result=angular.fromJson(JSON.parse(data));
	 		}).
	 	error(function(data, status, headers, config) {
	 		
	 	});
	 };

	 this.removeCourseTimelineElement = function (courseId, courseElemName, tlPoint, index, rmId){ // functon that call web service to remove course element
	 	$http({
	 		url: bbConfig.BWS+'removeCourseElement/',
	 		data: {"courseId":courseId, "courseElemName":courseElemName, "tlPoint":tlPoint, "index":index, "rmId":rmId},
	 		method: "POST",
	 		withCredentials: false,
	 		contentType:"application/json",
	 		dataType:"json",
	 	}).
	 	success(function(data, status, headers, config) {
	 			//var result=angular.fromJson(JSON.parse(data));
	 		}).
	 	error(function(data, status, headers, config) {
	 		
	 	});  

	 };

	 this.fnCourseFileUpload = function (fileToBeUpload, pathToBeSave){ // functon that call web service to add a comapny role
	 	var promise=$upload.upload({
           url: bbConfig.BWS+'CourseFileUpload/',
           file: fileToBeUpload,
           data: {'pathToBeSave':pathToBeSave},
           method: 'POST',
           withCredentials: false,
           contentType:'application/json',
           dataType:'json',
           }).
	 	success(function(data, status, headers, config) {
	 			return data;
               }).
	 	error(function(data, status, headers, config) {
	 		
	 	});
	 	return promise;
	 };

	 this.fnLoadCourseDetails = function ($scope, courseId){ // this function load in-completed coursers
	 	var promise = $http({
		url: bbConfig.BWS+'loadCourseDetails/',
		method: "POST",
		data:{'courseId':courseId},
		withCredentials: false,
		contentType:"application/json",
		dataType:"json",
	}).
	success(function(data, status, headers, config) {
		var result=angular.fromJson(JSON.parse(data));
		return $scope.course = result[0];
	}).
	error(function(data, status, headers, config) {

	});
	return promise;
};

this.fnFetchCourseList = function (courseFetchData){ // this function load completed coursers
	 	var promise = $http({
		url: bbConfig.BWS+'FetchCourseList/',
		method: "POST",
		data:angular.toJson(courseFetchData),
		withCredentials: false,
		contentType:"application/json",
		dataType:"json",
	}).
	success(function(data, status, headers, config) {
		return data;
	}).
	error(function(data, status, headers, config) {

	});
	return promise;
};

}]);
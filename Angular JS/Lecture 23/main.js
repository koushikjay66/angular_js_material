/* 
 * To remove the # part from the URL we need to do this 4 steps by steps thing. 
 * 1. We need to enable HTML5 routing. This is done through the service from 
 * named $locationProvider. and this location provider object has a method 
 * named html5Mode(). It takes a boolean argument either true or false if you do not 
 * want that. 
 *
 * 2. We need to remove the # part from the a tag. 
 *
 * 3. Third step is simple and I have done it before. We need to configure and enable 
 * URL rewriting rule in the .htaccess / web.config file . 
 *
 *
 */

var app= angular.module("routing_app", ["ngRoute"])
			.config(function($routeProvider) {
				$routeProvider
					.when("/home", {
						templateUrl: "templates/home.html", 
						controller: "home_controller"
					})
					.when("/page1", {
						templateUrl: "templates/page1.html", 
						controller: "page1_controller"
					})
					.when("/page2", {
						templateUrl: "templates/page2.html", 
						controller: "page2_controller"
					})
			}).controller("home_controller", function($scope){
				console.log("haha");
				$scope.message="Welcome to Home Page";

			}).controller("page1_controller", function($scope){
				$scope.message="Welcome to Page 1";

			}).controller("page2_controller", function($scope){
				$scope.message="Welcome to Page 2";

			});
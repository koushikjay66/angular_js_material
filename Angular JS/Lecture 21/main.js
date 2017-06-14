/*
*
*
*/

var demoapp= angular.module("demoapp", [])
				.controller('demoController',  function($scope, $location, $anchorScroll){
					$scope.scrollTo=function(scrollLocation){
						$location.hash(scrollLocation);
						console.log("I have been called");
						$anchorScroll();
					};
				});
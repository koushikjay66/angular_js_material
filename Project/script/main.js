angular.module("join_body", ["ngMaterial"]).controller("join_body_controller", function($scope, $http, $mdDialog){

	$scope.login=function(){

		/*
		This part verifies email address. 
		After email address is verified then 
		*/
		var atpos = $scope.login_mail.indexOf("@");
		var dotpos = $scope.login_mail.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=$scope.login_mail.length) {
        	$scope.email_error="Invalid Email Address";
        	
    	}else{

    		if($scope.login_pass.length<5){

    			$scope.pass_error="Password must be atleast 5 lengths long";
    		}else{
    			/*
    			Now i know that everything is great , email is valid and password is length checked.
    			It is time to request ajax
    			*/

    			
		    	$http({
				        method : "POST",
				        url : "http://localhost/OfficeApplication/index.php", 
				        data: "form=login&email="+$scope.login_mail+"&pass="+$scope.login_pass,
				        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

		   			 }).then(function mySuccess(response) {
			        	$scope.myWelcome = response.data;
			        	console.log($scope.myWelcome);
	   				 }, function myError(response) {
	       				 $scope.myWelcome = response.statusText;
	       				 console.log($scope.myWelcome);
	    			});

	    		}
	    		

	    	}

			
		};


	$scope.signup=function(){
			$http({
				        method : "POST",
				        url : "http://localhost/OfficeApplication/index.php", 
				        data: "form=signup&signup_mail="+$scope.signup_mail+"&first_name="+$scope.first_name+"&last_name="+$scope.last_name,
				        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

		   			 }).then(function mySuccess(response) {
			        	$scope.myWelcome = response.data;
			        	console.log($scope.myWelcome);
	   				 }, function myError(response) {
	       				 $scope.myWelcome = response.statusText;
	       				 console.log($scope.myWelcome);
	    			});

	};

	
});
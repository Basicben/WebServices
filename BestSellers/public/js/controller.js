var BestSellersApp = angular.module('BestSellersApp',[]);

BestSellersApp.controller('mainCntrl',function($scope,$http){
	$scope.bookTab = 1;

	$scope.bookList = null;
	$scope.booksByMonth = null;
	$scope.bookById = null;

	$scope.getAllBooks = function(){
		if($scope.bookList == null){
			$http.get('http://localhost:8080/bestsellers').
			  success(function(data, status, headers, config) {
			    // this callback will be called asynchronously
			    // when the response is available
			    console.log('Success : data',data);
			    $scope.bookList = data.books;
			  }).
			  error(function(data, status, headers, config) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			    console.log('Error : status',status,'headers',headers);
			  });
		}
	}

	$scope.getAllBooks();

	$scope.getBookById = function(idNumber){
		if(idNumber != null && idNumber > 0){
			$http.get('http://localhost:8080/getbook?bookId=' + idNumber).
			  success(function(data, status, headers, config) {
			    // this callback will be called asynchronously
			    // when the response is available
			    console.log('Success : data',data);
			    $scope.bookById = data;
			  }).
			  error(function(data, status, headers, config) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			    console.log('Error : status',status,'headers',headers);
			  });
		}
	}

	$scope.getBookByMonth = function(monthNum){
		if(monthNum != null && monthNum > 0){
			$http.get('http://localhost:8080/getbookbymonth/'+ monthNum ).
			  success(function(data, status, headers, config) {
			    // this callback will be called asynchronously
			    // when the response is available
			    console.log('Success : data',data);
			    $scope.booksByMonth = data;
			  }).
			  error(function(data, status, headers, config) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			    console.log('Error : status',status,'headers',headers);
			  });
		}
	}

});
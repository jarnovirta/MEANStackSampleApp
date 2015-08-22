
angular.module('app').controller('PostsCtrl', function($scope, PostsSvc) {
	$scope.$on('ws:new_post', function (_, post) {
		$scope.$apply(function() {
			$scope.posts.unshift(post);
		});
	});
	$scope.addPost = function() {
		if ($scope.postBody) {
			PostsSvc.create({
				body: $scope.postBody
			}).success(function(post) {
				$scope.postBody = null;
			});
			
		}
	};
	PostsSvc.fetch()
	.success(function (posts) {
		$scope.posts = posts;

	})
	.error(function (err) {
		console.log(err);
	});
	
});
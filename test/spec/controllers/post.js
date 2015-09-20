describe('Controller: PostCtrl', function () {

  beforeEach(module('bfsApp'));

  var PostCtrl,
    scope;
	

  beforeEach(inject(function ($controller, $rootScope,$httpBackend, $routeParams) {
    scope = $rootScope.$new();
	routeParams = $routeParams;
	routeParams.postid = 1;	
    httpMock = $httpBackend;
    httpMock.expectGET(
	  "http://jsonplaceholder.typicode.com/posts/1").respond(
	 {
	  "userId": 1,
	  "id": 1,
	  "title": "post title 1",
	  "body": "post body 1"
	}
    );
	
	
    httpMock.expectGET(
	  "http://jsonplaceholder.typicode.com/posts/1/comments/").respond(
	 [
	  {
		"postId": 1,
		"id": 1,
		"name": "Eliseo",
		"email": "Eliseo@gardner.biz",
		"body": "comments 1"
	  },
	  {    
		"postId": 1,
		"id": 2,
		"name": "Angel",
		"email": "angel@gardner.biz",
		"body": "comments 2"
	  }]
    );
		
    PostCtrl = $controller('PostCtrl', {
      $scope: scope,
	  $routeParams : routeParams
    });
	httpMock.flush();

  }));
    
  // Test cases	
  it('should attach a list of comments  to the scope', function () {
    expect(scope.comments.length).toBe(2);
  });
    
  it('should retrieve the post details and its comments', function () {
    expect(scope.post.title).toBe("post title 1");
	expect(scope.post.body).toBe("post body 1");
	expect(scope.comments[0].name).toBe("Eliseo");
	expect(scope.comments[0].body).toBe("comments 1");
  });
});

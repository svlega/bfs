describe('Controller: MainCtrl', function () {

  beforeEach(module('bfsApp'));

  var MainCtrl,
    scope;
	
   beforeEach(inject(function ($controller, $rootScope,$httpBackend) {
   scope = $rootScope.$new();
   httpMock = $httpBackend;
   httpMock.expectGET(
	  "http://jsonplaceholder.typicode.com/posts/").respond(
  [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }]  
    );
	
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
	httpMock.flush();
  }));

  // Test cases
  it('should attach a list of posts to the scope', function () {
    expect(scope.postlist.length).toBe(3);
  });
});

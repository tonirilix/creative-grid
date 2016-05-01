"use strict";
var name_list_service_1 = require('./name-list.service');
function main() {
    describe('NameList Service', function () {
        var nameListService;
        beforeEach(function () {
            nameListService = new name_list_service_1.NameListService;
        });
        it('should return the list of names', function () {
            var names = nameListService.get();
            expect(names).toEqual(jasmine.any(Array));
        });
    });
}
exports.main = main;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0NBQThCLHFCQUFxQixDQUFDLENBQUE7QUFFcEQ7SUFDRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDM0IsSUFBSSxlQUFnQyxDQUFDO1FBRXJDLFVBQVUsQ0FBQztZQUNULGVBQWUsR0FBRyxJQUFJLG1DQUFlLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsaUNBQWlDLEVBQUU7WUFDcEMsSUFBSSxLQUFLLEdBQUcsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBYmUsWUFBSSxPQWFuQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2Uuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmFtZUxpc3RTZXJ2aWNlfSBmcm9tICcuL25hbWUtbGlzdC5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gIGRlc2NyaWJlKCdOYW1lTGlzdCBTZXJ2aWNlJywgKCkgPT4ge1xuICAgIGxldCBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgbmFtZUxpc3RTZXJ2aWNlID0gbmV3IE5hbWVMaXN0U2VydmljZTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRoZSBsaXN0IG9mIG5hbWVzJywgKCkgPT4ge1xuICAgICAgbGV0IG5hbWVzID0gbmFtZUxpc3RTZXJ2aWNlLmdldCgpO1xuICAgICAgZXhwZWN0KG5hbWVzKS50b0VxdWFsKGphc21pbmUuYW55KEFycmF5KSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl19

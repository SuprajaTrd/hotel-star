angular.module('directory.services', [])

    .factory('EmployeeService', function($q) {

        var employees = [
            {"id": 1, "firstName": "Mr.Satya", "lastName": "Narayanan", "managerId": 0, "managerName": "", "reports": 4, "title": "General Manager", "department": "", "cellPhone": "9807654671", "officePhone": "044-2336781", "email": "satyan@gmail.com", "city": "Chennai, Tamil Nadu", "pic": "James_King.jpg", "twitterId": "@satyan", "blog": "http://coenraets.org"},
            {"id": 2, "firstName": "Mrs.Priya", "lastName": "", "managerId": 1, "managerName": "Mr.Satya Narayanan", "reports": 2, "title": "Manager of Accounts Department", "department": "Accounts", "cellPhone": "9807654672", "officePhone": "044-2336782", "email": "priya@gmail.com", "city": "Chennai, Tamil Nadu", "pic": "Julie_Taylor.jpg", "twitterId": "@priya", "blog": "http://coenraets.org"},
            {"id": 3, "firstName": "Mr.Vasanthan", "lastName": "", "managerId": 1, "managerName": "Mr.Satya Narayanan", "reports": 0, "title": "Receptionist", "department": "Reception", "cellPhone": "9807654673", "officePhone": "044-2336783", "email": "vasanth@gmail.com", "city": "Chennai, Tamil Nadu", "pic": "Eugene_Lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
            {"id": 4, "firstName": "Ms. Anu", "lastName": "Joshi", "managerId": 1, "managerName": "Mr.Satya Narayanan", "reports": 3, "title": "Manager of Kitchen Department", "department": "Kitchen", "cellPhone": "9807654674", "officePhone": "044-2336784", "email": "anujoshi@gmail.com", "city": "Chennai, Tamil Nadu", "pic": "Kathleen_Byrne.jpg", "twitterId": "@anujoshi", "blog": "http://coenraets.org"},
            {"id": 5, "firstName": "Mr. Deva", "lastName": "Sagayam", "managerId": 1, "managerName": "Mr.Satya Narayanan", "reports": 2, "title": "Manager of Security Department", "department": "Security", "cellPhone": "9807654675", "officePhone": "044-2336785", "email": "devas@gmail.com", "city": "Chennai, Tamil Nadu", "pic": "Ray_Moore.jpg", "twitterId": "@devas", "blog": "http://coenraets.org"},
            {"id": 6, "firstName": "Ms. Maha", "lastName": "Lakshmi", "managerId": 4, "managerName": "Ms. Anu Joshi", "reports": 0, "title": "Chef", "department": "Kitchen", "cellPhone": "9807654676", "officePhone": "044-2336786", "email": "mahal@gmail.com", "city": "Chennai, Tamil Nadu", "pic": "Paula_Gates.jpg", "twitterId": "@mahal", "blog": "http://coenraets.org"},
            {"id": 7, "firstName": "Mr. Santhosh", "lastName": "Kanna", "managerId": 4, "managerName": "Ms. Anu Joshi", "reports": 0, "title": "Chef", "department": "Kitchen", "cellPhone": "9807654677", "officePhone": "044-2336787", "email": "sandyks@fakemail.com", "city": "Chennai, Tamil Nadu", "pic": "Paul_Jones.jpg", "twitterId": "@sandyk", "blog": "http://coenraets.org"},
            {"id": 8, "firstName": "Mrs. Dhivya", "lastName": "Sri", "managerId": 2, "managerName": "Mrs.Priya", "reports": 0, "title": "Accounts Assisstant", "department": "Accounts", "cellPhone": "9807654678", "officePhone": "044-2336788", "email": "dhivyas@gmail.com", "city": "Chennai, Tamil Nadu", "pic": "Lisa_Wong.jpg", "twitterId": "@dhivyas", "blog": "http://coenraets.org"},
            {"id": 9, "firstName": "Mr. Thirumalai", "lastName": "Raj", "managerId": 2, "managerName": "Mrs.Priya", "reports": 0, "title": "Cashier", "department": "Accounts", "cellPhone": "9807654679", "officePhone": " 044-2336789", "email": "thirudrakeraj@gmail.com", "city": "Chennai, Tamil Nadu", "pic": "Gary_Donovan.jpg", "twitterId": "@thirudrake", "blog": "http://coenraets.org"},
            {"id": 10, "firstName": "Mr. Karthick", "lastName": "", "managerId": 5, "managerName": "Mr. Deva Sagayam", "reports": 0, "title": "Security guard", "department": "Security", "cellPhone": "9807654680", "officePhone": "044-2336790", "email": "karthick@gmail.com", "city": "Chennai, Tamil Nadu", "pic": "John_Williams.jpg", "twitterId": "@karthicksk", "blog": "http://coenraets.org"},
            {"id": 11, "firstName": "Mrs. Annie", "lastName": "Mariya", "managerId": 5, "managerName": "Mr. Deva Sagayam", "reports": 0, "title": "Security guard", "department": "Security", "cellPhone": "9807654681", "officePhone": "044-2336791", "email": "anniem@gmail.com", "city": "Chennai, Tamil Nadu", "pic": "Amy_Jones.jpg", "twitterId": "@anniem", "blog": "http://coenraets.org"},
            {"id": 12, "firstName": "Mr. Avinash", "lastName": "Kumar", "managerId": 4, "managerName": "Ms. Anu Joshi", "reports": 0, "title": "Supervisor", "department": "Kitchen", "cellPhone": "9807654682", "officePhone": "044-2336792", "email": "avikumar@gmail.com", "city": "Chennai, Tamil Nadu", "pic": "Steven_Wells.jpg", "twitterId": "@avikumar", "blog": "http://coenraets.org"}
        ];

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(employees);
                return deferred.promise;
            },

            findById: function(employeeId) {
                var deferred = $q.defer();
                var employee = employees[employeeId - 1];
                deferred.resolve(employee);
                return deferred.promise;
            },

            findByName: function(searchKey) {
                var deferred = $q.defer();
                var results = employees.filter(function(element) {
                    var fullName = element.firstName + " " + element.lastName;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
                deferred.resolve(results);
                return deferred.promise;
            },

            findByManager: function (managerId) {
                var deferred = $q.defer(),
                    results = employees.filter(function (element) {
                        return parseInt(managerId) === element.managerId;
                    });
                deferred.resolve(results);
                return deferred.promise;
            }

        }

    });
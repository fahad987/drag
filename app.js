/**
 * Created by Fahad Rehman on 4/13/2016.
 */
//
// var myAppModule = angular.module('cardDemo1', ['ngMaterial']);
//function allowDrop(ev) {
// ev.preventDefault();
//}
//
//function drag(ev) {
// ev.dataTransfer.setData("text", ev.target.id);
//}
//
//function drop(ev) {
// ev.preventDefault();
// var data = ev.dataTransfer.getData("text");
// ev.target.appendChild(document.getElementById(data));
//}

//myAppModule.controller('MyController', function($scope) {
// $scope.items = ["One", "Two", "Three"];
//
// $scope.sortableOptions = {
//  update: function(e, ui) {},
//  axis: 'x'
// };
//});



angular.module('aa' ,['ngMaterial','angular-sortable-view'])
    .controller("aaa",function($scope)
    {

     $scope.arr = ["dsfsdfdsf","dfrdsfdsaf","adsfdsfs"];
     $scope.arr1 = ["dsfsdfdsf","dfrdsfdsaf","adsfdsfs"];
    $scope.arr2 =["bsmndbm","msdn,ms","msndm"];
     $scope.arr3 = ["jsbdjb","nsbsnm","bsdbn"];

     /*$scope.modelArray=[  ];
     $scope.modelArray1=[  ];
     $scope.modelArray2=[  ];
     $scope.modelArray3=[  ];
     console.log($scope.modelArray);
     console.log($scope.modelArray1);

     $scope.addTask=function(val1)
     {
      $scope.modelArray.push(val1);

     };
         //.controller("homeController",function($scope)
         //{*/
         //
         //});
    });

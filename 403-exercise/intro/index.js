"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var ID = response.data.ID;
    var title = response.data.Title;
    var completed = response.data.finished;
    console.log("\n        Todo with ID: " + ID + "\n        Has a title of " + title + "\n        Is is done? " + completed + "\n    ");
});

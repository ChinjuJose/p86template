var grades = [];
var updateScores = function () {
    var val = getItemList(grades);
    document.getElementById("scores").value = val;
    document.getElementById("").value = "";
    document.getElementById("").value = "";
    document.getElementById("").focus();
}
var addClick = function () {
    var last = document.getElementById("studentName").value;
    var score = parseFloat(document.getElementById('score').value);
    grades.push([last, score]);
    updateScores();
    document.getElementById("averageScore").value = getAverageScore(grades);
}

var getItemList = function (itemList) {
    if (itemList.length == 0) {
        return "";
    }
    var list = "";
    for (var i = 0; i < itemList.length; i++) {
        var current = itemList[i];
        for (var attribute in current) {
            list += current[attribute] + ", ";
        }
        list += "\n";
    }
    return list;
}

function getAverageScore(grades) {

    var numberOfStudents = grades.length;
    var sum = 0;
    if (numberOfStudents > 0) {
        for (var i = 0; i < numberOfStudents; i++) {
            sum += grades[i][1];
        }
        return sum / numberOfStudents;
    }
    return 0;
}

function clearClick() {
    document.getElementById("form").reset();
    document.getElementById("averageScore").value = "";
    grades.splice(0, grades.length);
}

var sortClick = function () {
    grades.();
    updateScores();
}

window.onload = function () {
    document.getElementById("addButton").onclick = addClick;
    document.getElementById("sortButton").onclick = sortClick;
    document.getElementById("studentName").focus();
}


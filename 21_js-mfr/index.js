
// Jabir Chowdhury
// Softdev2 pd06
// K21 --  Onions, Bell Peppers, and Celery, Oh My!  JS and the Holy Trinity
// 2019-04-29

function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
    if (request.status == 200)
        return request.responseText;
};

var data =JSON.parse(readJSON("data.json"));
var black = data.reduce(function(a,b) {
    if(b.black_num=="0"){
	return a
    }
    return a + b.black_num
},0)

var senior = data.filter(function(n) {
    return n.grade12 >0})

var male = data.filter(function(n) {
    return n.male_per > n.female_per})

var blackNum = document.getElementById("black")
blackNum.innerHTML = black
var numSenior = document.getElementById("senior")
numSenior.innerHTML = senior.length
var numMale = document.getElementById("male")
numMale.innerHTML = male.length

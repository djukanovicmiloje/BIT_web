var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var a_ = [];
for (i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        a_[a_.length] = a[i];
    }
}
console.log(a_);

var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var p;
for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        for (var j = i; j < a.length - 1; j++) {
            p = a[j];
            a[j] = a[j + 1];
            a[j + 1] = p;
        }
        i--;
        a.length--;
    }
}
console.log(a);

var e = 78;
var p = 30;
var a = [2, -2, 33, 12, 5, 8];
var a_1 = [];
if (p > a.length) console.log("error");
else {
    for (var i = 0; i < a.length; i++) {
        if (i === p) {
            a_1[a_1.length] = e;
        }
        a_1[a_1.length] = a[i];
    }
    console.log(a_1);
}
var string = "";
for (var i = 0; i < 3; i++) {
    for (var j = 0; i < 4; j++) {
        if (j)
    }
}

var index = 0
var string = ""
var velicina = 7
for (index = 0; index < velicina; index++) {
    string = string + "*"

}

for (index = 0; index < velicina; index++) {
    console.log(string)
}

var string;
var size = 15;


for (var i = 0; i < size; i++) {
    string = "";
    for (var j = 0; j < size / 2; j++) {
        if (j < i) {
            string += "*";
        }
    }
}









var string = "";
var string_1 = "";

var size = 10;
for (var i = 0; i < size; i++) {
    string_1 += "* ";
    string += string_1 + "\n";
}
console.log(string);
















var string = "";
var size = 10;
for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        if (j > i) string += " ";
        else string += "* ";
    }
    string += "\n";
}
console.log(string);
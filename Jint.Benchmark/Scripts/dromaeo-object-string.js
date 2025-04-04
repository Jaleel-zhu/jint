﻿startTest("dromaeo-object-string", 'ef8605c3');

// Try to force real results
var ret;
var num = 5000;

// TESTS: String concatenation

test("Concat String", function () {
    var str = "";
    for (var i = 0; i < num; i++)
        str += "a";
    ret = str;
});

test("Concat String Object", function () {
    var str = new String();
    for (var i = 0; i < num; i++)
        str += "a";
    ret = str;
});

test("Concat String from charCode", function () {
    var str = "";
    for (var i = 0; i < num / 2; i++)
        str += String.fromCharCode(97);
    ret = str;
});

test("Array String Join", function () {
    var str = [];
    for (var i = 0; i < num / 2; i++)
        str.push("a");
    ret = str.join("");
});

var ostr = [], tmp, tmp2, num = 5000, tmpstr;

for (var i = 0; i < 16384; i++)
    ostr.push(String.fromCharCode((25 * Math.random()) + 97));

ostr = ostr.join("");
ostr += ostr;
ostr += ostr;

var str;
var i = 52288;

prep(function () {
    str = new String(ostr);
});

// TESTS: split
test("String Split", function () {
    ret = str.split("");
});

prep(function () {
    tmpstr = str;
    tmpstr += tmpstr;
    tmpstr += tmpstr;
    tmpstr += tmpstr;
    tmpstr += tmpstr;
});

test("String Split on Char", function () {
    ret = tmpstr.split("a");
});

prep(function () {
    str += str;
});

// TESTS: characters

test("charAt", function () {
    for (var j = 0; j < num; j++) {
        ret = str.charAt(0);
        ret = str.charAt(str.length - 1);
        ret = str.charAt(15000);
        ret = str.charAt(12000);
    }
});

test("[Number]", function () {
    for (var j = 0; j < num; j++) {
        ret = str[0];
        ret = str[str.length - 1];
        ret = str[15000];
        ret = str[10000];
        ret = str[5000];
    }
});

test("charCodeAt", function () {
    for (var j = 0; j < num; j++) {
        ret = str.charCodeAt(0);
        ret = str.charCodeAt(str.length - 1);
        ret = str.charCodeAt(15000);
        ret = str.charCodeAt(10000);
        ret = str.charCodeAt(5000);
    }
});

// TESTS: indexOf

test("indexOf", function () {
    for (var j = 0; j < num; j++) {
        ret = str.indexOf("a");
        ret = str.indexOf("b");
        ret = str.indexOf("c");
        ret = str.indexOf("d");
    }
});

test("lastIndexOf", function () {
    for (var j = 0; j < num; j++) {
        ret = str.lastIndexOf("a");
        ret = str.lastIndexOf("b");
        ret = str.lastIndexOf("c");
        ret = str.lastIndexOf("d");
    }
});

// TESTS: slice

test("slice", function () {
    for (var j = 0; j < num; j++) {
        ret = str.slice(0);
        ret = str.slice(0, 5);
        ret = str.slice(-1);
        ret = str.slice(-6, -1);
        ret = str.slice(15000, 15005);
        ret = str.slice(12000, -1);
    }
});

// TESTS: substr

test("substr", function () {
    for (var j = 0; j < num; j++) {
        ret = str.substr(0);
        ret = str.substr(0, 5);
        ret = str.substr(-1);
        ret = str.substr(-6, 1);
        ret = str.substr(15000, 5);
        ret = str.substr(12000, 5);
    }
});

// TESTS: substring

test("substring", function () {
    for (var j = 0; j < num; j++) {
        ret = str.substring(0);
        ret = str.substring(0, 5);
        ret = str.substring(-1);
        ret = str.substring(-6, -1);
        ret = str.substring(15000, 15005);
        ret = str.substring(12000, -1);
    }
});

// TESTS: toLower/UpperCase

test("toLowerCase", function () {
    for (var j = 0; j < num / 1000; j++) {
        ret = str.toLowerCase();
    }
});

test("toUpperCase", function () {
    for (var j = 0; j < num / 1000; j++) {
        ret = str.toUpperCase();
    }
});

// TESTS: comparing
prep(function () {
    tmp = str;
    tmp2 = str;
});

test("comparing", function () {
    tmp = "a" + tmp + "a";
    tmp2 = "a" + tmp2 + "a";
    for (var j = 0; j < num / 1000; j++) {
        ret = tmp == tmp2;
        ret = tmp < tmp2;
        ret = tmp > tmp2;
    }
});

endTest();
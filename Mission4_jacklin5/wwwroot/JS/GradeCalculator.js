﻿/*/*document.getElementById("btnSend").addEventListener("click", function () {*/
$("#btnSend").click(function () {
    /*  var letterGrade;*/

    var overallGrade = (parseInt($("#Assignments").val() * 0.5) + parseInt($("#Project").val() * .1)
        + parseInt(($("#Quiz").val() * 0.1)) + parseInt(($("#Midterm").val() * 0.1))
        + parseInt(($("#Final").val() * 0.1)) + parseInt(($("#INTEX").val() * 0.1)))/100;

    if (overallGrade >= 0.94) {
        letterGrade = 'A'
    }
    else if (overallGrade >= 0.9) {
        letterGrade = 'A-'
    }
    else if (overallGrade >= 0.87) {
        letterGrade = 'B+'
    }
    else if (overallGrade >= 0.84) {
        letterGrade = 'B'
    }
    else if (overallGrade >= 0.8) {
        letterGrade = 'B-'
    }
    else if (overallGrade >= 0.77) {
        letterGrade = 'C+'
    }
    else if (overallGrade >= 0.74) {
        letterGrade = 'C'
    }
    else if (overallGrade >= 0.7) {
        letterGrade = 'C-'
    }
    else if (overallGrade >= 0.67) {
        letterGrade = 'D+'
    }
    else if (overallGrade >= 0.64) {
        letterGrade = 'D'
    }
    else if (overallGrade >= 0.6) {
        letterGrade = 'D-'
    }
    else {
        letterGrade = 'E'
    }

    $("#finalGrade").html(overallGrade + "% or " + letterGrade)
})
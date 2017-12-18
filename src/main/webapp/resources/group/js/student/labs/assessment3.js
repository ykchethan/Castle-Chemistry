var assessment_netid = "", 
    assessment_test = "", 
    assessment_questions = [], 
    assessment_answers = [],
    currentQuestion,
    counter = 0,
    modulePoints = 0,
    startTime = 0,
    endTime = 0;

var session = getSessionStorage();

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function divMCQType(data) {

    currentQuestion = data;
     counter = 0;
    startTime = Date.now();
    
    var opt = data.iOptions.concat(data.vOptions);    
    var arr = shuffle(opt);
    
    var div = "<div class='ques-type' data-type='MCQ'><ul>" +
              "<li><p>"+data.question+"</p></li>";
    
    $.each(arr, function(key, value) {
       
        div +=  "<li><input type='checkbox' name='cb_"+data.questionId+"' value='"+value+"'>&nbsp;"+value+" <br>";

    });
    
    div += "</ul></div>";
    
    return div;
        
}

function divNUMType(data) {
    
    currentQuestion = data;
     counter = 0;
    startTime = Date.now();
   //     assessment_questions.push(data);
    
    var div = "<div class='ques-type' data-type='NUM'><ul>" +
              "<li><p>"+data.question+"</p></li>" +
              "<li><input type='text' id='text_"+data.questionId+"'></li>" +
              "</ul></div>";
    return div;
}

function divEXPType(data) {
    //{"moduleId":1511254810639,"questionId":1511254837271,"type":"EXP","question":"exp1",
    //"tokens":[{"first":"6","second":"5","type":"num"},{"first":"*","second":"","type":"opr"},{"first":"^","second":"z","type":"var"},{"first":"*","second":"","type":"opr"},{"first":"^","second":"z","type":"var"},{"first":"/","second":"","type":"opr"},{"first":"1","second":"3","type":"num"},{"first":"*","second":"","type":"opr"},{"first":"^","second":"z","type":"var"},{"first":"*","second":"","type":"opr"},{"first":"1","second":"3","type":"num"}],
    //"from":"323423","prettyexp":"65z&sup2; * z&sup2; / 13z&sup2; * 13 ",
    //"numVar":[{"value":"2","option":"z"}],"formatexp":"65*^z*^z/13*^z*13",
    //"formatexphash":"-354401460","to":"2342","hints":["rrr"],"fMaps":[]}
    currentQuestion = data;
     counter = 0;
    startTime = Date.now();
   //     assessment_questions.push(data);
    var opt = "<br/>";
    //"numVar":[{"value":"2","option":"z"}],
    for(var i = 0; i < data.numVar.length; i++) {
    var obj = data.numVar[i];
    console.log(obj.id);
    opt += "<li>"+obj.option +":<input type='text' id =  '"+obj.option+"_"+data.questionId+"' class = 'varForTheAnswer_"+data.questionId+" validateNumber' optval = '"+obj.option+"' retval = '"+obj.value+"' ></li>" ;
}
    var div = "<div class='ques-type' data-type='EXP'><ul>" ;
           div +=   "<li><p>"+data.question+"</p></li>" ;
           div +=      "<li> <span class= 'prettyEquation'>"+data.prettyexp+"</span> </li>";
           div +=      "<li> <span style = 'display:none' id = '"+data.questionId+"_formatexp'>"+data.formatexp+"</span> </li>";
            div +=     "<li> <span style = 'display:none' id = '"+data.questionId+"_formathash'>"+data.formatexphash+"</span> </li>";
            div +=     "<br/>";
            div +=   opt;
            div +=     "</ul></div>";
    return div;
} 

function divSHORTType(data) {
        
    currentQuestion = data;
     counter = 0;
    startTime = Date.now();
   //     assessment_questions.push(data);
    
    var div = "<div class='ques-type' data-type='SHORT'><ul>" +
              "<li><p>"+data.question+"</p></li>" +
             "<li><textarea rows='4' cols='45' id='textarea_"+data.questionId+"'></textarea></li>" +
              "</ul></div>";
   
    return div;
}

function addHints() {
    var hid = $('#hints-tab'),
        list = currentQuestion.hints,
        div = "";
    
    console.log('list 1');
    console.log(list);
    
    if(list === undefined) {
        list = currentQuestion.hOptions;
    }
    
     console.log('list 2');
    console.log(list);
    
    if(counter <= list.length) {
        div = '<div><h4>Hint '+counter+'</h4>' +
                    '<p>'+currentQuestion.hints[counter-1]+'</p> ' +
                  '</div><hr/>' ;
    }

    hid.append(div);
}

var startT, endT, studentAns, type, points, dTime, questionId, question,attempts;

function studentAnswer(curr, type, start, answer, end, points) {
    this.questionId = curr;
    this.question = currentQuestion.question;
    this.type = type;
    this.startT = new Date(start);
    this.studentAns = answer;
    this.endT = new Date(end);
    this.points = points;
    this.attempts = counter;
    this.dTime = (end - start) / 1000;
}

function checkNUMAnswer(curr) {
    
    console.log('In NUM Check Question');
    counter += 1;
    
    var ansId =   $('#'+curr).find('#text_'+curr);    
    var ans = ansId.val(), flag = false;
   
    // 3 Attempts
    if(counter === 4) {
        endTime = Date.now();
        var k = new studentAnswer(curr, "NUM", startTime, ans, endTime, 0);
        assessment_answers.push(k);
            assessment_questions.push(currentQuestion);

        return true;
    }
    
    if(ans.match(/^\d+$/)) {
        if(ans >= currentQuestion.from && ans <= currentQuestion.to) {
            flag = true;
            modulePoints += 1;
            endTime = Date.now();
        }
    } else {
        $.each(currentQuestion.cOptions, function(key, value) {
            if(ans.toUpperCase() === value.toUpperCase()) { 
                flag = true;  
                modulePoints += 1;
                endTime = Date.now();
            }
        });
    }
    
    console.log('flag : '+flag);
    if(flag) {
        var k = new studentAnswer(curr, "NUM", startTime, ans, endTime, 1);
         assessment_answers.push(k);
            assessment_questions.push(currentQuestion);
        ansId.attr("disabled", "true");
    } else {
        addHints();
    }
    return flag;
}


function checkMCQAnswer(curr) {
    
    console.log('In MCQ Check Question');
    counter += 1;
    
    var flag = true;
    
    var checkedValues = $('#'+curr).find('input:checkbox:checked').map(function() {
        return this.value;
    }).get();

        // 3 Attempts
    if(counter === 4) {
        endTime = Date.now();
        var k = new studentAnswer(curr, "MCQ", startTime, checkedValues, endTime, 0);
        assessment_answers.push(k);
            assessment_questions.push(currentQuestion);
        
        return true;
    }
    
    var corrects = currentQuestion.vOptions;

    console.log(corrects);    
    console.log(checkedValues);

    corrects.sort();
    checkedValues.sort();
    
    if(corrects.length !== checkedValues.length) { flag = false; }
    
    for(var i = 0; i < corrects.length && flag; i += 1) {
        if(corrects[i] != checkedValues[i]) { flag = false; }        
    }
    
    if(flag) {
        modulePoints += 1;
        endTime = Date.now();
        $('#'+curr).find('input:checkbox').attr("disabled", true);
        var k = new studentAnswer(curr, "MCQ", startTime, checkedValues, endTime, 1);
            assessment_questions.push(currentQuestion);
        
        assessment_answers.push(k);
    } else {
         addHints();
    }
    
    console.log(corrects);    
    console.log(checkedValues);
    
    return flag;
}

function checkSHORTAnswer(curr) {
    
    console.log('In SHORT check')
    counter += 1;
    
    var ansId = $('#'+curr).find('#textarea_'+curr);    
    var ans = ansId.val(), flag = false;
   
    if(counter === 4) {
        endTime = Date.now();
        var k = new studentAnswer(curr,"SHORT", startTime,ans, endTime, 0);
        assessment_answers.push(k);
            assessment_questions.push(currentQuestion);
        
        return true;
    }
    
    
    if(currentQuestion.cAnswer.toUpperCase() === ans.toUpperCase()) {
        flag = true;
        endTime = Date.now();
        var k = new studentAnswer(curr, "SHORT",startTime, ans, endTime, 1);
        assessment_answers.push(k);
            assessment_questions.push(currentQuestion);
        
    } else {
        addHints();
    }
    
    return flag;
}
//[{"value":"2","option":"z","ans":"sdf"}]

function expAnsVars(value,option,ans){
    this.value = value;
    this.option = option;
    this.ans = ans;
}

function sendForCheck(formatexp,formatexphash,expAnsVars,from, to){
    this.formatexp = formatexp;
    this.formatexphash = formatexphash;
    this.expAnsVars = expAnsVars;
    this.from = from;
    this.to = to;
}

function checkEXPAnswer(curr,currsubmitid,callback) {
    
    console.log('In EXP Check Question');
    counter += 1;
    var arrAns = [];
    var flag = true;
    $(".varForTheAnswer_" + curr).each(function (i, obj) {
        console.log("assessment3.js this.id ",this.id);
        var idd = this.id;
        //    opt += "<li>"+obj.option +":<input type='text' class = 'var validateNumber' optval = '"+obj.option+"' retval = '"+obj.value+"' ></li>" ;
        arrAns.push(new expAnsVars($("#" + idd).attr("retval"), $("#" + idd).attr("optval"), $("#" + idd).val()));

    });
   
    
        // 3 Attempts
    if(counter === 4) {
        endTime = Date.now();
               var k = new studentAnswer(curr, "EXP", startTime, arrAns, endTime, 0);
        $(".varForTheAnswer_" + curr).attr("disabled", "true");

        assessment_answers.push(k);
            assessment_questions.push(currentQuestion);
        callback(flag, currsubmitid);
        return true;
    }
    var sendForCh = new sendForCheck(currentQuestion.formatexp, currentQuestion.formatexphash,arrAns,currentQuestion.from,currentQuestion.to);
    $.ajax({
        url: "get/expVal",
        type: 'post',
        data: JSON.stringify(sendForCh),
        contentType: 'application/json',
        dataType: 'json',
        complete: function (transport) {
            console.log('In content');
            if (200 == transport.status) {
                result = transport.responseText;
                // console.log(result);
                if (result === "failed") {
                    $('#module-errors').html("Unkown Error");
                } else if (result === "correct"){
                    flag = true;
                }else{
                    flag = false;
                }//if (result === "failed")

                if (flag) {
                    modulePoints += 1;
                    endTime = Date.now();
                    $(".varForTheAnswer_" + curr).attr("disabled", "true");
                    /* $(".varForTheAnswer_" + curr).each(function (i, obj) {
                         console.log("assessment3.js this.id ", this.id);
                         var idd = this.id;
                         //    opt += "<li>"+obj.option +":<input type='text' class = 'var validateNumber' optval = '"+obj.option+"' retval = '"+obj.value+"' ></li>" ;
                         arrAns.push(new expAnsVars($("#" + idd).attr("retval"), $("#" + idd).attr("optval"), $("#" + idd).val()));
             
                     });*/

                    var k = new studentAnswer(curr, "EXP", startTime, arrAns, endTime, 1);
                    assessment_questions.push(currentQuestion);
                    assessment_answers.push(k);
                } else {
                    addHints();
                }//if (flag)



                callback(flag, currsubmitid);


            }// if (200 == transport.status)
        }
    });
 //   callback(false);  
    
}

var sQuestions, mAnswers, score, basics;
function moduleUpdate(basics, questions, answers, score) {
    this.basics = basics;
    this.sQuestions = questions;
    this.mAnswers = answers;
    this.score = score;
       
}

var unetid, uexpid, umodid, uexpname, umodname;

function mDetails() {

      this.unetid = $('#netid').html();
    this.uexpid = $('#expid').html();
    this.uexpname = $('#expname').html();
    this.umodid = $('#moduleid').html();
    this.umodname = $('#modulename').html();
}        


function updateAnswers() {

    console.log('ques');
    console.log(assessment_questions)
    console.log('ans');
    console.log(assessment_answers);
    
    function updateQuestionsAnswers(url, data) { 
        $.ajax({
            url: url,
            type: 'post',
            data: JSON.stringify(data),
            contentType: 'application/json',
            dataType: 'json',
            complete: function(transport){
                console.log('In content');
                if (200 == transport.status) {
                    result = transport.responseText;
                  // console.log(result);
                    if(result === "success") {
                    } else {
                        // Display Error
                        $('#module-errors').html("Connection Lost");
                    }
                }
            }
        });
    }
    
    console.log('points : '+modulePoints);
    var url = 'update/module-answers/';    
    
    console.log('setting');
    console.log('q long '+assessment_questions.length);
    console.log('a long '+assessment_answers.length);
    console.log(assessment_questions);
    console.log(assessment_answers);
     console.log('done setting');
    
    session.setItem("assessment_questions", JSON.stringify(assessment_questions));
    session.setItem("assessment_answers", JSON.stringify(assessment_answers));
    session.setItem("assessment_modulepoints", JSON.stringify(modulePoints));
   
    var k = new moduleUpdate(new mDetails(), assessment_questions, assessment_answers, modulePoints);
    updateQuestionsAnswers(url, k);
}
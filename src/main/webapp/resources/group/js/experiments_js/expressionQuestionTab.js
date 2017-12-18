
function getEXP(d) {
    
    var mcq = '  <div class="exp questionTab question-accordion" id="'+d+'">' +
                    '<h3><span class="questionTxt">Expression</span><span class="glyphicon glyphicon-remove btn-hover float-right btn-remove '+d+'"></span></h3>' +
                    '<div>' +
                       '<form method="post" enctype="multipart/form-data"> ' +
                        '<ul class="ul-list">' +
                            '<li> <!-- Question -->' +
                                '<ul>' +
        '<li><textarea name="question" placeholder="Question" class="question b-width"></textarea></li>' +
        //should hide in javascript function based on if there is an expression in java content or if this is the first time
        '<br/>'+
        '<li id="exppreid">Expression : <span class= "hideer12 prettyexp" id=' + d +'_expprespan></span></li>' +


                                    '<li><input class="ca-files" disabled type="file" id="'+d+'_qF" name="qFile" multiple></li>  ' +                          
                                '</ul>' +
                           '</li>' +
        '<li> <!--token -->' +
        '<ul class="tokens">' +
        '<li><label>Add Token</label></li>' +
        '</ul> ' +
        '</li>' +             
       // '<button class=" hideer12" id="' + d + '_opr" data-module=""><span ></span> Add Operator</button>' +
        '<input class = "hideer12" type="button" id="' + d + '_opr" data-type="opr" value="Add Operator">' +
        '<input class = "" type="button" id="' + d + '_num" data-type="num" value="Add Number">' +
        '<input class = "" type="button" id="' + d + '_var" data-type="var" value="Add Variable">' +
      //  '<button class="" id="' + d + '_num" data-module=""><span ></span>Add Number</button>' +
      //  '<button class="" id="' + d + '_var" data-module=""><span ></span> Add Variable</button>' +            
'<br/>'+
        '<ul class="ranges">' +
        '<li><label>Range</label></li>                               ' +
        '<li>' +/*From:*/'<input type="text" pattern="\d*" maxlength="8" name="from" id="' + d + '_From" class="from validateNumber"  placeholder="From">' +
        '<br/>' +/*To&nbsp;&nbsp;&nbsp;&nbsp;:*/'<input type="text" pattern="\d*" maxlength="8" name="to" id="' + d + '_To" class="to validateNumber" placeholder="To"></li>' +
        '</ul>' + 
                           '<li> <!-- Hints -->' +
                               '<ul class="hints">' +
                                  '<li><label>Hints</label></li>' +
                              ' </ul>     ' +                      
                            '</li>  ' +  

                            '<li><input type="button" id="'+d+'H" data-type="hints" value="Hints"></li>' +

                        '</ul>' +
                        '<input type="button" class="in-btn" id="'+d+'_save" value="save">' +
                        '</form>' +
                    '</div>' +
                '</div>';
                        
        return mcq;                
}

function addNUM(t, v) {
    /*
    new_v2 - this is commented to make the dropdowns into text field
    var a = '<li class="token" tokentype="num" id="' + t + '">' +

        // '<span class="glyphicon glyphicon-remove btn-hover float-right btn-remove '+t+'"></span>' +
        '<select class="firstNum_foronchange_v2_new" id="' + t + '_1">' +
        '<option value="1">1</option>' +
        ' <option value="2">2</option>' +
        '<option value="3">3</option>' +
        '<option value="4">4</option>' +
        '<option value="5">5</option>' +
        ' <option value="6">6</option>' +
        ' <option value="7">7</option>' +
        ' <option value="8">8</option>' +
        ' <option value="9">9</option>' +
        ' <option value="0">0</option>' +

        '</select>' +

        '<select id="' + t + '_2">' +
        '<option value="1">1</option>' +
        ' <option value="2">2</option>' +
        '<option value="3">3</option>' +
        '<option value="4">4</option>' +
        '<option value="5">5</option>' +
        ' <option value="6">6</option>' +
        ' <option value="7">7</option>' +
        ' <option value="8">8</option>' +
        ' <option value="9">9</option>' +
        ' <option value="0">0</option>' +

        '</select>' +

        '</li>' 
        //+
      //  '<br/>'
        ;
*/
    var a = '<li class="token" tokentype="num" id="' + t + '">' +
        '<input type = "text"  maxlength = "8" id="' + t + '_1" class="num_token !important validateNumber"  placeholder = "Number" >' +
        '<input type = "text"  style = "display:none" maxlength = "8" id="' + t + '_2" class=" validateNumber"  placeholder = "Number" >' +

        '</li> '

        //+
        //  '<br/>'
        ;
   


    return a;
}

function addVAR(t, v) {
    var a = '<li class="token" tokentype="var" id="' + t + '">' +

        // '<span class="glyphicon glyphicon-remove btn-hover float-right btn-remove '+t+'"></span>' +
        '<select id="' + t + '_1">' +
        '<option value="!">None</option>' +
        ' <option value="^">&#9633;&sup2;</option>' +
        '<option value="#">&radic;&#9633;</span></option>' +

        '</select>' +

        '<select id="' + t + '_2">' +
        '<option value="a">a</option>' +
        ' <option value="b">b</option>' +
        '<option value="c">c</option>' +

        '</select>' +

        '</li>' 
       // +
        //'<br/>'
        ;
    return a;
}

function addOPR(t, v) {
    var a = '<li class="token" tokentype="opr" id="' + t + '">' +

        // '<span class="glyphicon glyphicon-remove btn-hover float-right btn-remove '+t+'"></span>' +
        '<select id="' + t + '_1">' +
        '<option value="*">*</option>' +
        ' <option value="/">/</option>' +
        '<option value="+">+</option>' +
        '<option value="-">-</option>' +


        '</select>' +

        '<input style="display:none" id="' + t + '_2">' +
  

        '</li>'
        //+
        //'<br/>'
        ;


    return a;

}



/**
 * for onclicks for the buttons
 *  
 * @param {any} md not used
 * @param {any} id the question id
 * New_V2
 */
function addEXPChoices(md, id) {


    /**
 * 
 * for from and to range onchange
 */
    trackChangeWithId(id, id + '_From');
    trackChangeWithId(id, id + '_To');


    $('#' + id + '_num').on('click', function () {
        var tab = $(this).closest('.questionTab'),
            tokens = tab.find('.tokens'),
            temp = id + '_T_' + tokens.find('li').length;

        //toggle buttons
        $('#' + id + '_num').addClass('hideer12');
        $('#' + id + '_var').addClass('hideer12');
        $('#' + id + '_opr').removeClass('hideer12');
        tokens.append(addNUM(temp, ""));
        trackChangeWithId(id, temp);
        $("#"+temp).val(0);
       // trackKeyUpWithId(id, temp);
        console.log($("#" + temp).attr("tokentype"))

        removeItem(temp, "");
    });

    $('#' + id + '_var').on('click', function () {
        var tab = $(this).closest('.questionTab'),
            tokens = tab.find('.tokens'),
            temp = id + '_T_' + tokens.find('li').length;

        //toggle buttons
        $('#' + id + '_num').addClass('hideer12');
        $('#' + id + '_var').addClass('hideer12');
        $('#' + id + '_opr').removeClass('hideer12');
        tokens.append(addVAR(temp, ""));
        trackChangeWithId(id, temp);
        console.log($("#" + temp).attr("tokentype"))

        removeItem(temp, "");
    });

    $('#' + id + '_opr').on('click', function () {
        var tab = $(this).closest('.questionTab'),
            tokens = tab.find('.tokens'),
            temp = id + '_T_' + tokens.find('li').length;

        //toggle buttons
        $('#' + id + '_num').removeClass('hideer12');
        $('#' + id + '_var').removeClass('hideer12');
        $('#' + id + '_opr').addClass('hideer12');
        tokens.append(addOPR(temp, ""));
        trackChangeWithId(id, temp);
        console.log($("#" + temp).attr("tokentype"))

        removeItem(temp, "");
    });


    $('#'+id+'H').on('click', function() {
        var tab = $(this).closest('.questionTab'),
            hints = tab.find('.hints'),        
            temp = id+'_H_'+hints.find('li').length;              
        
        hints.append(addCommonHint(temp, ""));
        trackChangeWithId(id, temp);
        
        removeItem(temp, "");
    });


}
/**
 * for the onclick of save button - this button is actually hidden
 * the onclick is called from the onclicks of trues, falses etc
 * through trackChangeWith<*> within the onclicks - but this is defined in inherit.js
 * New_V2
 * @param {any} md the module_id
 * @param {any} d this is the id
 */
function saveEXPButton(md, d) {
    $('#'+d+'_save').on('click', function() {
        console.log('performed save of exp');
        
        /**
         * all variables defined right here
         * New_V2
         */
        var tab = $(this).closest('.questionTab'),         
            quesId = d,
            question = tab.find('.question').val(),
            tokens = [],
            trues = [],     
            allHints = [],       
            from,
            to,
            prettyexp = '!!pretty!!',
            formatexp = '!!format!!',
            /**
             * this is for file
             */ 
            maps = [];
        
        function demo() { console.log('Execute Demo'); }
        
        var moduleId, questionId, questionText, iOptions, vOptions, hOptions, fMaps, type;
        /**
         * this is a model for question
         * New_V2
         * 
         * @param {any} id 
         * @param {any} question 
         * @param {any} falses 
         * @param {any} trues 
         * @param {any} hints 
         * @param {any} maps 
         */
        function prepareEXP(id, question, tokens, prettyexp, formatexp,formatexphash, numVAR, from, to, hints, maps) {
            this.moduleId = md;
            this.questionId = id;
            this.type = "EXP";
            this.question= question;
            this.tokens = tokens;
            this.from = from;
            this.prettyexp = prettyexp;
            this.numVar = numVAR;
            this.formatexp = formatexp;
            this.formatexphash = formatexphash;
            this.to = to;
            this.hints = hints;
            this.fMaps = maps;
        }
        /**
         * called from save  button
         * 
         */
        function prepareEXPurl() {

            var act = new prepareEXP(quesId, question, tokens, prettyexp, formatexp, '!!formatexphash!!', '!!numvar!!', from,to, allHints, maps),
                ind = orderList.indexOf(d); 
            
            if(ind < 0) {
                orderList.push(d);            
                allQuestionList.push(act);
            } else {
                allQuestionList[ind] = act;
            }
            /**
             * send url is defined in inherit.js
             * the url is readmcqdata -
             * sendorder is the callback function 
             * it is defined in inherit.js
             * New_V2
             */                        
            var url = 'readexpdata',
            //sendOrder
               // stat = sendURL(url, act, sendOrder);
                stat = sendURL(url, act, function callback1(result){
                    console.log('expressionquestiontab.js result.type '+ typeof result);
                    if (result === "failure") {
                        console.log('Its failure');
                        $('#' + quesId + '_expprespan').addClass('hideer12');
                    } else {
                        $('#' + quesId + '_expprespan').removeClass('hideer12');
                        //$('#' + ques.questionId + '_expprespan').val(ques.prettyexp);
                        $('#' + quesId + '_expprespan').html("<b>" + result + "</b>");
                    }
                    sendOrder();
                });
            
            

        }
        
        function parseFiles(id, type, back) {
    
            var iFiles = document.getElementById(id),
                filesLength = iFiles.files.length;
            var total = filesLength;
            for (var i = 0; i < filesLength; i++) {
                var f = iFiles.files[i];

                if (f) {
                    var r = new FileReader();
                    r.onload = function(e) { 
                        var contents = e.target.result;
                        var x = new fileContainer(type, f.type, f.name, contents);
                        maps.push(x);
                        total = total-1;
                        if(total === 0) {
                            back();
                        }
                    }
                     r.readAsDataURL(f);
                } else { 
                    alert("Failed to load file");
                }                           
            }
        }
        
        function getParseChoices(tabs) {
            


            var tokens = [];
            function token(type, first, second) {
                this.first = first;
                this.second = second;
                this.type = type;
            }

            $.each(tabs, function () {
                console.log(this.id);
                var tem = this.id;
                var tempt = new token($('#' + tem).attr('tokentype'), $('#' + tem + "_1").val(), $('#' + tem + "_2").val());
                console.log("$('#' + tem + _1).val()", $('#' + tem + "_1").val());
                console.log('this.attr(tokentype) ', $('#'+tem).attr('tokentype'));
                tokens.push(tempt);
                
            });
            console.log('printing tokens');
            console.log(tokens);
            return tokens;

        }

        // Reading the files from MCQ type
        function readFilesOfEXP(allSet) {
             var total = allSet.length;
             console.log('multiplequestiontab.js - total =', total);
            if(total === 0) {
                prepareEXPurl();
            } else {
                // Reading the files
                $.each(allSet, function(key, value) {
                   total = total - 1;
                    if(total === 0) {
                        parseFiles(value.fid, value.type, prepareEXPurl);                    
                    } else {
                        parseFiles(value.fid, value.type, demo);
                    }
                });
            }
        }
        
        // Collecting ids of files who has files
        var allSet = [];
        function checkFiles(id, type) {
            var iFiles = document.getElementById(id),
                mainFiles = iFiles.files.length;
            if(mainFiles > 0) {
                allSet.push(new fileType(id, type));
            }
        }
           
        var tokens_li = [], valids = [], hints = [], allHints = [];
       
        tokens_li = tab.find('.token');
        //valids = tab.find('.valid');
        hints = tab.find('.hint');
        
        tokens = getParseChoices(tokens_li);
/**
 * adding the from and two --  range
 */
        from = tab.find('.from').val();
        to = tab.find('.to').val();

        if(from == null){
            from = 0;
        }
        if(to==null){
            to=0;
        }
       // trues = getParseChoices(valids);        
        
        // Question files
        checkFiles(d+"_qF", "Q");
        
        // Hint files
        $.each( hints, function( key, value ) {           
           var txt = $(this).val(),
               fid = $(this).data('file');
           allHints.push(txt);
           checkFiles(fid, "H"+key);
        });
            
        readFilesOfEXP(allSet);
    });
}
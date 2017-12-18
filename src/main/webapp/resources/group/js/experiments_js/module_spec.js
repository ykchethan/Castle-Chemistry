
function getModule(md) {
    var module = '<div id="'+md+'" class="module-accordion">' +
                //    '<div>' +
                        '<h5><input type="text" id="'+md+'_MN" class="module-name box-size" placeholder="Module Name">' +
          //    '<h5>Heloo' +
                        '<span class="glyphicon glyphicon-remove-circle btn-mod-remove btn-hover float-right btn-remove '+md+'"></span></h5>' +
                  //  '</div>' +
                    '<div class="questionsGroup">' +
                        '<div class="questionsList">' +

                        '</div>' +

                        '<button class="btn-success space-10" id="'+md+'_mcq" data-module=""><span class="glyphicon glyphicon-plus"></span> MCQ</button>' +
                        '<button class="btn-warning space-10" id="'+md+'_num" data-module=""><span class="glyphicon glyphicon-plus"></span> Num</button>' +     
                        '<button class="btn-info space-10" id="' + md + '_short" data-module=""><span class="glyphicon glyphicon-plus"></span> Short</button>' +            
                        '<button class="btn-primary space-10" id="' + md + '_exp" data-module=""><span class="glyphicon glyphicon-plus"></span> Expression</button>' +            

                    '</div>' +
                '</div>';
                        
    return module;
}

var moduleName, mQuestionId;
function moduleQuestions(moduleName, id) {
    this.moduleName = moduleName;
    this.mQuestionId = id;
}

var experimentId, experimentName;
function newExperiment(id, name) {
    this.experimentId = id;
    this.experimentName = name;
}

function applyQuestionAccordion() {
         mod.find('.question-accordion').accordion({collapsible: true});
    //     mod.find('.question-accordion').accordion();
}

function applyModuleAccordion() {
         mod.find('.module-accordion').accordion({collapsible: true, heightStyle: "content", animate: 200});
    //     mod.find('.question-accordion').accordion();
}

/**
 * onclicks of the choice of question type buttons
 * New_V2
 * @param {any} md 
 */
function addModuleChoices(md) {
    
    mod.find('#'+md+'_mcq').on('click', function() {
       
        var list = $(this).closest('.questionsGroup').find('.questionsList'),
            d = Date.now();
        
        console.log('list length : '+list.length);
        /**
         * getMCQ(d) this is the html code being added
         * addChoices(md, d); is the onclicks for true and falses and hints
         * New_V2
         */
        list.append(getMCQ(d));
        
        addChoices(md, d);
        /**
         * this is a list of question ids
         */
        orderList.push(d);
        allQuestionList.push("No Data Inserted");

        removeItem(d, "Q");   
        trackChangeInQuestion(d);
        
        saveMCQButton(md, d);
        
       applyQuestionAccordion();
    });
    
    mod.find('#'+md+'_num').on('click', function() {
    
        var d = Date.now(),
            list = $(this).closest('.questionsGroup').find('.questionsList');

        console.log('list length : '+list.length);
        

         /**
         * this is the html code being added
         * New_V2
         */
        list.append(getNum(d));
        addNumChoices(d);  
    
        orderList.push(d);
        allQuestionList.push("No Data Inserted");
    
        removeItem(d, "Q");     
        
        trackChangeInQuestion(d);
        trackChangeWithId(d, d+"_From");
        trackChangeWithId(d, d+"_To");
        
        saveNumButton(md, d);
        
        applyQuestionAccordion();
    });
    mod.find('#'+md+'_short').on('click', function() {
        var d = Date.now(),
            list = $(this).closest('.questionsGroup').find('.questionsList');
        
        console.log('list length : '+list.length);
        
         /**
         * this is the html code being added
         * New_V2
         */
        list.append(getShort(d));

        orderList.push(d);
        allQuestionList.push("No Data Inserted");

        removeItem(d, "Q");
        trackChangeInQuestion(d);
        trackChangeWithId(d, d+"_SA");
        trackChangeWithId(d, d+"_aF");
        
        saveShortButton(md, d);

        applyQuestionAccordion();
    });


    mod.find('#' + md + '_exp').on('click', function () {

        var list = $(this).closest('.questionsGroup').find('.questionsList'),
            d = Date.now();

        console.log('list length : ' + list.length);
        /**
         * getexp(d) this is the html code being added
         * addChoices(md, d); is the onclicks for true and falses and hints
         * New_V2
         */
        list.append(getEXP(d));

        addEXPChoices(md, d);
        /**
         * this is a list of question ids
         */
        orderList.push(d);
        allQuestionList.push("No Data Inserted");

        removeItem(d, "Q");
        trackChangeInQuestion(d);

        saveEXPButton(md, d);

        applyQuestionAccordion();
    });
}

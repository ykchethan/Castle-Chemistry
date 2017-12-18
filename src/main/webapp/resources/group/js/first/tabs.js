function tabFunctionality() {

    console.log('Tabs functionality');
    /**
     * here start is 0 as called at the end of the file
     */
    function tabsActivation(start, tablinks, tabpanels) {

        var i;
        function displayTabs(activateTab) {
            for (i = 0; i < tabpanels.length; i += 1) {

                if (tablinks[i] === activateTab) {

            //      tablinks[i].classList.remove("hidden");
                    tablinks[i].classList.add("show");
                    tablinks[i].classList.add("active");

                   tabpanels[i].style.display = "block";
                } else {
                    tablinks[i].classList.remove("active");
                    tabpanels[i].style.display = "none";
                }

            }
        }//displayTabs(activateTab)

      //  console.log('start : '+start);

        displayTabs(tablinks[start]);

        for (i = start; i < tabpanels.length; i += 1) {
            tablinks[i].onclick = function () {
                displayTabs(this);
                return false;
            };
            tablinks[i].onfocus = function () {
                displayTabs(this);
                return false;
            };
        }
    }//function tabsActivation(start, tablinks, tabpanels) 

     var tablinks = $(".nav-stacked").children(),
            tabpanels = $("#main-container").children();

    tabsActivation(0, tablinks, tabpanels);

}

tabFunctionality();
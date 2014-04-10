$( document ).ready(function() {
    //full list of interests
    var interests_list = new Array();
    //list of associated tags to send back
    var tag_list = new Array();
    //grab interest tag options
    //IF CALLING FOR PILL INFORMATION:
    // $.ajax({
    //     url: Query for tags here,
    //     type: 'GET',
    //     success: function(data) {
    //         interests_list = data;
    //         writePills(interests_list);
    //         selectPills();
    //     },
    //     error: function(xhr, status){
    //         alert("Oops! Something went wrong.");
    //     }
    // });

    //For the purpose of a demo, here is a sample list
    //left: tag namge   right: tag id
    interests_list = {
        "architecture": 2259485,
        "art": 1348029348,
        "design": 3350845,
        "entertainment": 43080485,
        "fashion": 520480923,
        "film": 6345345,
        "food": 734254,
        "health": 85345345,
        "music": 923452345,
        "nature": 102345234,
        "news": 1143523,
        "politics": 12234523,
        "science": 13234523,
        "sports": 147578,
        "tech": 1554675,
        "travel": 164567458
    };

    //for the demonstration of preselected interests
    initial_interests = {
        "design": 3350845,
        "science": 13234523,
        "travel": 164567458
    };

    //Only have one of the writePills method uncommented
    //writePills(interests_list);
    writePills(interests_list, initial_interests);
    selectPills();

    //writePills with no preselected interests
    // function writePills(pillData){
    //     for (var key in pillData){
    //         $('#pills_list').append("<div class='pill' id=" + key + " data-id=" + pillData[key] + ">" + key + "</div>");
    //     }
    // }

    //writePills with preselected interests
    function writePills(pillData, initialPills){
        for (var key in pillData){
            var className = '';
            if(initialPills[key]!=null){
                className = 'pill selected';
                tag_list.push(initialPills[key]);
            } else {
                className = 'pill';
            }
            $('#pills_list').append("<div class='" + className + "' id=" + key + " data-id=" + pillData[key] + ">" + key + "</div>");
        }
        console.log('Initial Interests');
        console.log(tag_list);
    }

    //function for if someone grabs initial interests of a user and wants to denote these previously selected interests
    function preselectPills(initialPills){
        for (var key in initialPills){
            $('.pill').data('id')
            $('#pills_list').append("<div class='pill' id=" + key + " data-id=" + initialPills[key] + ">" + key + "</div>");
        }
    }

    function selectPills(){
        $('.pill').on('click', function(){
            var tag_name = $(this).attr('id');
            var tag_id = $(this).data('id');
            var parent = $(this).parent().attr('id');

            //if the pill is being deselected, remove it from the tag_list
            //else it is being selected and should be added to the tag_list
            if($(this).attr('class')=='pill selected'){
                var index = tag_list.indexOf(tag_id);
                tag_list.splice(index, 1);
            } else {
                tag_list.push(tag_id);
            }
            $(this).toggleClass('selected');

            console.log("Current Tag IDs being passed.");
            console.log(tag_list);
        });
    }
});
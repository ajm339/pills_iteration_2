$( document ).ready(function() {
    //full list of interests
    var interests_list = new Array();
    //list of associated tags to send back
    var tag_list = new Array();
    //grab interest tag options
    //IF SENDING FOR PILL INFORMATION:
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

    writePills(interests_list);
    selectPills();

    function writePills(pillData){
        for (var key in pillData){
            $('#pill_box_unselected').append("<div class='pill' id=" + key + " data-id=" + pillData[key] + ">" + key + "</div>");
            $('#pill_box_selected').append("<div class='pill selected' id=" + key + " data-id=" + pillData[key] + ">" + key + "</div>");
        }
        $('.pill.selected').hide();
    }

    function selectPills(){
        $('.pill').on('click', function(){
            var tag_name = $(this).attr('id');
            var tag_id = $(this).data('id');
            var parent = $(this).parent().attr('id');

            if(parent=='pill_box_unselected'){
                $(this).hide();
                var new_pill = $('#pill_box_selected').find("#" + tag_name);
                new_pill.show();
                tag_list.push(tag_id);
            } else if(parent == 'pill_box_selected'){
                $(this).hide();
                var new_pill = $('#pill_box_unselected').find("#" + tag_name);
                new_pill.show();
                var index = tag_list.indexOf(tag_id);
                tag_list.splice(index, 1);
            }
            //Show which tag ids are being processed
            console.log("Current Tag IDs being passed.");
            console.log(tag_list);
        });
    }
});
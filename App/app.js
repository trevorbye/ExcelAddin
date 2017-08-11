/**
 * Created by trevorBye on 8/4/17.
 */
(function () {
    "use strict";

    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();

            $('#get-all-page-links').click(scrape);
        });
    };

    //test function for non-Office environment build
    /*
    $(document).ready(function () {
        app.initialize();

        $('#get-all-page-links').click(scrape);
    });
    */

    var scrape = function getAllPageLinks() {
        Excel.run(function (context) {
            

            var inputElement = $('#uri-input');
            var outputRegion = $('#scrape-output');
            var rawUrl = inputElement.val();

            var encodedUrl = encodeURIComponent(encodeURIComponent(rawUrl));
            var fullScrapeUrl = "https://simplescraper.herokuapp.com/getAllPageLinks/true/" + encodedUrl;
            var testUrl = "http://devora57.westfarm.com:9502/analytics/saw.dll?Go&Path=/users/bisc_user/testAnalysis&Format=csv&NQUser=bisc_user&NQPassword=Summer2017";

            $.ajax({
                url: testUrl,
                type: "GET",
                cache: false,
                contentType: "application/json",
                success: function (response) {
                    outputRegion.text(JSON.stringify(response));
                    console.log(response);
                },
                error: function (response) {
                    app.showNotification("Error", response);
                    console.log(response);
                }
            });

            inputElement.val('');
        }).then(function () {

        }).catch(function () {

        });
    }

})();
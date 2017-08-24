/**
 * Created by trevorBye on 8/4/17.
 */
(function () {
    "use strict";


    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();

            $('#get-all-page-links').click(test);
        });
    };

    //test function for non-Office environment build
    /*
    $(document).ready(function () {
        app.initialize();

        $('#get-all-page-links').click(scrape());
    });
    */

    var test = function testAlgorithm() {
        Excel.run(function (ctx) {

            /*
            //reference code
            var inputElement = $('#uri-input');
            var outputRegion = $('#scrape-output');
            outputRegion.text("foobar");
            var rawUrl = inputElement.val();
            inputElement.val('');
            */

            /*
            //use this to reference worksheet by name
            ...worksheets.getItem("Sheet1");
            */
            var activeSheet = ctx.workbook.worksheets.getActiveWorksheet();

            var rangeAddress = "A:A";
            var usedRange = activeSheet.getRange(rangeAddress).getUsedRange();
            usedRange.load("rowIndex, rowCount, values");

            return ctx.sync().then(() => {
                var clonedRange = usedRange;
                var rows = usedRange.rowCount;

                for (var i = 0; i < rows; i++) {
                    var cellRef = clonedRange.getCell(i, 1);
                    var currentVal = cellRef.values;

                    if (currentVal > 100) {
                        cellRef.values = "too high";
                    }
                }

                ctx.workbook.worksheets.getActiveWorksheet().getCell(1, 2).getResizedRange(rows - 1, 0).values = clonedRange.values;

            });

        }).then(function () {
            app.showNotification("Success");
            console.log("success test");
        }).catch(function (error) {
            app.showNotification("Catch-block: ", error);
        });
    }

})();

function showFeedbackDialog() {

  //-------------------------------------//
  // DECLARE VARIABLE
  //-------------------------------------//

  var columnFilter = 1;
  let visibleRowIndex = 0;
  var rowData = [];
  var titleData = [];


  //-------------------------------------//
  // GET NOT HIDDEN VALUE
  //-------------------------------------//

  // Get the active spreadsheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  //Turn off filter before process
  spreadsheet.getActiveSheet().getFilter().remove();
  // Get the active sheet
  var sheet = spreadsheet.getActiveSheet();

  var data = sheet.getDataRange().getValues();

  titleData = data[0];

  // for (var d = 1; d < data.length; d++) {
  //   // Row Index starts from 1
  //   if (!sheet.isRowHiddenByFilter(d + 1)) {
  //     //get only first row data
  //     rowData = data[d];
  //     visibleRowIndex = d + 1;
  //     break;
  //   }
  // }

  //get data current focus cell
  var rowIndex = sheet.getCurrentCell().getRowIndex();
  rowData = data[rowIndex - 1];
  visibleRowIndex = rowIndex;



  //-------------------------------------//
  // CHECK FILTERED COLUMN
  //-------------------------------------//
  // Get the range of the data
  var range = sheet.getDataRange();
  // Get the filter criteria
  // var filter = range.getFilter();

  // if (filter.getColumnFilterCriteria(columnFilter) == null) {
  //   // Create a user interface object
  //   var ui = SpreadsheetApp.getUi();

  //   // Create a modal dialog box with a specified title, message, and "OK" button
  //   var result = ui.alert(
  //     'Not column is filtered!!!',
  //     ui.ButtonSet.OK);
  //   return;
  // }



  // Apply the filter
  var filter = range.createFilter();
  filter.setColumnFilterCriteria(1, SpreadsheetApp.newFilterCriteria().whenTextEqualTo(rowData[0]).build());




  //-------------------------------------//
  // SHOW DATA TO DIALOG
  //-------------------------------------//
  var widget = HtmlService.createHtmlOutputFromFile("Form.html")
    .append('<div class="container">')
    //Row 1
    .append(' <div class="row">')
    .append(' <form id="feedbackForm">')
    .append('<input class="long" type="text"  name="input1" id="1"  value="' + rowData[6] + '"> <button class="yellow-bg"  type="button"  id="btn1" onclick="copyToClipboard(1)">' + titleData[6] + ' </button><br>')
    .append('</div>')
    //Row 2
    // .append(' <div class="row">')
    .append('<input class="long" type="text"  name="input2" id="2"  value="' + rowData[7] + '"> <button class="yellow-bg"type="button"  id="btn2" onclick="copyToClipboard(2)">' + titleData[7] + '</button><br>')
    // .append('</div>')
    //Row 3
    // .append(' <div class="row">')
    .append('<input class="long" type="text"  name="input3" id="3" value="' + rowData[8] + '"> <button class="yellow-bg"type="button"   id="btn3" onclick="copyToClipboard(3)">' + titleData[8] + '</button><br>')
    // .append('</div>')
    //Row 4
    // .append(' <div class="row">')
    .append('<input class="long" type="text"  name="input4" id="4" value="' + rowData[9] + '"> <button class="yellow-bg" type="button"   id="btn4" onclick="copyToClipboard(4)">' + titleData[9] + '</button><br>')
    // .append('</div>')
    .append('<input class="long" type="text" name="input5" id="5"value="' + rowData[10] + '"> <button class="yellow-bg" type="button" id="btn5" onclick="copyToClipboard(5)">' + titleData[10] + '</button> ')
    //Row 5

    .append(' <div class="row">')
    .append(' <div class="col">')
    .append('<input class="short" type="text" name="input6" id="6" value="' + rowData[11] + '"> <button  class="short-btn" type="button"  id="btn6" onclick="copyToClipboard(6)">' + titleData[11] + '</button>')
    .append('</div>')
    .append(' <div class="col">')
    .append('<input class="short" type="text" name="input10" id="10" value="' + rowData[15] + '"> <button class="short-btn" type="button" id="btn10" onclick="copyToClipboard(10)">' + titleData[15] + '</button>')
    .append('</div>')
    .append('</div>')
    //Row 6
    .append(' <div class="row">')
    .append(' <div class="col">')
    .append('<input class="short" type="text" name="input7" id="7" value="' + rowData[12] + '"> <button class="short-btn" type="button"  id="btn7" onclick="copyToClipboard(7)">' + titleData[12] + '</button>')
    .append('</div>')
    .append(' <div class="col">')
    .append('<input class="short" type="text" name="input11" id="11" value="' + rowData[16] + '"> <button  class="short-btn"type="button" id="btn11" onclick="copyToClipboard(11)">' + titleData[16] + '</button>')
    .append('</div>')
    .append('</div>')
    //Row 7
    .append(' <div class="row">')
    .append(' <div class="col">')
    .append('<input class="short" type="text" name="input8" id="8" value="' + rowData[13] + '"> <button class="short-btn" type="button"  id="btn8" onclick="copyToClipboard(8)">' + titleData[13] + '</button>')
    .append('</div>')
    .append(' <div class="col">')
    .append('<input class="short" type="text" name="input12" id="12" value="' + rowData[17] + '"> <button class="short-btn" type="button" id="btn12" onclick="copyToClipboard(12)"> ' + titleData[17] + ' </button> ')
    .append('</div>')
    .append('</div>')
    //Row 8
    .append(' <div class="row">')
    .append(' <div class="col">')
    .append('<input class="short" type="text" name="input9" id="9" value="' + rowData[14] + '"> <button class="short-btn" type="button"  id="btn9" onclick="copyToClipboard(9)">' + titleData[14] + '</button><br>')
    .append('</div>')
    .append(' <div class="col">')
    .append('<input class="short" type="text" name="input13" id="13" value="' + rowData[18] + '"> <button  class="short-btn"type="button" id="btn13" onclick="copyToClipboard(13)">' + titleData[18] + '</button><br>')
    .append('</div>')
    .append('</div>')
    //Row 9
    .append('<input class="long"  type="text" name="input14" id="14" value="' + rowData[19] + '"> <button class="orange-bg" type="button" id="btn14" onclick="copyToClipboard(14)">' + titleData[19] + '</button><br>')
    .append('<input class="long"  type="text" name="input15" id="15" value="' + rowData[20] + '"> <button class="orange-bg" type="button" id="btn15" onclick="copyToClipboard(15)">' + titleData[20] + '</button><br>')
    .append('<input class="long"  type="text" name="input16" id="16" value="' + rowData[21] + '"> <button class="orange-bg" type="button" id="btn16" onclick="copyToClipboard(16)">' + titleData[21] + '</button><br>')
    .append('<input class="long"  type="text" name="input17" id="17" value="' + rowData[22] + '"> <button class="orange-bg" type="button" id="btn17" onclick="copyToClipboard(17)">' + titleData[22] + '</button><br>')
    .append('<input class="long"  type="text" name="input18" id="18" value="' + rowData[23] + '"> <button class="orange-bg" type="button" id="btn18" onclick="copyToClipboard(18)">' + titleData[23] + '</button>')

    .append('<input class="long"  type="text" name="input19" id="19" value="' + rowData[24] + '"> <button class="pink-bg" type="button" id="btn19" onclick="copyToClipboard(19)">' + titleData[24] + '</button>')
    .append('<input class="long"  type="text" name="input20" id="20" value="' + rowData[25] + '"> <button class="pink-bg" type="button" id="btn20" onclick="copyToClipboard(20)">' + titleData[25] + '</button>')
    .append('<input class="long"  type="text" name="input21" id="21" value="' + rowData[26] + '"> <button class="pink-bg"type="button" id="btn21" onclick="copyToClipboard(21)">' + titleData[26] + '</button>')
    .append('<input class="long" readonly="true"  type="text" name="input22" id="22" value="' + rowData[27] + '"> <button style="background-color:#ff00f4;width:65px;" type="button" id="btn22" onclick="copyToClipboard(22)">Link</button> <button type="button" style="width:65px;font-style: italic;font-weight:bolder;color: #ff0089;"  onclick="openNewPage()">Open</button>')


    .append('<input type="button" style="background-color: #02ff02;color: black!important;width: 99%;font-weight: bolder;color: dimgrey;font-size: 17px;" id="submit" value="Submit" onclick="submitForm();">')
    .append('<input type="text" style="display: none;" name="visibleRowIndex" id="visibleRowIndex" value="' + visibleRowIndex + '"> ')
    .append('  </form>')
    .append('</div>')
  widget.setHeight(770);
  widget.setWidth(630);
  SpreadsheetApp.getUi().showModalDialog(widget, "STT - " + rowData[0]);
  var result = SpreadsheetApp.getUi();
  var button = result.
    if(button == ui.Button.CLOSE) {
      // User clicked X in the title bar.
      ui.alert('You closed the dialog.');
}
}

function appendRowFromFormSubmit(form) {
  var authenData = [form.authen];
  var visibleRowIndex = [form.visibleRowIndex];
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();

  sheet.getRange(visibleRowIndex, 7).setValue(form.input1);
  sheet.getRange(visibleRowIndex, 8).setValue(form.input2);
  sheet.getRange(visibleRowIndex, 9).setValue(form.input3);
  sheet.getRange(visibleRowIndex, 10).setValue(form.input4);
  sheet.getRange(visibleRowIndex, 11).setValue(form.input5);
  sheet.getRange(visibleRowIndex, 12).setValue(form.input6);
  sheet.getRange(visibleRowIndex, 13).setValue(form.input7);
  sheet.getRange(visibleRowIndex, 14).setValue(form.input8);
  sheet.getRange(visibleRowIndex, 15).setValue(form.input9);
  sheet.getRange(visibleRowIndex, 16).setValue(form.input10);
  sheet.getRange(visibleRowIndex, 17).setValue(form.input11);
  sheet.getRange(visibleRowIndex, 18).setValue(form.input12);
  sheet.getRange(visibleRowIndex, 19).setValue(form.input13);
  sheet.getRange(visibleRowIndex, 20).setValue(form.input14);
  sheet.getRange(visibleRowIndex, 21).setValue(form.input15);
  sheet.getRange(visibleRowIndex, 22).setValue(form.input16);
  sheet.getRange(visibleRowIndex, 23).setValue(form.input17);
  sheet.getRange(visibleRowIndex, 24).setValue(form.input18);
  sheet.getRange(visibleRowIndex, 25).setValue(form.input19);
  sheet.getRange(visibleRowIndex, 26).setValue(form.input20);
  sheet.getRange(visibleRowIndex, 27).setValue(form.input21);
  //disable link field
  // sheet.getRange(visibleRowIndex, 28).setValue(form.input22);

  //Clear filter
  sheet = SpreadsheetApp.getActiveSheet(); //for testing purpose only
  var filter = sheet.getFilter();
  if (filter !== null) {  // tests if there is a filter applied
    var range = filter.getRange(); // prevents exception in case the filter is not applied to all columns
    var firstColumn = range.getColumn();
    var lastColumn = range.getLastColumn();
    for (var i = firstColumn; i < lastColumn; i++) {
      filter.removeColumnFilterCriteria(i);
    }

  }
  else { // Create a user interface object
    var ui = SpreadsheetApp.getUi();

    // Create a modal dialog box with a specified title, message, and "OK" button
    var result = ui.alert(
      'Not column is filtered!!!',
      ui.ButtonSet.OK);
    return;
  }



}

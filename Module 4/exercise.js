function validateANDadd() {
    // place the values in the form into variables
    var theNewWord = document.forms["myForm"]["newWord"].value;
    var theNewNumber = document.forms["myForm"]["newNumber"].value;
    // validate that something was entered as a word
    if (theNewWord == "") {
      // no word was entered so tell the user
      alert("Please enter a word to check");
      return false;
    }
    // validate that a 1 or 2 was entered as a number
    else if ((theNewNumber != 1) && (theNewNumber != 2)) {
      // a 1 or 2 was not entered as the number so tell user and clear the field
      alert("Please enter a 1 or 2 for the algorithm to use.");
      document.forms["myForm"]["newNumber"].value = "";
      return false;
    }
    else {
        // a word was entered and a 1 or 2 was entered as the number so add it to the table
        // build the Javascript object
        var obj = { word: theNewWord, number: theNewNumber };
        // convert the Javascript object to a JSON string
        var myJSON = JSON.stringify(obj);
        // add the string to the table
        var tableRef = document.getElementById("myJSONtable");
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = myJSON + ",";
        // erase the form fields
        document.forms["myForm"]["newWord"].value = "";
        document.forms["myForm"]["newNumber"].value = "";
        return true;
    }
  }

  function clearFile() {
    // clear the table of all rows
    var tableRef = document.getElementById("myJSONtable");
    tableRef.innerHTML = " ";
  }
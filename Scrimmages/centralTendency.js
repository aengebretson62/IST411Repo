function validateANDadd() {
    // place the values in the form into variables
    var theNewMin = document.forms["myForm"]["minValue"].value;
    var theNewMax = document.forms["myForm"]["maxValue"].value;
    var theNewNumber = document.forms["myForm"]["newNumber"].value;

    // validate that something was entered for minimum
    if (theNewMin == "") {
      // nothing was entered so tell the user
      alert("Please enter a minimum value");
      return false;
    }
    // validate that something was entered for minimum
    else if (theNewMax == "") {
      // nothing was entered so tell the user
      alert("Please enter a maximum value");
      return false;
    }
    // validate that the maximum is greater than the minimum
    else if (parseInt(theNewMax) <= parseInt(theNewMin)) {
      // a minimum larger than the maximum was entered so tell the user
      alert("The maximum value must be larger than the minimum.");
      return false;
    }
    // validate that something was entered for the number
    else if (theNewNumber == "") {
    // nothing was entered so tell the user
      alert("Please enter a number to add to the list");
      return false;
        }
    // validate that the number entered in in the range
    else if ((parseInt(theNewNumber) < parseInt(theNewMin)) || (parseInt(theNewNumber) > (parseInt(theNewMax)))) {
      // the number was not in the range so tell the user
      alert("Please enter a value in the range");
      document.forms["myForm"]["newNumber"].value = "";
      return false;
    }
    else {
        // valid numbers are entered for the range and the number
        // so add the number to the list and calculate and display the mean, median and mode
        var tableRef = document.getElementById("numberList");
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewNumber;
        // erase the number in the form
        document.forms["myForm"]["newNumber"].value = "";
        // disable the min and max range so it can't change
        document.forms["myForm"]["minValue"].disabled = true;
        document.forms["myForm"]["maxValue"].disabled = true;
        return true;
    }
  }

  function clearAll() {
    // clear the table
    var tableRef = document.getElementById("numberList");
    tableRef.innerHTML = "";
    // clear the mean, median and mode labels
    var labelRef1 = document.getElementById("theMean");
    labelRef1.innerHTML = "n/a";
    var labelRef2 = document.getElementById("theMedian");
    labelRef2.innerHTML = "n/a";
    var labelRef3 = document.getElementById("theMode");
    labelRef3.innerHTML = "n/a";
    // clear the minValue, maxValue and newNumber text boxes
    //     in the form and enable the minValue and maxValue
    document.forms["myForm"]["minValue"].value = "";
    document.forms["myForm"]["minValue"].disabled = false;
    document.forms["myForm"]["maxValue"].value = "";
    document.forms["myForm"]["maxValue"].disabled = false;
    document.forms["myForm"]["newNumber"].value = "";

  }

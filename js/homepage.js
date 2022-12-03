function EnableDisable(searchVal) {
    //Reference the Button.
    var btnSubmit = document.getElementById("submitbuttonid");

    console.log(btnSubmit)
    //Verify the TextBox value.
    if (searchVal.value.trim() != "") {
        //Enable the TextBox when TextBox has value.
        btnSubmit.disabled = false;
        console.log('here')
    } else {
        //Disable the TextBox when TextBox is empty.
        btnSubmit.disabled = true;
    }
};

function fetchData(searchVal) {
    console.log(']]] = '+searchVal)
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const myJson = await response.json(); //extract JSON from the http response
    // console.log('==='+myJson)
    // do something with myJson
  }
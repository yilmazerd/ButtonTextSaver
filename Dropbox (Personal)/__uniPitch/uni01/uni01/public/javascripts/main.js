    function formFieldsFun() {
      return ["inputName","inputMonth","inputStatus","inputDiscount","inputPromotion","inputClosure","inputEmail"];
    }

    function exampleDataLoadFun() {
      return ["Summer Family","October","0","2","2","Summer Family, many thanks for your interest in our resort! We would love to host you at your first chance. Have a wonderful day","msummer@gmail.com"]
    }
    
    function countPunc(text, punc){
      return text.length - text.replace(punc,"").length;
    }
    
    function validateForm() {
      formFields = formFieldsFun();
      exampleFields = exampleDataLoadFun();
      for (var i = formFields.length - 1; i >= 0; i--) {
        //formFields[i];
        document.getElementById(formFields[i]).value = exampleFields[i];
      }
    var x = "skdnfsnfdj"
    var m = countPunc(x, /[.,\/#!$%\^&\*;:{}=\-_`~()]/g) 
    /*if (x == "") {
        alert("Name must be filled out");
        return false;
      }
    
    if (m/x.length<0.1) {
      alert("You don't have enough punctiation marks. It is likely that your text will not sound natural. Try adding comas to make it sound better")
    }
      
    if (x.length<40) {
      alert("You don't have enough words in the sentence. This version of the software needs at least 10 words")
    }  
    */
    }

    function readFormButtonx() {
    //var myFormData = [];
    var stringToCollect = "{"
    formFields = formFieldsFun();
    for (var i = formFields.length - 1; i >= 0; i--) {
      //myFormData.push(document.getElementById(formFields[i]).value);
      stringToCollect = stringToCollect + '"' + formFields[i]+ '":"' + document.getElementById(formFields[i]).value + '"';
      if (i!=0) {stringToCollect = stringToCollect + ','};
    };
    stringToCollect = stringToCollect + "}";

    var objJSON = JSON.parse(stringToCollect); //needs to be parseable
    var xhr = new XMLHttpRequest();
	xhr.open("POST", '/erdem', true);

	//Send the proper header information along with the request
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function() {//Call a function when the state changes.
    	if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        // Request finished. Do processing here.
    }
	}
	xhr.send(stringToCollect); 



 }
 
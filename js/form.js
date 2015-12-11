 $('#personalform').one('submit',function(){
        var name = encodeURIComponent($('#firstname').val());
        var nameid="entry.23690980";
        
        var email=encodeURIComponent($("#email").val());
        var emailid="entry.1412988977";
        
        var number=encodeURIComponent($("#phonenumber").val());
        var numberid="entry.1690564137";
        
        var hno=encodeURIComponent($("#hno").val());
        var lane=encodeURIComponent($("#lane").val());
        var city=encodeURIComponent($("#city").val());
        var state=encodeURIComponent($("#state").val());
        var pincode=encodeURIComponent($("#pin").val());
    
        var address=(hno+lane+city+state+pincode);
        var addressid="entry.1788680782";

        var baseURL = 'https://docs.google.com/forms/d/1giSEkb1nVlqoTX0DW96eWUDhxasIBfqtOdqLEux-g6M/formResponse?';
        var submitRef = '&submit=Submit';
        var submitURL = (baseURL + nameid+"="+name+"&"+emailid+"="+email+"&"+numberid+"="+number+"&"+addressid+"="+address+ submitRef);
        console.log(submitURL);
        $(this)[0].action=submitURL;
    });
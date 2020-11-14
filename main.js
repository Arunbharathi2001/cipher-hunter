function encrypton(){
    var letters = /^[A-Z a-z]+$/;
    var kgcheck = /^[A-Za-z]+$/;
    var gap = /^\s/;
    var data= document.getElementById("edata").value;
    if(data=="" || data.trim()==""){
        alert("Please Enter your Data for Encryption");
        location.reload(true);
    }
    else{
        if(data.match(letters))
        {
            var keygen = prompt("Create a Encryption Key for your Data :");
        }
        else
        {
            alert("Please Make Sure that the Data does not contain Numbers or Special characters");
            location.reload(true);
      
        }
    }
    if(keygen.match(kgcheck))
        {
            var keynum = prompt("Enter the Range of Difficulty for Encryption (1-40) :");
            if(keynum>0 && keynum<=40){
                enfur(keygen,keynum,data,kgcheck,gap); 
                location.reload(true);;
            }
            else{
                alert("Please Enter a valid Range (1-40)");
                location.reload(true);
            }
        }
    else{
        alert("Encryption key should be a single word (alphabets only)");
        location.reload(true);
    
    }
}
function isUpperCase(str) {
    return str === str.toUpperCase();
}
function enfur(val,code,ip,re,gap){
    var count=0;
    var avg=0;
    var res;
    var word = val.toLowerCase();
    var lip=ip.toLowerCase();
    var n = word.length;
    var ipl= ip.length;
    for(i=0;i<n;i++){
        count += word.charCodeAt(i);
    }
    avg = Math.floor((count/n)%96);
    switch(code){
        case "1":
            res = cesar(ip,avg,ipl,re,gap);
            alert(res);
            break;
        case "2":
            res = binary(cesar(ip,avg,ipl,re,gap),ipl);
            alert(res);
            break;
        case "3":
            res = ascii(cesar(ip,avg,ipl,re,gap),ipl);
            alert(res);
            break;
        case "4":
            res = reverse(cesar(ip,avg,ipl,re,gap));
            alert(res);
            break;            
        case "5":
            res= btoa(ip);
            alert(res); 
            break;
        case "6":
            res= atbash(cesar(ip,avg,ipl,re,gap),ipl);
            alert(res);
            break; 
        case "7":
            res= btoa(btoa(cesar(ip,avg,ipl,re,gap)));
            alert(res);
            break; 
        case "8":
            res= btoa(cesar(ip,avg,ipl,re,gap));
            alert(res);
            break; 
        case "9":
            res= dcm(cesar(ip,avg,ipl,re,gap),ipl);
            alert(res);
            break; 
        case "10":
            res= abc(cesar(ip,avg,ipl,re,gap),ipl);
            alert(res);
            break;  
        case "11":
            res = binary(reverse(cesar(ip,avg,ipl,re,gap)),ipl);
            alert(res);
            break;
        case "12":
            res = ascii(reverse(cesar(ip,avg,ipl,re,gap)),ipl);
            alert(res);
            break;
        case "13":
            res= atbash(reverse(cesar(ip,avg,ipl,re,gap)),ipl);
            alert(res);
            break; 
        case "14":
            res= btoa(reverse(cesar(ip,avg,ipl,re,gap)));
            alert(res);
            break; 
        case "15":
            res= dcm(reverse(cesar(ip,avg,ipl,re,gap)),ipl);
            alert(res);
            break; 
        case "16":
            res= abc(reverse(cesar(ip,avg,ipl,re,gap)),ipl);
            alert(res);
            break; 
        case "17":
            res= reverse(binary(cesar(ip,avg,ipl,re,gap),ipl));
            alert(res);
            break; 
        case "18":
            res= reverse(ascii(cesar(ip,avg,ipl,re,gap),ipl));
            alert(res);
            break;            
        case "19":
            res=binary(atbash(cesar(ip,avg,ipl,re,gap),ipl),ipl);
            alert(res);
            break;
        case "20":
            res=ascii(atbash(cesar(ip,avg,ipl,re,gap),ipl),ipl);
            alert(res);
            break;
        case "21":
            res=btoa(atbash(cesar(ip,avg,ipl,re,gap),ipl));
            alert(res);
            break;
        case "22":
            res=dcm(atbash(cesar(ip,avg,ipl,re,gap),ipl),ipl);
            alert(res);
            break;
        case "23":
            res=abc(atbash(cesar(ip,avg,ipl,re,gap),ipl),ipl);
            alert(res);
            break;
        case "24":
            res=binary(dcm(cesar(ip,avg,ipl,re,gap),ipl),ipl);
            alert(res);
            break;
        case "25":
            res=ascii(dcm(cesar(ip,avg,ipl,re,gap),ipl),ipl);
            alert(res);
            break;
        case "26":
            res=btoa(dcm(cesar(ip,avg,ipl,re,gap),ipl));
            alert(res);
            break;
        case "27":
            res=abc(dcm(cesar(ip,avg,ipl,re,gap),ipl),ipl);
            alert(res);
            break;
        case "28":
            res=binary(abc(cesar(ip,avg,ipl,re,gap),ipl),ipl);
            alert(res);
            break;
        case "29":
            res=ascii(abc(cesar(ip,avg,ipl,re,gap),ipl),ipl);
            alert(res);
            break;
        case "30":
            res=atbash(abc(cesar(ip,avg,ipl,re,gap),ipl),ipl);
            alert(res);
            break;
        case "31":
            res=btoa(abc(cesar(ip,avg,ipl,re,gap),ipl));
            alert(res);
            break;
        case "32":
            res=dcm(abc(cesar(ip,avg,ipl,re,gap),ipl),ipl);
            alert(res);
            break;   
        case "33":
            res= binary(atbash(reverse(cesar(ip,avg,ipl,re,gap)),ipl),ipl);
            alert(res);
            break;
        case "34":
            res= abc(dcm(atbash(cesar(ip,avg,ipl,re,gap),ipl),ipl),ipl);
            alert(res);
            break;
        case "35":
            res= btoa(abc(dcm(atbash(cesar(ip,avg,ipl,re,gap),ipl),ipl),ipl));
            alert(res);
            break;
        case "36":
            res= binary(abc(dcm(atbash(reverse(cesar(ip,avg,ipl,re,gap)),ipl),ipl),ipl),ipl);
            alert(res);
            break;
        case "37":
            res= ascii(abc(dcm(atbash(reverse(cesar(ip,avg,ipl,re,gap)),ipl),ipl),ipl),ipl);
            alert(res);
            break;
        case "38":
            res= dcm(atbash(reverse(cesar(ip,avg,ipl,re,gap)),ipl),ipl);
            alert(res);
            break;
        case "40":
            res= abc(dcm(atbash(reverse(cesar(ip,avg,ipl,re,gap)),ipl),ipl),ipl);
            alert(res);
            break;
        case "39":
            res= btoa(abc(dcm(atbash(reverse(cesar(ip,avg,ipl,re,gap)),ipl),ipl),ipl));
            alert(res);
            break;

    }
}
function dcm(a,n){
    var cr="";
    var alphaa="A BCDEFGHIJKLMNOPQRSTUVWXYZ"
    var changea="N OPQRSTUVWXYZABCDEFGHIJKLM"
    var alphab= alphaa.toLowerCase();
    var changeb= changea.toLowerCase();
    for(i=0;i<n;i++){
        var temp =a[i]
        if(temp==temp.toUpperCase()){
            cr+=changea[alphaa.indexOf(temp)]
        }
        else if(temp==temp.toLowerCase()){
            cr+=changeb[alphab.indexOf(temp)]
        }
        else{
            cr+=a[i];
        } 
    }
    return cr;
}

function abc(a,n){
    var cr="";
    var alphaa="A BCDEFGHIJKLMNOPQRSTUVWXYZ"
    var changea="O VWQZNPRUXSYTFAGDHKMIBCJLE"
    var alphab= alphaa.toLowerCase();
    var changeb= changea.toLowerCase();
    for(i=0;i<n;i++){
        var temp =a[i]
        if(temp==temp.toUpperCase()){
            cr+=changea[alphaa.indexOf(temp)]
        }
        else if(temp==temp.toLowerCase()){
            cr+=changeb[alphab.indexOf(temp)]
        }
        else{
            cr+=a[i];
        } 
    }
    return cr;
}

function cesar(a,k,n,re,gap){
    var cr="";
    for(i=0;i<n;i++){
        if(a[i].match(re)) 
        {   if(isUpperCase(a[i])){
                cr += String.fromCharCode((a.charCodeAt(i) + k - 65) % 26 + 65);
            }
            else{
                cr += String.fromCharCode((a.charCodeAt(i) + k - 97) % 26 + 97);
            }
        }
        else if(a[i].match(gap)){
            cr+=a[i];
        }    
    }
    return cr;
}

function lalpha(a,n,re,gap){
    var cr="";
    cr+=(a[0].charCodeAt(0))%96
    for(i=1;i<n;i++){
        if(a[i].match(re)) 
        {      
            cr+=" "+((a[i].charCodeAt(0))%96); 
        }
        else if(a[i].match(gap)){
            cr+=a[i];
        }    
    }
    return cr;
}
function polyb(a,n){
    var cr="";
    var alphaa="abcdefghijklmnopqrstuvwxyz "
    var polyarr=["11 ","12 ","13 ","14 ","15 ","21 ","22 ","23 ","24 ","24 ","25 ","31 ","32 ","33 ","34 ","35 ","41 ","42 ","43 ","44 ","45 ","51 ","52 ","53 ","54 ","55 "," "]
    for(i=0;i<n;i++){
        cr+=polyarr[alphaa.indexOf(a[i])]
    }
    return cr;
}

function atbash(a,n){
    var cr="";
    var alphaa="A BCDEFGHIJKLMNOPQRSTUVWXYZ"
    var changea="Z YXWVUTSRQPONMLKJIHGFEDCBA"
    var alphab= alphaa.toLowerCase();
    var changeb= changea.toLowerCase();
    for(i=0;i<n;i++){
        var temp =a[i]
        if(temp==temp.toUpperCase()){
            cr+=changea[alphaa.indexOf(temp)]
        }
        else if(temp==temp.toLowerCase()){
            cr+=changeb[alphab.indexOf(temp)]
        }
        else{
            cr+=a[i];
        } 
    }
    return cr;
}

function binary(a,n){
    var cr="";
    cr+= a.charCodeAt(0).toString(2)
    for(i=1;i<n;i++){
        cr+= " " + a.charCodeAt(i).toString(2);
    }
    return cr;
}

function ascii(a,n){
    var cr="";
    cr+=a.charCodeAt(0)
    for(i=1;i<n;i++){
        cr+= " "+a.charCodeAt(i);
    }
    return cr;
}

function reverse(a){
    var cr="";
    for(i=a.length-1;i>=0;i--){ 
        cr+=a[i];
    }
    return cr;
}


function decrypton(){
    var kgcheck = /^[A-Za-z]+$/;
    var gap = /^\s/;
    var data= document.getElementById("dedata").value;
    if(data=="" || data.trim()==""){
        alert("Please Enter your Data for Decryption");
        location.reload(true);
    }
    else{
        if(data!="" && data!=" ")
        {
            var keygen = prompt("Enter the Encryption Key for your Data :");
        }
    }
    if(keygen.match(kgcheck))
        {
            var keynum = prompt("Enter the Difficulty Range used for Encryption");
            if(keynum>0 && keynum<=40){
                defur(keygen,keynum,data,kgcheck,gap); 
                location.reload(true);
            }
            else{
                alert("Please Enter a valid Range (1-40)");
                location.reload(true);
            }
        }
    else{
        alert("Encryption key is invalid");
        location.reload(true);
    }
}
function defur(val,code,ip,re,gap){
    var count=0;
    var avg=0;
    var res;
    var word = val.toLowerCase();
    var lip=ip.toLowerCase();
    var n = word.length;
    var ipl= ip.length;
    for(i=0;i<n;i++){
        count += word.charCodeAt(i);
    }
    avg = Math.floor((count/n)%96);
    switch(code){
        case "1":
            res=decesar(ip,avg,gap);
            alert(res);
            break;
        case "2":
            res = decesar(debinary(ip),avg,gap);
            alert(res);
            break;
        case "3":
            res = decesar(deascii(ip),avg,gap);
            alert(res);
            break;
        case "4":
            res = decesar(reverse(ip),avg,gap);
            alert(res);
            break;            
        case "5":
            res=atob(ip);
            alert(res); 
            break;
        case "6":
            res= decesar(deatbash(ip),avg,gap);
            alert(res);
            break; 
        case "7":
            res= decesar(atob(atob(ip)),avg,gap);
            alert(res);
            break; 
        case "8":
            res= decesar(atob(ip),avg,gap);
            alert(res);
            break; 
        case "9":
            res= decesar(dedcm(ip),avg,gap);
            alert(res);
            break; 
        case "10":
            res= decesar(deabc(ip),avg,gap);
            alert(res);
            break;  
        case "11":
            res = decesar(reverse(debinary(ip)),avg,gap);
            alert(res);
            break;
        case "12":
            res = decesar(reverse(deascii(ip)),avg,gap);
            alert(res);
            break;
        case "13":
            res= decesar(reverse(deatbash(ip)),avg,gap);
            alert(res);
            break; 
        case "14":
            res= decesar(reverse(atob(ip)),avg,gap);
            alert(res);
            break; 
        case "15":
            res= decesar(reverse(dedcm(ip)),avg,gap);
            alert(res);
            break; 
        case "16":
            res= decesar(reverse(deabc(ip)),avg,gap);
            alert(res);
            break; 
        case "17":
            res= decesar(debinary(reverse(ip)),avg,gap);
            alert(res);
            break; 
        case "18":
            res= decesar(deascii(reverse(ip)),avg,gap);
            alert(res);
            break;            
        case "19":
            res=decesar(deatbash(debinary(ip)),avg,gap);
            alert(res);
            break;
        case "20":
            res=decesar(deatbash(deascii(ip)),avg,gap);
            alert(res);
            break;
        case "21":
            res=decesar(deatbash(atob(ip)),avg,gap);
            alert(res);
            break;
        case "22":
            res=decesar(deatbash(dedcm(ip)),avg,gap);
            alert(res);
            break;
        case "23":
            res=decesar(deatbash(deabc(ip)),avg,gap);
            alert(res);
            break;
        case "24":
            res=decesar(dedcm(debinary(ip)),avg,gap);
            alert(res);
            break;
        case "25":
            res=decesar(dedcm(deascii(ip)),avg,gap);
            alert(res);
            break;
        case "26":
            res=decesar(dedcm(atob(ip)),avg,gap);
            alert(res);
            break;
        case "27":
            res=decesar(dedcm(deabc(ip)),avg,gap);
            alert(res);
            break;
        case "28":
            res=decesar(deabc(debinary(ip)),avg,gap);
            alert(res);
            break;
        case "29":
            res=decesar(deabc(deascii(ip)),avg,gap);
            alert(res);
            break;
        case "30":
            res=decesar(deabc(deatbash(ip)),avg,gap);
            alert(res);
            break;
        case "31":
            res=decesar(deabc(atob(ip)),avg,gap);
            alert(res);
            break;
        case "32":
            res=decesar(deabc(dedcm(ip)),avg,gap);
            alert(res);
            break;   
        case "33":
            res= decesar(reverse(deatbash(debinary(ip))),avg,gap);
            alert(res);
            break;
        case "34":
            res= decesar(deatbash(dedcm(deabc(ip))),avg,gap);
            alert(res);
            break;
        case "35":
            res= decesar(deatbash(dedcm(deabc(atob(ip)))),avg,gap);
            alert(res);
            break;
        case "36":
            res= decesar(reverse(deatbash(dedcm(deabc(debinary(ip))))),avg,gap);
            alert(res);
            break;
        case "37":
            res= decesar(reverse(deatbash(dedcm(deabc(deascii(ip))))),avg,gap);
            alert(res);
            break;
        case "38":
            res= decesar(reverse(deatbash(dedcm(ip))),avg,gap);
            alert(res);
            break;
        case "40":
            res= decesar(reverse(deatbash(dedcm(deabc(ip)))),avg,gap);
            alert(res);
            break;
        case "39":
            res= decesar(reverse(deatbash(dedcm(deabc(atob(ip))))),avg,gap);
            alert(res);
            break;
    }
}

function dedcm(a){
    var cr="";
    var alphaa="N OPQRSTUVWXYZABCDEFGHIJKLM"
    var changea="A BCDEFGHIJKLMNOPQRSTUVWXYZ"
    var alphab= alphaa.toLowerCase();
    var changeb= changea.toLowerCase();
    for(i=0;i<a.length;i++){
        var temp =a[i]
        if(temp==temp.toUpperCase()){
            cr+=changea[alphaa.indexOf(temp)]
        }
        else if(temp==temp.toLowerCase()){
            cr+=changeb[alphab.indexOf(temp)]
        }
        else{
            cr+=a[i];
        } 
    }
    return cr;
}

function deabc(a){
    var cr="";
    var alphaa="A BCDEFGHIJKLMNOPQRSTUVWXYZ"
    var changea="O VWQZNPRUXSYTFAGDHKMIBCJLE"
    var alphab= alphaa.toLowerCase();
    var changeb= changea.toLowerCase();
    for(i=0;i<a.length;i++){
        var temp =a[i]
        if(temp==temp.toUpperCase()){
            cr+=changea[alphaa.indexOf(temp)]
        }
        else if(temp==temp.toLowerCase()){
            cr+=changeb[alphab.indexOf(temp)]
        }
        else{
            cr+=a[i];
        } 
    }
    return cr;
}
function decesar(a,k,gap){
    var cr="";
    for(i=0;i<a.length;i++){
        if(a[i].match(gap)){
            cr+=a[i];
        }   
        else{
                if(isUpperCase(a[i])){
                    cr += String.fromCharCode((a.charCodeAt(i) - k - 65 + 26) % 26 + 65);
                }
                else{
                    cr += String.fromCharCode((a.charCodeAt(i) - k - 97 + 26) % 26 + 97);
                }
            
        } 
    }
    return cr;
}
function deatbash(a){
    var cr="";
    var alphaa="A BCDEFGHIJKLMNOPQRSTUVWXYZ"
    var changea="Z YXWVUTSRQPONMLKJIHGFEDCBA"
    var alphab= alphaa.toLowerCase();
    var changeb= changea.toLowerCase();
    for(i=0;i<a.length;i++){
        var temp =a[i]
        if(temp==temp.toUpperCase()){
            cr+=changea[alphaa.indexOf(temp)]
        }
        else if(temp==temp.toLowerCase()){
            cr+=changeb[alphab.indexOf(temp)]
        }
        else{
            cr+=a[i];
        } 
    }
    return cr;
}
function delalpha(a){
    var cn="";
    var temp = a.split(" ");
    var alphaa="abcdefghijklmnopqrstuvwxyz "
    var polyarr=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26"," "]
    for(i=0;i<temp.length;i++){
        cn+=alphaa[polyarr.indexOf(temp[i])]
    }
    return cn;
}
function depolyb(a){
    var cr="";
    var temp = a.split(" ");
    var alphaa="abcdefghijklmnopqrstuvwxyz "
    var polyarr=["11","12","13","14","15","21","22","23","24","24","25","31","32","33","34","35","41","42","43","44","45","51","52","53","54","55"," "]
    for(i=0;i<temp.length;i++){
        cr+=alphaa[polyarr.indexOf(temp[i])]
    }
    return cr;
}

function deascii(a){
    var temp = a.split(" ");
    var cr="";
    for(i=0;i<temp.length;i++){
        cr+= String.fromCharCode(temp[i]);
    }
    return cr;
}
function debinary(a) {
    var temp = a.split(" ");
    var cr="";
    cr+= temp.map(code => String.fromCharCode(parseInt(code, 2))).join("");
    return cr;
  }
var attack="#####\xa0\xa0#####\xa0\xa0#####\xa0\xa0#####\xa0\xa0#####\xa0\xa0#\xa0\xa0\xa0#\n\
#\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#\xa0\xa0\xa0#\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0#\xa0\xa0#\n\
#####\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#####\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0###\n\
#\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#\xa0\xa0\xa0#\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0#\xa0\xa0#\n\
#\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#\xa0\xa0\xa0#\xa0\xa0#####\xa0\xa0#\xa0\xa0\xa0#"

console.log(attack)

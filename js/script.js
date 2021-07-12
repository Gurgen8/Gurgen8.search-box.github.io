var myArray = [
    {"id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    }, {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    }, {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    }, {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    }, {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "phone": "(254)954-1289",
    "website": "demarco.info",
    }, {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    }, {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "phone": "210.067.6132",
    "website": "elvis.io",
    }, {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    }, {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    }, {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "phone": "024-648-3804",
    "website": "ambrose.net",
    }
     
    ]
    
    
    
    $('#search-input').on('keyup', function(event){
     
        if(event.keycode===40){
             addActive(x)
             currentFocus--
        }

         var value=$(this).val()
       
         console.log("value:",value)
         var data=searchTable(value,myArray)
         buildTable(data)
         
     })
          
    
     function searchTable(value,data){
         var filterData=[];
         for(var i=0;i<data.length;i++){
           value=value.toLowerCase()
           var name=data[i].name.toLowerCase()
           var username=data[i].username.toLowerCase()
           var phone=data[i].phone.toLowerCase()
           var id=data[i].email.toLowerCase()
           var email=data[i].email.toLowerCase()
           var website=data[i].website.toLowerCase()
           if(name.includes(value) || username.includes(value) || phone.includes(value) || email.includes(value) || website.includes(value)|| id.includes(value)   ){
               filterData.push(data[i])
               
              
           }
         }
         return filterData
     }
           
    function buildTable(data){
        var table = document.getElementById('myTable')
        table.innerHTML = ''
     
        for (var i = 0; i < data.length; i++){
            
    
          var row = `<tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].username}</td>
                            <td>${data[i].website}</td>
                            <td>${data[i].email}</td>
                            <td>${data[i].phone}</td>
                            <td>${data[i].id}</td>
    
                       </tr>`
            table.innerHTML += row
            
        }
    }

    function autocomplete(inp, arr) {
       
        var currentFocus;
   
        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
   
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");

            this.parentNode.appendChild(a);

            for (i = 0; i < arr.length; i++) {
           
              if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
             
                b = document.createElement("DIV");
    
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
         
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
               
                b.addEventListener("click", function(e) {
                   
                    inp.value = this.getElementsByTagName("input")[0].value;
             
                    closeAllLists();
                });
                a.appendChild(b);
              }
            }
        });
   


        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
        
              currentFocus++;
       
              addActive(x);
            } else if (e.keyCode == 38) {
              currentFocus--;
        
              addActive(x);
            } else if (e.keyCode == 13) {
             
              e.preventDefault();
              if (currentFocus > -1) {
            
                if (x) x[currentFocus].click();
              }
            }
        });
        function addActive(x) {
       
          if (!x) return false;
        
          removeActive(x);
          if (currentFocus >= x.length) currentFocus = 0;
          if (currentFocus < 0) currentFocus = (x.length - 1);
      
          x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
         
          for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
          }
        }
        function closeAllLists(elmnt) {
     
          var x = document.getElementsByClassName("autocomplete-items");
          for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
              x[i].parentNode.removeChild(x[i]);
            }
          }
        }
  
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
      }

      var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
      
      autocomplete(document.getElementById("myInput"), countries);
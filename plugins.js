$(document).ready (function (){

    // code of map in footer 
    var map;
    var lat,lang;
   
   function getpostion(){
       navigator.geolocation.getCurrentPosition(show_map)
     
   }
   
   
   function show_map(position){
   
   lat=position.coords.latitude;
   lang=position.coords.longitude;
   
   console.log('lat ',lat,'lang ', lang)
   var p=new Promise(function(resolve,reject){
     
       initmap()
   })
   p.then(console.log("good")).catch(console.log("error"))
   
   }
   
   function initmap(){
      // alert('good')
   map=new google.maps.Map(document.querySelector('.map'),{
       center:{lat:lat,lng:lang}, zoom:4
   });

   }
   
   getpostion()

   /*$('.map').innerHTML= `<iframe  class="col-12" height="400px" 
   src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.
   262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981"></iframe>`*/
                

    // end code of map in footer 


    //code of login in register

    $('#login').click(function(){
    
        $('.modal').modal('toggle');
        $('.username').css({"border":"2px solid red"})
        $('.username').focus(function(){
            $('.username').css({"border":"0px"})
        })
        
        
        })

    // end code of login in register


    
    $('.carousel').carousel({ 
        interval:2000
      })
      $(".navbar li a").click(function(){
        $('html , body').animate({
            scrollTop: $('#'+ $(this).data("value")).offset().top
        }, 1000);
       
    });
    $(document).ready(function(){
        var map;
        var lat,long;
        function getpostion(){
            navigator.geolocation.getCurrentPosition(show_map)
        }
        function show_map(position){
        lat=position.coords.latitude;
        long=position.coords.longitude
        }
        
        function initmap(){
        map=new google.maps.Map(document.querySelector('#map'),{
            center:{lat:lat,lng:long}, zoom:8
        });
        }
        
        //getpostion()
        //initmap()
        var index=0
        function person(name,pass,age,email,address,track){
             this.name=name;
             this.pass=pass;
             this.age=age;
             this.email=email;
             this.address=address;
             this.track=track;
             this.index=index++;
        }
        var person_array=[]
        var date=new Date();
        
        
        
        //var age_value=date.getFullYear()-dateofpicker.getFullYear();
         var name_value,pass_value,email_value,address_value,date_value,track_value;
         //var age_value=date.getFullYear()-dateofpicker.getFullYear();
        var flage
        $('input[name="name"]').blur(valid_name)
        $('input[name="pass"]').blur(valid_pass)
        $('input[name="email"]').blur(valid_email)
        $('input[name="address"]').blur(valid_address)
        $('input[name="age"]').blur(valid_date)
        $('input[name="track"]').blur(valid_track)
        $('button[name="sign"]').click(sign_up)
        function valid_name(){
            var flage=true;
             name_value=$('input[name="name"]').val();
            
            if(name_value==""){
             //   alert('1')
              document.getElementById('myPopup').innerHTML="require"
            $('#myPopup').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
            flage=false
            }else if(name_value.length<=8){
              //  alert('2')
              //  $('#myPopup').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
              document.getElementById('myPopup').innerHTML="length more 8"
               
                $('#myPopup').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
                flage=false
            }
             
                for(var i=0;i<name_value.length;i++){
              
                    if((name_value[i])==' '){
                        document.getElementById('myPopup'). innerHTML=" must not contan space";
                        $('#myPopup').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
                        i=100
                        flage=false
                        return false;
                    }
                }
            
            
               if(flage){
               $('#myPopup').css({ "visibility":" hidden"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
               console.log('name ','true')
                return true;
            }
            
        }
        
        function valid_pass(){
             pass_value=$('input[name="pass"]').val();
            if(pass_value==""){
                //   alert('1')
                 document.getElementById('myPopup1').innerHTML="require"
               $('#myPopup1').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
               }else if(pass_value.length<=10){
                document.getElementById('myPopup1').innerHTML="length must more 10"
                $('#myPopup1').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
               }else{
                $('#myPopup1').css({ "visibility":" hidden"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
                return true;
               }
        
        
        }
        
        function valid_email(){
             email_value=$('input[name="email"]').val();
            if(email_value==""){
                //   alert('1')
                 document.getElementById('myPopup2').innerHTML="require"
               $('#myPopup2').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
               }else{
              
                $('#myPopup2').css({ "visibility":" hidden"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
                 return true;
             }
        }
        
        function valid_address(){
             address_value=$('input[name="address"]').val();
            if(address_value==""){
                //   alert('1')
                 document.getElementById('myPopup3').innerHTML="require"
               $('#myPopup3').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
               }else if(address_value.length<=8){
              //  alert('2')
              //  $('#myPopup').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
              document.getElementById('myPopup3').innerHTML="length more 8"
               
                $('#myPopup3').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
            }else{
              
                $('#myPopup3').css({ "visibility":" hidden"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
                 return true;
             }
        
        }
        function valid_date(){
            
           
             date_value=$('input[name="age"]').val()
               
            if(date_value==""){
                
                 document.getElementById('myPopup4').innerHTML="require"
               $('#myPopup4').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
               }else{
              
                $('#myPopup4').css({ "visibility":" hidden"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
                var dateofpicker=new Date($('input[name="age"]').val())
                 age_value=date.getFullYear()-dateofpicker.getFullYear();
                // console.log('age ',date.getFullYear(),dateofpicker.getFullYear())
                 return true;
             }
        
        }
       
        function valid_track(){
            var flage=true;
             track_value=$('input[name="track"]').val()
            if(track_value==""){
                
                document.getElementById('myPopup5').innerHTML="require"
              $('#myPopup5').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
              flage=false;
              }else if(track_value.length<=5){

                document.getElementById('myPopup5').innerHTML="length must more 5"
              $('#myPopup5').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
              flage=false;
              }
                
                  for(var i=0;i<track_value.length;i++){
                
                      if((isNaN(track_value[i]))==false){
                          document.getElementById('myPopup5'). innerHTML=" must not contan number";
                          $('#myPopup5').css({ "visibility":" visible"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
                          i=100
                          flage=false;
                          return false
                      }
                  }
              
             
                if(flage){
                 $('#myPopup5').css({ "visibility":" hidden"," -webkit-animation":"fadeIn 1s","animation":"fadeIn 1s;"})
                 console.log('track ','true')
                  return true;
                }
             
        }
        
        function sign_up(){
           
            var name_return=valid_name()
            var pass_return=valid_pass()
            var email_return=valid_email()
            var address_return=valid_address()
            var date_return=valid_date()
            var track_return=valid_track()
            console.log("return ",name_return,pass_return,email_return,address_return,date_return,track_return)
            if(name_return&&pass_return&&email_return&&address_return&&date_return&&track_return){
             
                save_date()
            }
        }
        function save_date(){
        
          var p=new person(name_value,pass_value,age_value,email_value,address_value,track_value);
          console.log('person',p)
           person_array.push(p)
          console.log(person_array)
        }
        
        })
    })

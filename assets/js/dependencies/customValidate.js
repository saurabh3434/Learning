$(document).ready(function(){
    console.log('Enter');

    $('#sign-up-form').validate({
        rules:{
            name:{
                required: true
            },
            email:{
                required: true,
                email:true
            },
            password:{
                minlength: 6,
                required: true
            },
            confirmation:{
                minlength:6,
                equalTo: "#password"
            },
        },
        success: function(element){
            element
            .text('ok').addClass('valid')
        }
    });
});
$(document).ready(function(){
    $('#pass').click(function(){
        var x=document.getElementById("pwd");
        if(x.type==="password")
        {
            x.type="text";
        }
        else
        {
            x.type="password";
        }
    });

    $('#Validate').click(function(){
        let UserName = $('#userName').val();
        let PassWord = $('#pwd').val();
        console.log(UserName, PassWord);
        $.ajax({
            type:"POST",
            url: "php/login.php",
            data: { username: UserName, pwd: PassWord},
            dataType: 'text',
            success: function(res){
                localStorage.setItem("username",UserName);
                if(res == '200'){
                    window.location.href = 'profile.html';
                }else{
                    alert(res)
                }
            }
        });
    });
});
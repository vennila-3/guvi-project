$(document).ready(function(){
    $('#signup').click(function(){
        let Name = $('#name').val();
        let DOB = $('#dob').val();
        let Phone = $('#phone').val();
        let Email = $('#email').val();
        let Password = $('#password').val();

        localStorage.setItem("name",Name);
        localStorage.setItem("dob",DOB);
        localStorage.setItem("phone",Phone);
        localStorage.setItem("email",Email);
        localStorage.setItem("password",Password);
        $.ajax({
            type:"POST",
            url: "php/register.php",
            data: { name: Name, dob: DOB, phone:Phone, email:Email, password:Password },
            success: function(res){
                if(res == '200'){
                    alert('User Registered SUccessfully');
                    window.location.href = 'login.html';
                }else{
                    alert(res);
                }

            }
        });
    });    
});
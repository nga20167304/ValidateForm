function validateForm()
{
	var username_array=new Array("ngadt9","khanhvd3","songnx","trungnt9","hieuhn","huynq12","tuanlq","anhhn2","vinhdt2");
	var fullname=document.getElementById('fullname').value;
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	re=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
	for(var i=0;i<username_array.length;i++){
		if(username==username_array[i])
			{
				alert("Username can not duplicate");
				return false;
			}
		}
	if(!re.test(password)){
		alert("Error: Username must contain only letters, numbers and underscores and must be least 9 characters!");
		return false;
	}
}

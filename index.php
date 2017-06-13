<?php 

if(isset($_POST['form']) && $_POST['form']=="login"){
	echo "Login Successfully";

	$myfile = fopen("records.txt", "r");


	echo fread($myfile,filesize("records.txt"));

	exit;

}else if(isset($_POST['form'])&& $_POST['form']=="signup"){
	$myfile = fopen("records.txt", "a");
	$text=",\n{
		f_name:{$_POST['first_name']}, 
		l_name:{$_POST['last_name']}, 
		email:{$_POST['signup_mail']}
	}";

	fwrite($myfile, $text);
	
	echo (fread($myfile,filesize("records.txt"))."]");
	exit;
}

 ?>
<?php
include("config.php");

if($_SERVER["REQUEST_METHOD"] == "POST")
{
// username and password sent from Form
echo $_POST['txtun'];

$passwordSecure= hash('sha256', $mypassword);
$sql="SELECT id,level FROM login WHERE username='$myusername' and password='$passwordSecure'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_array($result,MYSQLI_ASSOC);
$level=$row['level'];
//$active=$row['active'];
$count=mysqli_num_rows($result);


// If result matched $myusername and $mypassword, table row must be 1 row
if($count==1)
{
session_start();
//session_register("myusername");
//session_register("level");
$_SESSION['login_user']=$myusername;
//$_SESSION['level_user']=$level;
header("location:welcome.php?pu=$level&ps=0");
}
else 
{
echo "Your Login Name or Password is invalid";
if ($myusername!=""){
echo "<br> ERROR";
echo "<br><input name=\"pss\" type=\"hidden\" value=\"QjFUMlVuMFIwQ2s1\">";
echo "<br><input name=\"id\" type=\"hidden\" value=\"bWFya29uYWg=\">";
}
?>
<br>
<span class="font11">Try login back ---&gt;</span><a href="login.php"><strong><span class="font11">
        Login Page</span></strong></a>
<?php
}
}
?>

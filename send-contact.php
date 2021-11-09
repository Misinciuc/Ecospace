<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.proiectmd.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'send_client@proiectmd.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'send_client'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('send_client@proiectmd.com'); // от кого будет уходить письмо?
$mail->addAddress('srlecospace@gmail.com');     // Кому будет уходить письмо 

$mail->isHTML(true);                                  

$mail->Subject = 'Comandă';
// $mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email;
$numele = !empty($_POST["numele"]) ? 'Numele:  ' . $_POST["numele"] : '';
$prenumele = !empty($_POST["prenumele"]) ? 'Prenumele:  ' . $_POST["prenumele"] : '';
$telefon = !empty($_POST["telefon"]) ? 'Telefon:  ' . $_POST["telefon"] : '';
$ozon = !empty($_POST["ozon"]) ? 'Serviciu:  ' . $_POST["ozon"] : '';
$abur = !empty($_POST["abur"]) ? 'Serviciu:  ' . $_POST["abur"] : '';
$pul = !empty($_POST["pul"]) ? 'Serviciu:  ' . $_POST["pul"] : '';
$aer = !empty($_POST["aer"]) ? 'Serviciu:  ' . $_POST["aer"] : '';
$email = !empty($_POST["email"]) ? 'Email:  ' . $_POST["email"] : '';
// $contact = !empty($_POST["comentariu"]) ? 'его контакт:  ' . $_POST["comentariu"] : '';

$mail->msgHTML("<div>
    <div> {$numele}</div>
    <div> {$ozon}</div>
    <div> {$abur}</div>
    <div> {$pul}</div>
    <div> {$aer}</div>
    <div> {$telefon}</div>
    <div> {$email}</div>
    
   
</div>");


// $mail->addAttachment($file);
// $mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']); 
// $mail->AltBody = '';

if(!$mail->send()) {
    echo 'Eroare la trimitere';
    $mail->SMTPDebug = 3;   
} else {
    header('location: thank-you.html');
}
?>




    const sendForm = document.getElementById('order-btn')
    const form = document.getElementById('form-id')
    const phoneInput = document.getElementById('phone')
    const userName = document.getElementById('name')
    const userEmail = document.getElementById('email')
    const nameErrorTxt = document.getElementById('name-error')
    const phoneErrorTxt = document.getElementById('phone-error')
    const emailErrorTxt = document.getElementById('email-error')
    const phoneErrorSign = document.getElementById('exclamation-error')
    const checkBoxErrorSign = document.getElementById('exclamation-error')
    const nameErrorSign = document.getElementById('exclamation-error-password')
    const inpcheck = document.querySelector(".checkselect-over")
    const errorCheck = document.getElementById('checkbox-error')
    const confirmButton = document.getElementById('confirm-btn')
    const changeLng = document.querySelectorAll('.adapt')
    const selectedIndex = document.getElementById('change-lng').selectedIndex;

    let RoArray = [
      'Introduceți numele și prenumele',
      'Introduceți un numar de telefon valabil',
      'Introduceți adresa de email',
      'Selectați cel puțin un serviciu'
    ],
      RuArray = [
        'Введите имя и фамилию',
        "Введите действующий номер телефона",
        'Введите корректный электронный адрес',
        "Выберите хотя бы одну услугу"
      ],
      EnArray = [
        'Enter your name and Surname ',
        'Enter a valid phone number',
        'Enter a valid email address',
        'Select at least one service'
      ],
      SpArray = [
        'Ingrese nombre y apellido',
        'Ingresa un número de teléfono válido',
        'Introduzca una dirección de correo electrónico válida',
        'Seleccione al menos un servicio'
      ],
      DeArray = [
        'Name und Nachname eingeben',
        'Gültige Telefonnummer eingeben',
        'Geben sie eine gültige E-Mail-Adresse an',
        'Mindestens einen Dienst auswählen'
      ]

    form.addEventListener('submit', (e) => {
     function checkPhoneInput() { 
        if (phoneInput.value.length <= 8) {
          errorPhoneField();
          e.preventDefault();
           switch (selectedIndex) {
            case 0:
              phoneErrorTxt.innerText = RoArray[1]
              break
            case 1:
              phoneErrorTxt.innerText = RuArray[1]
              break
            case 2:
              phoneErrorTxt.innerText = EnArray[1]
              break
            case 3:
              phoneErrorTxt.innerText= SpArray[1]
              break
            case 4:
              phoneErrorTxt.innerText= DeArray[1]
              break
          }  
        } 
        else {
          ClearPhoneinput()
        }
      }
    

      function inputNameCheck() {
        let letters = /^[a-zA-Z:2]+ [a-zA-Z]+$/;
        if (!userName.value.match(letters)) {
          errorNameField()
          e.preventDefault()
          switch (selectedIndex) {
            case 0:
            nameErrorTxt.innerText = RoArray[0]
              break
            case 1:
            nameErrorTxt.innerText = RuArray[0]
              break
            case 2:
            nameErrorTxt.innerText = EnArray[0]
              break
            case 3:
            nameErrorTxt.innerText = SpArray[0]
              break
            case 4:
            nameErrorTxt.innerText = DeArray[0]
              break
          } 
        }
        else {
          ClearNameinput()
        }
      }

      function inputEmailCheck() {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!userEmail.value.match(validRegex)) {
          e.preventDefault()
          errorEmailField()
          switch (selectedIndex) {
            case 0:
            emailErrorTxt.innerText = RoArray[2]
              break
            case 1:
            emailErrorTxt.innerText = RuArray[2]
              break
            case 2:
            emailErrorTxt.innerText = EnArray[2]
              break
            case 3:
            emailErrorTxt.innerText = SpArray[2]
              break
            case 4:
            emailErrorTxt.innerText = DeArray[2]
              break
          }
          errorEmailField()
        } 
        else {
          ClearEmailinput()
        }
      }

      function valCheckbox() {
        const checkboxs = document.getElementsByClassName("custom-checkbox");
        let okay = false;
        for (var i = 0, l = checkboxs.length; i < l; i++)
          if (checkboxs[i].checked) {
            okay = true;
            break;
          }
        if (okay === true) {
          clearCheckbox()
        } else {
          switch (selectedIndex) {
            case 0:
            errorCheck.innerText = RoArray[3]
              break
            case 1:
            errorCheck.innerText = RuArray[3]
              break
            case 2:
            errorCheck.innerText = EnArray[3]
              break
            case 3:
            errorCheck.innerText = SpArray[3]
              break
            case 4:
            errorCheck.innerText = DeArray[3]
              break
          }
          e.preventDefault()
          errorCheckbox()
        }
      }
      confirmButton.addEventListener('click', () => {
        clearCheckbox()
      })


      valCheckbox()
      checkPhoneInput();
      inputNameCheck()
      inputEmailCheck()

      function errorPhoneField() {
        phoneErrorSign.classList.add('bi-exclamation-visible')
        phoneInput.classList.add('input-error')
        phoneErrorTxt.style.visibility = 'visible'
      }

      function errorNameField() {
        nameErrorSign.classList.add('bi-exclamation-visible')
        userName.classList.add('input-error')
        nameErrorTxt.style.visibility = 'visible'
      }
      function errorEmailField() {
        nameErrorSign.classList.add('bi-exclamation-visible')
        userEmail.classList.add('input-error')
        emailErrorTxt.style.visibility = 'visible'
      }
      function ClearNameinput() {
        nameErrorSign.classList.remove('bi-exclamation-visible')
        userName.classList.remove('input-error')
        nameErrorTxt.style.visibility = 'hidden'
      }
      function ClearPhoneinput() {
        phoneErrorSign.classList.remove('bi-exclamation-visible')
        phoneInput.classList.remove('input-error')
        phoneErrorTxt.style.visibility = 'hidden'
      }
      function ClearEmailinput() {
        phoneErrorSign.classList.remove('bi-exclamation-visible')
        userEmail .classList.remove('input-error')
        emailErrorTxt.style.visibility = 'hidden'
      }
      function errorCheckbox() {
        inpcheck.classList.add('input-error')
        errorCheck.style.visibility = 'visible'
      }
      function clearCheckbox() {
        inpcheck.classList.remove('input-error')
        errorCheck.style.visibility = 'hidden'
      }

    })




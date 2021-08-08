const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');
const zip = document.getElementById('zipcode');
const zipError = document.querySelector('#zipcode + span.error');
const form = document.querySelector('form');
const age = document.getElementById('age');
const ageError = document.querySelector('#age + span.error');
const pwd = document.getElementById('pwd');
const pwdError = document.querySelector('#pwd + span.error');
const pwdConfirm = document.getElementById('passwordConfirm');
const pwdConfirmError = document.querySelector('#passwordConfirm + span.error');

email.addEventListener('input', function (event) {
  if (email.validity.valid) {
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    showEmailError();
  }
});

zip.addEventListener('input', function (event) {
  if (zip.validity.valid) {
    zipError.textContent = '';
    zipError.className = 'error';
  } else {
    showZipError();
  }
});

age.addEventListener('input', function (event) {
  if (age.validity.valid) {
    ageError.textContent = '';
    ageError.className = 'error';
  } else {
    showAgeError();
  }
});

pwd.addEventListener('input', function (event) {
  if (pwd.validity.valid) {
    pwdError.textContent = '';
    pwdError.className = 'error';
  } else {
    showPwdError();
  }
  passwordMatch();
});

pwdConfirm.addEventListener('input', passwordMatch);

function passwordMatch() {
  pwdConfirm.pattern = `${pwd.value}`;
  if (pwdConfirm.value === pwd.value) {
    pwdConfirmError.textContent = '';
    pwdConfirmError.className = 'error';
    // pwdConfirm.setCustomValidity('');
  } else {
    showPwdConfirmError();
  }
  console.log(pwdConfirm.validity);
}

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit
  if (
    !email.validity.valid ||
    !age.validity.valid ||
    !zip.validity.valid ||
    !pwd.validity.valid ||
    pwd.value != pwdConfirm.value
  ) {
    // If it isn't, we display an appropriate error message
    event.preventDefault();
    // Then we prevent the form from being sent by canceling the event
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // Set the styling appropriately
  emailError.className = 'error active';
}

function showZipError() {
  if (zip.validity.valueMissing) {
    zipError.textContent = 'You need to enter a zipcode.';
  } else if (zip.validity.patternMismatch) {
    zipError.textContent = 'Zipcode should only contain numbers';
  } else if (zip.validity.tooShort) {
    zipError.textContent = `Zipcode should be at least ${zip.minLength} characters; you entered ${zip.length}.`;
  } else if (zip.validity.tooLong) {
    zipError.textContent = `Zipcode should be at most ${zip.maxLength} characters; you entered ${zip.length}.`;
  }
  zipError.className = 'error active';
}

function showAgeError() {
  if (age.validity.valueMissing) {
    ageError.textContent = 'You need to enter an age';
  } else if (age.validity.rangeUnderflow) {
    ageError.textContent = 'Age too low. Please enter a valid age between 13 and 120.';
  } else if (age.validity.rangeOverflow) {
    ageError.textContent = 'Age too high. Please enter a valid age between 13 and 120.';
  } else if (age.validity.stepMismatch) {
    ageError.textContent = 'Please enter a whole number between 13 and 120.';
  } else if (age.validity.badInput) {
    ageError.textContent = 'Please enter a number.';
  }
  ageError.className = 'error active';
}

function showPwdError() {
  if (pwd.validity.patternMismatch) {
    pwdError.textContent =
      'Password must contain one capital, one lowercase, one number and be between 8 and 32 long';
  }
  pwdError.className = 'error active';
}

function showPwdConfirmError() {
  // pwdConfirm.setCustomValidity("Passwords don't match");
  pwdConfirmError.textContent = "Passwords don't match";
  pwdConfirmError.className = 'error active';
}

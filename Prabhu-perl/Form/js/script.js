var details = {
  firstName: $('#firstName').val(),
  fullName: $('#fullName').val(),
  Designation: $('#designation').val(),
  EmployeeCode: $('#employeeCode').val(),
  BloodGroup: $('#bloodGroup').val(),
  ReasonForIssue: $("input[name='reason']:checked").val(),
  DateOfJoining: $('#doj').val(),
  Email: $('#vemail').val(),
  MobileNumber: $('#mobileNumber').val(),
  status: null
};

function postValues() {
  $.ajax({
    type: "POST",
    url: 'https://form-validation-a9be5.firebaseio.com/form.json',
    data: JSON.stringify(details),
    success: function (response) {
      console.log(response);
    }
    //dataType: dataType
  });
}
$('#validate').click(function () {
  //console.log($('#firstName').val());


  //console.log("Inside click");
  validateFirstName();
  validateFullName();
  validateDesignation();
  validateEmployeeCode();
  validateBloodGroup();
  validateReasonForIssue();
  validateDateOfJoining();
  validateEmail();
  validateMobileNumber();
})

function validateFirstName() {
  //console.log("Inside validateFirstName");
  if ($('#firstName').val() === "") {
    //console.log(details.firstName);
    $('.errorMessage').show();


  } else {
    $('.errorMessage').hide();

  }
}

function validateFullName() {
  //console.log("Inside validateFullName");
  if ($('#fullName').val() === "") {
    $('.errorMessage').show();

  } else {
    $('.errorMessage').hide();
    //postValues();

  }
}

function validateDesignation() {
  //console.log("Inside validateFullName");
  if ($('#designation').val() === "") {
    $('.errorMessage').show();

  } else {
    $('.errorMessage').hide();
    //postValues();

  }
}

function validateEmployeeCode() {
  //console.log("Inside validateFullName");
  if ($('#employeeCode').val() === "") {
    $('.errorMessage').show();

  } else {
    $('.errorMessage').hide();
    //postValues();

  }
}

function validateBloodGroup() {
  //console.log("Inside validateFullName");
  if ($('#bloodGroup').val() === "") {
    $('.errorMessage').show();

  } else {
    $('.errorMessage').hide();
    //postValues();

  }
}

function validateReasonForIssue() {
  //console.log("Inside validateFullName");
  if ($("input[name='reason']:checked").val() === "") {
    $('.errorMessage').show();

  } else {
    $('.errorMessage').hide();
    //postValues();

  }
}

function validateDateOfJoining() {
  //console.log("Inside validateFullName");
  if ($('#doj').val() === "") {
    $('.errorMessage').show();

  } else {
    $('.errorMessage').hide();
    //postValues();

  }
}

function validateEmail() {
  //console.log("Inside validateFullName");
  if ($('#vemail').val() === "") {
    $('.errorMessage').show();

  } else {
    $('.errorMessage').hide();
    //postValues();

  }
}

function validateMobileNumber() {
  //console.log("Inside validateFullName");
  if ($('#mobileNumber').val() === "") {
    $('.errorMessage').show();

  } else {
    $('.errorMessage').hide();
    postValues();

  }
}
$('document').ready(() => {
  $('.errorMessage').hide();
  // console.log(details.firstName);


});
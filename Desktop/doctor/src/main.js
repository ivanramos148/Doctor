import './styles.css';
import {
  doctors
} from './doctors.js';

$(document).ready(function() {
  $('#doctorForm').submit(function(event) {
    event.preventDefault();
    $("#error").text("");
    $('#doctorList').empty();

    doctors({
      firstName: $('#first-name').val(),
      lastName: $('#last-name').val(),
      specialty: $('#specialty').val()
    });
  });
});

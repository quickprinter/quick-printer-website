// Quick Printer & PC Repair Solutions — site behavior

document.addEventListener('DOMContentLoaded', function () {

  // Keep the footer copyright year always current
  var yearSpan = document.querySelector('footer .foot-row span');
  if (yearSpan) {
    yearSpan.textContent = yearSpan.textContent.replace(/\d{4}/, new Date().getFullYear());
  }

  // Contact form: this site has no backend yet, so we confirm the request
  // was captured and remind the visitor to also call/email directly.
  var form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('name').value.trim();

      var note = form.querySelector('.form-note');
      if (!note) {
        note = document.createElement('p');
        note.className = 'form-note';
        note.style.marginTop = '16px';
        note.style.fontSize = '14px';
        note.style.color = '#5b6472';
        form.appendChild(note);
      }

      note.textContent = (name ? 'Thanks, ' + name + '. ' : 'Thanks. ') +
        'This form isn\'t connected to email yet — for now, please also call ' +
        '+251 922 732 969 or message juliyadsultan@gmail.com so we see your request right away.';

      form.reset();
    });
  }

});

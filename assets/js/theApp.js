$(function () {

  $('.date-range__control').on('change', function (e) {
    var $control = $(this);
    var $custom = $('.date-range__custom');
    if ($control.val() === 'custom') {
      $('#modal-custom-range').modal('show');

    } else {
      $('#modal-custom-range').modal('hide');
      $('.change-date-range-container').hide();
      $('.import-results-date-range-label').text(" - " + $control.val())
    }
  });

  $(".change-date-range").on("click", function (e) {
    e.preventDefault();
    $('#modal-custom-range').modal('show');
  });

  $('#modal-custom-range').on('hide.bs.modal', function () {
    $('.datepicker').hide();
    $('.change-date-range-container').show().css("display", "inline-block");
  });

  $('#rangeSelect').on('click', function () {
    $('.import-results-date-range-label').html('- Aug 15, 2017 - Aug 15, 2018 ')
  });

  $("#saveBtn2").on("click", function (e) {
    e.preventDefault();
    $('#schedule-import').modal('hide');
    $('.sImport, .iProcess').removeClass('d-none').addClass('d-block');
    $('.iSchedule').addClass('d-none').removeClass('d-block')
  });

  $(".btnScheduled").on("click", function (e) {
    e.preventDefault();
    $('#schedule-import, .modal-backdrop').hide('slow');
    $('.sImport, .iProcess').removeClass('d-none').addClass('d-block');
    $('.iSchedule, .iInProcess, .iSuccess, .sProcess, .sFinished, .iSchedule').addClass('d-none').removeClass('d-block')
  });

  $(".btnProcessing").on("click", function (e) {
    e.preventDefault();
    $('.iInProcess, .sProcess, .statusSummary').removeClass('d-none').addClass('d-block');
    $('.iProcess, .sImport, .iSchedule, .sImport, .iSuccess, .sFinished').addClass('d-none').removeClass('d-block');
  });

  $(".btnFinished").on("click", function (e) {
    e.preventDefault();
    $('.iSuccess, .sFinished,  .statusSummary').removeClass('d-none').addClass('d-block');
    $('.sProcess, .iInProcess, .iSchedule, .sImport, .iProcess' +
        '').addClass('d-none').removeClass('d-block');
  });

  $(".btnSchedule").on("click", function (e) {
    e.preventDefault();
    $('.iSchedule').removeClass('d-none').addClass('d-block');
    $('.sProcess, .iInProcess, .iSuccess, .sFinished, .sImport, .iProcess, .statusSummary').addClass('d-none').removeClass('d-block');
  });

  $(function () {
    $('#datetimepicker13').datetimepicker({
      inline: true,
      sideBySide: true
    });
  });

  /*  var popoverTemplate = ['<div class="popover scheduleReport" role="tooltip"><div class="arrow"></div><h3 class="popover-header">Schedule Import Report</h3><div class="popover-body"></div></div>'].join('');
 
   var content = ['<div><a href="#" id="open-import-form"  class="schedule">Add New </a></div><div><a href="#" id="manage-import">Manage Reports</a></div>'].join('');
 
  $('body').popover({
     selector: '[data-toggle=popover]',
     template: popoverTemplate,
     content: content,
     html: true,
     trigger: 'focus'
   });*/


/*
  const formId = "importSchedule"; // ID of the form
  const url = location.href; //  href for the page
  const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
  const saveButton = document.querySelector("#saveBtn2"); // select save button
  const wrapper = document.querySelector(".wrapper");
  const savedForm = document.querySelector(".savedForm");
  const closeModal = document.querySelector("#savedFormCancel");
  const alertBox = document.querySelector("#alertMessage");
  let message = "Your report has been scheduled!";
  let iconCounter;
  let form = document.querySelector(`#${formId}`), // select form
    formElements = form.elements; // get the elements in the form

  const getFormData = () => {
    let data = {[formIdentifier]: {}}; // create an empty object with the formIdentifier as the key and an empty object as its value
    for (const element of formElements) {
      if (element.name.length > 0) {
        data[formIdentifier][element.name] = element.value;
      }
    }
    return data;
  };

  const displayAlert = message => {
    alertBox.innerText = message; // add the message into the alert box
    wrapper.style.display = "none";
    alertBox.style.display = "block"; // make the alert box visible
    savedForm.style.display = "block";
    setTimeout(function () {
      alertBox.style.display = "none"; // hide the alert box after 1 second
    }, 4200);
    //alertBox.alert();

  };

  if (saveButton) {
    saveButton.addEventListener('click', function (event) {
      event.preventDefault();
      data = getFormData();
      localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
      displayAlert(message);

    });
  }

 /* if (closeModal) {
    closeModal.addEventListener('click', function (event) {

      const addFormIcon = $('#newStudentImportReport');

      let formIcons = ["icon-calendar-plus-1", "icon-calendar-plus-2", "icon-calendar-plus-3", "icon-calendar-plus-4", "icon-calendar-plus-5", "icon-calendar-plus-6", "icon-calendar-plus-7", "icon-calendar-plus-8", "icon-calendar-plus-9", "icon-calendar-plus-9-plus"];

      for (iconCounter = 0; iconCounter < formIcons.length; iconCounter++) {

        if (formIcons[0]) {
          addFormIcon.children().replaceWith('<span class="' + formIcons[0] + ' ' + 'text-secondary"></span>');
          $('.wrapper').show();
          $('.savedForm').hide();
          break;
        } else if (formIcons[1]) {
          addFormIcon.children().replaceWith('<span class="' + formIcons[1] + ' ' + 'text-secondary"></span>');
          $('.wrapper').show();
          $('.savedForm').hide();
          break;
        } else if (formIcons[2]) {
          addFormIcon.children().replaceWith('<span class="' + formIcons[2] + ' ' + 'text-secondary"></span>');
          $('.wrapper').show();
          $('.savedForm').hide();
          break;
        }
      }
      return iconCounter;

    });
  }*/


  const populateForm = () => {
    if (localStorage.key(formIdentifier)) {
      const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
      for (const element of formElements) {
        if (element.name in savedData) {
          element.value = savedData[element.name];
        }
      }
    }
  };

/*  $('#schedule-import').on('hidden.bs.modal', function (e) {
    $('#sImport').show();
  //  $('.savedForm').hide();

  });*/

  $('.modal').on('click', '#closeBtn', function (event) {
    $('.sImport').show();
    $('.modal').hide();
  //  populateForm();
  });

  $('body').on('click', '#editForm', function (event) {
    $('.wrapper').show();
    $('.savedForm').hide();
    populateForm();
  });

  $('body').on('click', '#deleteForm', function (event) {
    var thisTR = $($(this)).closest('tr');
    thisTR.addClass('bg-light');
    var deleteMessage = $('#deleteMessage');
    deleteMessage.fadeIn();
  });

  $('body').on('click', '#yesDelete', function (event) {
    var deleteMessage = $('#deleteMessage');
    var thisTR = $('.savedForm').find('.bg-light').remove();
    deleteMessage.fadeOut();
  });

  $('body').on('click', '#notDelete', function (event) {
    var deleteMessage = $('#deleteMessage'),
        removeHighlight = $('.savedForm').find('.bg-light').removeClass('bg-light');
    deleteMessage.fadeOut();
  });
});

(function (window, $) {
  'use strict';
  window.HealthStream = window.HealthStream || {};
  var healthStream = window.HealthStream;

  healthStream.studentImportProgressSummary = {};
  healthStream.studentImportProgressSummary.resultsDataTable = function () {
    var studentImportProgressSummaryTbl = $('#studentImportProgressSummary').DataTable({
      "bSortClasses": false,
      "paging": true,
      "order": [
        [0, "asc"]
      ],
      "dom": 'ft<"studentImportProgressSummaryBottom"rlip>',
      "columnDefs": [{
        "visible": false,
        "targets": "hideOnLoad",
      }, {
        "orderable": false,
        "targets": "unsortable"
      }],
      "lengthMenu": [[100, 250,-1], [100, 250, "All"]],
      language: {
        search: "_INPUT_",
        info: "Showing _START_ to _END_ of _MAX_ records",
        searchPlaceholder: "Quick Search",
        lengthMenu: "Show _MENU_ records",
        paginate: {
          previous: '<i class="icon-caret-left"></i>',
          next: '<i class="icon-caret-right"></i>'
        }
      },
      "pageLength": 100
    });

    studentImportProgressSummaryTbl.columns().iterator('column', function (ctx, idx) {
      $(studentImportProgressSummaryTbl.column(idx).header()).append('<span class="icon-sort"/>');
    });

    expandMobileRow();
    generateDynamicDataTitles();
    customizeColumns(studentImportProgressSummaryTbl);
    keepDropDownMenuOpen();
    updateTableHeaderFooter();

    //place default info into Results header
    function updateTableHeaderFooter() {
      $(".dataTables_info").hide();
     // $('.StudentImportProgressSummaryHeader').html($("#studentImportProgressSummary_info").html());
    }

    //reinitialize jquery when table is redrawn (pagination)
    $(".dataTable").on('draw.dt', function () {
      expandMobileRow();
      generateDynamicDataTitles();
      updateTableHeaderFooter();
    });
  };

  healthStream.studentImportSuccess = {};
  healthStream.studentImportSuccess.resultsDataTable = function () {
    var studentImportSuccessTbl = $('#studentImportSuccess').DataTable({
      "bSortClasses": false,
      "paging": true,
      "order": [
        [0, "asc"]
      ],
      "dom": 'ft<"studentImportSuccessBottom"rlip>',
      "columnDefs": [{
        "visible": false,
        "targets": "hideOnLoad",
      }, {
        "orderable": false,
        "targets": "unsortable"
      }],
      "lengthMenu": [[100, 200, 250, -1], [100, 200, 250, "All"]],
      language: {
        search: "_INPUT_",
        info: "Showing _START_ to _END_ of _MAX_ records",
        searchPlaceholder: "Quick Search",
        lengthMenu: "Show _MENU_ records",
        paginate: {
          previous: '<i class="icon-caret-left"></i>',
          next: '<i class="icon-caret-right"></i>'
        }
      },
      "pageLength": 5
    });

    studentImportSuccessTbl.columns().iterator('column', function (ctx, idx) {
      $(studentImportSuccessTbl.column(idx).header()).append('<span class="icon-sort"/>');
    });

    expandMobileRow();
    generateDynamicDataTitles();
    customizeColumns(studentImportSuccessTbl);
    keepDropDownMenuOpen();
    updateTableHeaderFooter();

    //place default info into Results header
    function updateTableHeaderFooter() {
      $(".dataTables_info").hide();
      $('.studentImportHeader').html($("#studentImportSuccess_info").html());
    }

    //reinitialize jquery when table is redrawn (pagination)
    $(".dataTable").on('draw.dt', function () {
      expandMobileRow();
      generateDynamicDataTitles();
      updateTableHeaderFooter();
    });
  };

  healthStream.studentImportSuccessSummary = {};
  healthStream.studentImportSuccessSummary.resultsDataTable = function () {
    var studentImportSuccessSummaryTbl = $('#studentImportSuccessSummary').DataTable({
      "bSortClasses": false,
      "paging": true,
      "order": [
        [0, "asc"]
      ],
      "dom": 'ft<"studentImportSuccessSummaryBottom"rlip>',
      "columnDefs": [{
        "visible": false,
        "targets": "hideOnLoad",
      }, {
        "orderable": false,
        "targets": "unsortable"
      }],
      "lengthMenu": [[100, 200, 250, -1], [100, 200, 250, "All"]],
      language: {
        search: "_INPUT_",
        info: "Showing _START_ to _END_ of _MAX_ records",
        searchPlaceholder: "Quick Search",
        lengthMenu: "Show _MENU_ records",
        paginate: {
          previous: '<i class="icon-caret-left"></i>',
          next: '<i class="icon-caret-right"></i>'
        }
      },
      "pageLength": 5
    });

    studentImportSuccessSummaryTbl.columns().iterator('column', function (ctx, idx) {
      $(studentImportSuccessSummaryTbl.column(idx).header()).append('<span class="icon-sort"/>');
    });

    expandMobileRow();
    generateDynamicDataTitles();
    customizeColumns(studentImportSuccessSummaryTbl);
    keepDropDownMenuOpen();
    updateTableHeaderFooter();

    //place default info into Results header
    function updateTableHeaderFooter() {
      $(".dataTables_info").hide();
      $('.studentImportSuccessSummaryHeader').html($("#studentImportSuccessSummary_info").html());
    }

    //reinitialize jquery when table is redrawn (pagination)
    $(".dataTable").on('draw.dt', function () {
      expandMobileRow();
      generateDynamicDataTitles();
      updateTableHeaderFooter();
    });
  };

  healthStream.studentImportErrorSummary = {};
  healthStream.studentImportErrorSummary.resultsDataTable = function () {
    var studentImportErrorSummaryTbl = $('#studentImportErrorSummary').DataTable({
      "bSortClasses": false,
      "paging": true,
      "order": [
        [0, "asc"]
      ],
      "dom": 'ft<"studentImportErrorSummaryBottom"rlip>',
      "columnDefs": [{
        "visible": false,
        "targets": "hideOnLoad",
      }, {
        "orderable": false,
        "targets": "unsortable"
      }],
      "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      language: {
        search: "_INPUT_",
        info: "Showing _START_ to _END_ of _MAX_ records",
        searchPlaceholder: "Quick Search",
        lengthMenu: "Show _MENU_ records",
        paginate: {
          previous: '<i class="icon-caret-left"></i>',
          next: '<i class="icon-caret-right"></i>'
        }
      },
      "pageLength": 5
    });

    studentImportErrorSummaryTbl.columns().iterator('column', function (ctx, idx) {
      $(studentImportErrorSummaryTbl.column(idx).header()).append('<span class="icon-sort"/>');
    });

    expandMobileRow();
    generateDynamicDataTitles();
    customizeColumns(studentImportErrorSummaryTbl);
    keepDropDownMenuOpen();
    updateTableHeaderFooter();

    //place default info into Results header
    function updateTableHeaderFooter() {
      $(".dataTables_info").hide();
    }

    //reinitialize jquery when table is redrawn (pagination)
    $(".dataTable").on('draw.dt', function () {
      expandMobileRow();
      generateDynamicDataTitles();
      updateTableHeaderFooter();
    });
  };

  healthStream.studentImportErrorDetail = {};
  healthStream.studentImportErrorDetail.resultsDataTable = function () {
    var studentImportErrorDetailTbl = $('#studentImportErrorDetail').DataTable({
      "bSortClasses": false,
      "paging": true,
      "order": [
        [0, "asc"]
      ],
      "dom": 'ft<"studentImportErrorDetailBottom"rlip>',
      "columnDefs": [{
        "visible": false,
        "targets": "hideOnLoad",
      }, {
        "orderable": false,
        "targets": "unsortable"
      }],
      "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      language: {
        search: "_INPUT_",
        info: "Showing _START_ to _END_ of _MAX_ records",
        searchPlaceholder: "Quick Search",
        lengthMenu: "Show _MENU_ records",
        paginate: {
          previous: '<i class="icon-caret-left"></i>',
          next: '<i class="icon-caret-right"></i>'
        }
      },
      "pageLength": 5
    });

    studentImportErrorDetailTbl.columns().iterator('column', function (ctx, idx) {
      $(studentImportErrorDetailTbl.column(idx).header()).append('<span class="icon-sort"/>');
    });

    expandMobileRow();
    generateDynamicDataTitles();
    customizeColumns(studentImportErrorDetailTbl);
    keepDropDownMenuOpen();
    updateTableHeaderFooter();

    //place default info into Results header
    function updateTableHeaderFooter() {
      $(".dataTables_info").hide();
    }

    //reinitialize jquery when table is redrawn (pagination)
    $(".dataTable").on('draw.dt', function () {
      expandMobileRow();
      generateDynamicDataTitles();
      updateTableHeaderFooter();
    });
  };

  $(window).on('load', function () {
    $.fn.DataTable.ext.pager.numbers_length = 5;
    healthStream.studentImportProgressSummary.resultsDataTable();
    healthStream.studentImportSuccessSummary.resultsDataTable();
    healthStream.studentImportSuccess.resultsDataTable();
    healthStream.studentImportErrorSummary.resultsDataTable();
    healthStream.studentImportErrorDetail.resultsDataTable();

  });


}(window, jQuery));
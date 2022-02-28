$(function () {

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


/*  $('#schedule-import').on('hidden.bs.modal', function (e) {
    $('#sImport').show();
  //  $('.savedForm').hide();

  });*/

  // Get the modal
/*  var theModal = document.getElementById('schedule-import');

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == theModal) {
      modal.hide();
    }
  }*/

/*  $('.modal').on('click', '#closeBtn, .btn-close, .modal-backdrop', function (event) {
   // $('.sImport').show();
    $('.modal, .modal-backdrop').hide().removeClass('show');
    $('body').removeClass('modal-open')
  //  populateForm();
  });*/

 /* $('body').on('click', '#editForm', function (event) {
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
  });*/
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
let selected_id = null;

$(document).ready(function() {
    
    /*============Page Loader============*/

    $(".loader-wrapper").fadeOut("slow");

    /*============Page Loader============*/

    /*============Dynamic Modal============*/

    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
    });

    /*============Dynamic Modal============*/

    //Tooltips
    $('[data-toggle="tooltip"]').tooltip();

    //Popovers
    $('[data-toggle="popover"]').popover();

    //Dismissed popover
    $('.popover-dismiss').popover({
        trigger: 'focus'
    })

    /*============Bootstrap 4 Validation============*/

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
    
    /*============Bootstrap 4 Validation============*/

    /*============Table============*/

    //Activate tooltip
    $('[data-toggle="tooltip"]').tooltip();

    //Select/deselect checkboxes
    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function () {
        if (this.checked) {
        checkbox.each(function () {
            this.checked = true;
        });
        } else {
        checkbox.each(function () {
            this.checked = false;
        });
        }
    });
    checkbox.click(function () {
        if (!this.checked) {
        $("#selectAll").prop("checked", false);
        }
    });

    /*============Table============*/

});

/*============Toggle Sidebar Width============*/

function toggle_sidebar() {
    $('#sidebar-toggle-btn').toggleClass('slide-in');
    $('.sidebar').toggleClass('shrink-sidebar');
    $('.content').toggleClass('expand-content');
    
    //Resize inline dashboard charts
    $('#incomeBar canvas').css("width","100%");
    $('#expensesBar canvas').css("width","100%");
    $('#profitBar canvas').css("width","100%");
}

/*============Toggle Sidebar Width============*/
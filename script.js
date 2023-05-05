$(document).ready(function() {
    $('#add-input').click(function() {
        var inputGroup = $('<div class="input-group mt-3"><input type="text" class="form-control" name="name[]" placeholder="نام"><input type="text" class="form-control" name="email[]" placeholder="ایمیل"><button class="btn btn-danger remove-input"><i class="bi bi-trash"></i></button></div>');
        $('#add-input').before(inputGroup);
    });

    $(document).on('click', '.remove-input', function() {
        $(this).parent('.input-group').remove();
    });
});
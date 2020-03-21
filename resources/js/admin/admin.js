require('../bootstrap');
require('bootstrap-select/dist/js/bootstrap-select.min');
require('tolnaiz-jcrop/js/Jcrop.min');
global.moment = require('moment/moment');
require('tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.min');
import 'jquery-ui/ui/widgets/sortable.js';

const ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
require('@ckeditor/ckeditor5-build-classic/build/translations/hu');
require('@ckeditor/ckeditor5-build-classic/build/translations/en-gb');

const editors = {}; // You can also use new Map() if you use ES6
$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $(document).on('click', '.confirm', function () {
        return confirm('Are you sure?');
    });


// törlés gomb
    $(document).on('click', '.torol', function (e) {
        e.preventDefault();
        if (confirm('Are you sure?')) {
            var $this = $(this);
            $.ajax({
                url: $this.attr('href'),
                method: 'DELETE',
                success: function (resp) {
                    $('#item_' + resp.id).remove();
                },
                error: function () {
                    alert('An error occurred');
                }
            });
        }
    });


    //teszoldalra figyelmeztető szöveg elrejtése fél órára
    $('#tesztbezar').on('click', function () {
        $.ajax({
            url: '/admin/tesztbezar',
            method: 'post',
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            dataType: 'json',
        });
    });

    $('.ckeditor[required]').attr('data-required', 1).attr('required', false);

    $('.ckeditor').each(function () {
        createEditor($(this).attr('id'));
    });

    $(document).on('submit', 'form', function (e) {
        ck_check_required(e, $(this))
    });

    // kötelető mezőkhöz piros csillag
    $('[required]').each(function() {
        $(this).parents('.form-group').find('label').first().append('&nbsp;<span class="text-danger" title="Kötelező mező">*</span>');
    });



//croppolás
    $('.jcrop').each(function () {
        var $this = $(this),
            name = $this.data('name') || '_crops',
            aspectRatio = $this.data('aspect-ratio') || 1,
            selection = $this.data('selection'),
            $input = $('<input type="hidden" name="' + name + '[' + aspectRatio + ']">');

        $this.parent().append($input);
        setTimeout(function () { // hack!
            $this.Jcrop({
                trueSize: [
                    $this.get(0).naturalWidth,
                    $this.get(0).naturalHeight
                ],
                keySupport: false,
                aspectRatio: aspectRatio,
                onChange: function (c) {
                    $input.val(JSON.stringify(c));
                },
                onSelect: function (c) {
                    $input.val(JSON.stringify(c));
                },
                setSelect: [
                    selection.x,
                    selection.y,
                    selection.x2,
                    selection.y2
                ],
                boxWidth: $this.width(),
                bgColor: '#ddd'
            });
        }, 400);
    });


    rendezheto();

});
//Soraberendezhető sorok kezelése
function rendezheto() {
    $(".rendezheto").sortable({
        update: function (event, ui) {
            var $this = $(this);
            $.post($this.data('action'), {
                data: $this.sortable('serialize')
            });
        }
    });
}

function createEditor(elementId) {
    return ClassicEditor
        .create(document.getElementById(elementId), {
            toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote','table'],
            language: 'en',
        })
        .then(editor => {
            editors[elementId] = editor;
        })
        .catch(error => {
            console.log(error);
        });
}

function ck_check_required(e, form) {
    var stop = true;
    form.find('.ckeditor').each(function () {
        var id = $(this).attr('id');
        var editor = editors[id];
        if (editor.getData().length === 0 && $(this).data('required') === 1) {
            editor.editing.view.focus();
            var label = $("label[for='" + $(this).attr('id') + "']");
            $('html, body').animate({
                scrollTop: label.offset().top + 'px'
            }, 'fast');
            e.preventDefault();
            stop = false;
            return false;
        }
    });
    return stop;
}

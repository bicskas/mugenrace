@if (Session::has('message'))
    <div class="bg-white">
        <div class="container">
            <br>
            <div class="alert alert-success alert-dismissible" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                {{ Session::get('message') }}
            </div>
        </div>
    </div>
@endif

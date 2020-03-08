<div class="card-group" role="tablist">
    <div class="card ">
        <div class="card-header" role="tab" id="collapseListGroupHeading1">
            <h4 class="card-title">
                <a href="#collapseListGroup1" class="" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="collapseListGroup1"> SEO - (lenyíló rész)</a>
            </h4>
        </div>
        <div class="collapse" role="tabpanel" id="collapseListGroup1" aria-labelledby="collapseListGroupHeading1" aria-expanded="true" style="">
            <div class="card-body">
                @foreach (['seotitle', 'seokeywords', 'seodescription', 'ogtitle', 'ogdescription'] as $id)
                    {!! Form::bsText($id, $model) !!}
                @endforeach
            </div>
        </div>
    </div>
</div>


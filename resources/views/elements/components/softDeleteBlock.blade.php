@if($element->status != "deleted")
    @include('elements.buttons.adminSoftDelete',['element' => $element])
@else
    @include('elements.buttons.adminRestore',['element' => $element])
    @include('elements.buttons.adminForceDelete',['element' => $element])
@endif

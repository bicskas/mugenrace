@isset($alert_modal)
    @forelse($alert_modal as $alert)
        <div id="alertModal{{ $loop->iteration }}" class="alertModal modal fade in" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-{{$alert->color}} text-white">
                        <h5 class="modal-title">{{$alert->title}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body bg-{{$alert->color}} text-white">
                        {!! $alert->content !!}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Bezár</button>
                        <a href="{!! route('alert.read',['alert' => $alert->id]) !!}" class="btn btn-primary alert-mark-as-read" data-dismiss="modal">Megjelölés olvasottként</a>
                    </div>
                </div>
            </div>
        </div>
    @empty
    @endforelse
@endisset

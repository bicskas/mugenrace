<ul class="nav nav-tabs" role="tablist">
	@foreach ($tovabbiak as $id => $title)
		<li role="presentation" class="nav-item"><a href="#{{$id}}" aria-controls="{{$id}}" role="tab" data-toggle="tab" class="nav-link">{{$title}}</a></li>
	@endforeach
	@foreach ($locales as $kod => $nyelv)
		<li role="presentation" class="nav-item"><a href="#{{$kod}}" aria-controls="{{$kod}}" role="tab" data-toggle="tab" class="nav-link @if($loop->first) active @endif">{{$nyelv}}</a></li>
	@endforeach
	@if ($model->exists and count($locales2) > 0)
		<li role="presentation" class="dropdown nav-item">
			<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
				<span class="glyphicon glyphicon-plus"></span> Új fordítás <span class="caret"></span>
			</a>
			<div class="dropdown-menu">
				@foreach ($locales2 as $kod => $nyelv)
					<a href="?uj_nyelv={{$kod}}" class="dropdown-item">{{$nyelv}}</a>
				@endforeach
			</div>
		</li>
	@elseif(!$model->exists)
		<li role="presentation"  class="nav-item"><a class="nav-link disabled"><span class="glyphicon glyphicon-plus"></span> Új fordítás előtt mentenie kell</a></li>
	@endif
</ul>

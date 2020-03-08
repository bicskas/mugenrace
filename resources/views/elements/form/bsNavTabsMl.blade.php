<ul class="nav nav-tabs" role="tablist">
	@foreach ($tovabbiak as $id => $title)
		<li role="presentation"><a href="#{{$id}}" aria-controls="{{$id}}" role="tab" data-toggle="tab">{{$title}}</a></li>
	@endforeach
	@foreach ($locales as $kod => $nyelv)
		<li role="presentation"><a href="#{{$kod}}" aria-controls="{{$kod}}" role="tab" data-toggle="tab">{{$nyelv}}</a></li>
	@endforeach
	@if ($model->exists)
		<li role="presentation" class="dropdown">
			<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
				<span class="glyphicon glyphicon-plus"></span> Új fordítás <span class="caret"></span>
			</a>
			<ul class="dropdown-menu">
				@foreach ($locales2 as $kod => $nyelv)
					<li role="presentation"><a href="?uj_nyelv={{$kod}}">{{$nyelv}}</a></li>
				@endforeach
			</ul>
		</li>
	@else
		<li role="presentation"><a><span class="glyphicon glyphicon-plus"></span> Új fordítás előtt mentenie kell</a></li>
	@endif
</ul>

<?php

namespace App\Http\Controllers\Admin;

use App\Rider;
use App\Subscribe;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SubscribeController extends TemplateController
{

    /**
     * @var string
     */
    private $class;

    public function __construct()
    {
        parent::__construct();

        $this->class = 'subscribe';
        \View::share('active_page', $this->class);
        \View::share('Class', new Subscribe());
    }

    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $list = Subscribe::latest()->paginate(15);

        return view('admin.' . $this->class . '.list', array(
            'list' => $list->appends($request->except('page')), // lapozó miatt!
        ));
    }
}

<?php

namespace App\Http\Controllers\Commission;

use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Auth;

class receivableRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *显示收款记录
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = Input::get('id');
        $client = new Client ([
            'base_uri' => $this->base_url,

        ]);
        $response = $client->request('GET', '/api/cw/ys/submit/list',[
                'query' => [

                    'srid'=>$id,

                ]
            ]
        );
        echo $response->getBody();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {


    }

    /**
     * Store a newly created resource in storage.
     *保存
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *更新
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     *删除
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

    }

    /**
     * 取消认领
     * @param Request $request
     * @return \Psr\Http\Message\StreamInterface
     */
    public function cancelClaim(Request $request)
    {
        $obj = array_merge($request->params);
        // dd($obj);
        $client = new Client ([
            'base_uri' => $this->base_url,

        ]);

        $r = $client->request('GET', '/api/cw/ys/submit/'.$obj['id'].'/qvxiaorenling', [

        ]);
        return $r->getBody();
    }
}

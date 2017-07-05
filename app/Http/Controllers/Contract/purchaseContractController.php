<?php

namespace App\Http\Controllers\Contract;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

class purchaseContractController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function index()
    {
        $pn = Input::get('pn');
        $cnt = Input::get('cnt');
        $selectItem = Input::get('selectItem');
        if(!$pn){
            $pn = 1;
        }
        $client = new Client ([
            'base_uri' => $this->base_url,
            'timeout'  => 2.0,
        ]);
            $response = $client->request('GET', '/api/contract/sf/list',[
                'query'=>[
                    'pn'=>$pn,
                    'cnt'=>$cnt,
                    'selectItem'=>$selectItem,
                    ]
            ]);
            echo $response->getBody();
    }

    /**
     * Show the form for creating a new resource.
     *    合同新增的时候获取条款信息
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $client = new Client ([
            'base_uri' => $this->base_url,
            'timeout'  => 2.0,
        ]);
        $response = $client->request('GET', '/api/contract/sf/create');
        echo $response->getBody();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //return $request->params;
        //数据格式化
        $client = new Client([
            'base_uri' => $this->base_url,
            'timeout'  => 2.0,
            'headers' =>['access_token'=>'XXXX','app_id'=>'123']
        ]);
        $response = $client->request('POST', '/api/contract/sf/save', [
            'json' => $request->params
        ]);
        echo $response->getBody();
    }

    /**
     * Display the specified resource.
     * 根据合同ID获取合同的信息
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $client = new Client ([
            'base_uri' => $this->base_url,
            'timeout'  => 2.0,
        ]);
        $response = $client->request('GET', '/api/contract/sf/'.$id);
        echo $response->getBody();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $client = new Client ([
            'base_uri' => $this->base_url,
            'timeout'  => 2.0,
        ]);
        $response = $client->request('GET', '/api/contract/sf/'.$id.'/submit');
        echo $response->getBody();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * 二次优化
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $client = new Client([
            'base_uri' => $this->base_url,
            'timeout'  => 2.0,
            'headers' =>['access_token'=>'XXXX','app_id'=>'123']
        ]);

        $response = $client->request('POST', '/api/contract/sf/buchongXieyi/save', [
            'json' => $request->params
        ]);
        echo $response->getBody();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    /*
     * 合同审核
     *
     * */
    public function review(Request $request){
        $client = new Client([
            'base_uri' => $this->base_url,
            'timeout'  => 2.0,
            'headers' =>['access_token'=>'XXXX','app_id'=>'123']
        ]);

        $response = $client->request('POST', '/api/contract/sf/shenhe', [
            'json' => $request->params
        ]);
        echo $response->getBody();
    }
    /*
     * 修改合同条款api/contract/hetong/update/tiao
     * */
    public function editTiaoKuan(Request $request){
        $data['id'] = $request->params['id'];
        $client = new Client([
            'base_uri' => $this->base_url,
            'timeout'  => 2.0,
            'headers' =>['access_token'=>'XXXX','app_id'=>'123']
        ]);
        //条
        if(array_key_exists('kuanList', $request->params)){
            $requestUrl = '/api/contract/hetong/update/tiao';
            $data['title'] = $request->params['title'];
        }
        //款
        if(array_key_exists('xiangList', $request->params)){
            $requestUrl = '/api/contract/hetong/update/kuan/id/'.$data['id'];
            $data['content'] = $request->params['content'];
        }
        //项
        if(array_key_exists('kuanid', $request->params)){
            $requestUrl = '/api/contract/hetong/update/xiang';
            $data['content'] = $request->params['content'];
        }
        $response = $client->request('POST', $requestUrl, [
            'json' => $data
        ]);
        echo $response->getBody();
    }
    //合同确认
    public function confirm(){
        $id = Input::get('id');
        $client = new Client ([
            'base_uri' => $this->base_url,
            'timeout'  => 2.0,
        ]);
        $response = $client->request('GET', '/api/contract/sf/'.$id.'/confirm');
        echo $response->getBody();
    }
    /*
     * /api/contract/sf/buchongXieyi/3
     * */
    public function getOptimize(){
        $id = Input::get('id');
        $client = new Client ([
            'base_uri' => $this->base_url,
            'timeout'  => 2.0,
        ]);
        $response = $client->request('GET', '/api/contract/sf/buchongXieyi/'.$id);
        echo $response->getBody();
    }

}

<template>
    <div>
        <el-form :label-position="labelPosition" ref="ownerForm" :rules="editOwnerRules" label-width="100px" :model="owner">
        <el-col :span="24">
            <el-form-item label="承租人">
                <el-radio-group v-model="owner.chengzufang">
                    <el-radio label="华塑商贸"></el-radio>
                    <el-radio label="幼狮科技"></el-radio>
                    <el-radio label="航远房地产"></el-radio>
                    <el-radio label="航远投资管理"></el-radio>
                    <el-radio label="彭昆"></el-radio>
                    <el-radio label="彭亮"></el-radio>
                </el-radio-group>

            </el-form-item>
            <el-row>
                <el-col  :span="8">
                    <el-form-item label="居间方">
                        <el-select
                                v-model="owner.jujianfangid"
                                filterable
                                remote
                                @change="changeOnSelect1"
                                placeholder="渠道公司名称"
                                :remote-method="remoteMethod1"
                                :loading="bkNameloading">
                            <el-option
                                    v-for="item in owner.options1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col  :span="8">
                    <el-form-item label="渠道人员">
                    <el-select
                            v-model="owner.qudaorenid"
                            filterable
                            remote
                            @change="changeOnSelect2"
                            placeholder="渠道人员"
                            :remote-method="remoteMethod2"
                            :loading="bkryNameloading">
                        <el-option
                                v-for="item in owner.options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="收款人" prop="shoukuanren" required>
                        <el-input v-model="owner.shoukuanren"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="开户行" prop="kaihuhang" required>
                        <el-input v-model="owner.kaihuhang"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="账号" prop="zhanghao" required>
                        <el-input v-model="owner.zhanghao"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="业主类型" prop="yezhuleixing" required>
                <el-radio-group v-model="owner.yezhuleixing" @change="yezhuleixingChange">
                    <el-radio :label="1">个人</el-radio>
                    <el-radio :label="2">公司</el-radio>
                </el-radio-group>
            </el-form-item>

            <div v-if="owner.yezhuleixing==1">
                <div v-for="(item, index) in owner.chanquanrenList"
                     :key="index"
                >
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="产权人" :prop="'chanquanrenList.' + index + '.name'"
                                      :rules="[
                                      { required: true, message: '不能为空' }
                                        ]"
                                      required>
                            <el-input v-model="owner.chanquanrenList[index].name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="身份证号">
                            <el-input v-model="owner.chanquanrenList[index].zhengjian"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="联系方式">
                            <el-input v-model="owner.chanquanrenList[index].tel"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="性别">
                            <el-radio-group v-model="owner.chanquanrenList[index].sex">
                                <el-radio :label="1">男</el-radio>
                                <el-radio :label="2">女</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">
                        <el-button v-if="index>0" v-show="editVisible" style="margin-left:6px;" @click.prevent="removeRentItem(item)">删除</el-button>
                        <el-button v-if="index==0" v-show="editVisible"  @click="addRentItem" style="margin-left:-30px">新增产权人</el-button>
                    </el-col>
                </el-row>
                </div>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="代理人" >
                            <el-input v-model="owner.dailirenName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="身份证号" >
                            <el-input v-model="owner.dailirenId"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="联系方式" >
                            <el-input v-model="owner.dailirenTel"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="性别">
                            <el-radio-group v-model="owner.dailirenSex">
                                <el-radio :label="1">男</el-radio>
                                <el-radio :label="2">女</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>
            <div v-if="owner.yezhuleixing==2">
                <div v-for="(item, index) in owner.chanquanrenList"
                     :key="index"
                >
                    <el-row>
                     <el-col :span="18">
                    <el-form-item label="公司名称" :prop="'chanquanrenList.' + index + '.name'" :rules="[
                         { required: true, message: '不能为空' }
                    ]">
                        <el-input v-model="owner.chanquanrenList[index].name"></el-input>
                    </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="法人" >
                                <el-input v-model="owner.chanquanrenList[index].faren"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="身份证号" >
                                <el-input v-model="owner.chanquanrenList[index].zhengjian"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="联系方式" >
                                <el-input v-model="owner.chanquanrenList[index].tel"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="性别">
                                <el-radio-group v-model="owner.chanquanrenList[index].sex">
                                    <el-radio :label="1">男</el-radio>
                                    <el-radio :label="2">女</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <el-row>
                        <el-col :span="8">
                            <el-form-item label="签约人" >
                                <el-input v-model="owner.qianyuerenName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="身份证号" >
                                <el-input v-model="owner.qianyuerenId"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="联系方式" >
                                <el-input v-model="owner.qianyuerenTel"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="性别">
                                <el-radio-group v-model="owner.qianyuerenSex">
                                    <el-radio :label="1">男</el-radio>
                                    <el-radio :label="2">女</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
            </div>


        </el-col>
    </el-form>
    </div>
</template>
<script>
    import {
        getbkNameList,
        getBrokerCompanyUserListPage,
    } from '../../api/api';;
    export default{
        data(){
            return {
                labelPosition:'right',
                bkNameloading:false,
                bkryNameloading:false,
                estate: [],//服务器搜索的渠道公司数据放入这个数组中
                editVisible:true,
                editOwnerRules :{
                    shoukuanren: [
                        { required: true, message: '不能为空' }
                    ],
                    kaihuhang: [
                        { required: true, message: '不能为空' }
                    ],
                    zhanghao: [
                        { required: true, message: '不能为空' }
                    ],
                },
            }
        },
        props:['owner'],
        methods: {
            yezhuleixingChange(){
                //只要业主类型发生改变，那么我就将变量初始化
                if(this.$route.path=='/purchaseContract/add'){
                    this.owner.chanquanrenList = [{
                        name:'',
                        faren:'',
                        zhengjian:'',
                        tel:'',
                        sex:1,
                        hetongid:null,
                    },]
                }
            },
            valid(){
                this.$refs.ownerForm.validate((valid) => {
                    this.owner.flag = valid;
                });
            },
            changeOnSelect1(){
                var arr = this.owner.options1;
                for (let i=0;i<arr.length;i++ ){
                    if(arr[i].value==this.owner.jujianfangid){
                        this.owner.jujianfang = arr[i].label;
                        this.owner.qudaoren=null;
                        this.owner.qudaorenid=null;
                    }
                }

            },
            changeOnSelect2(){
                var arr = this.owner.options2;
                for (let i=0;i<arr.length;i++ ){
                    console.log(this.owner.qudaorenid)
                    if(arr[i].value==this.owner.qudaorenid){
                        this.owner.qudaoren = arr[i].label;
                    }
                }
            },
            //获取渠道公司名称
            remoteMethod1(query) {
                let para = {
                    name: query
                };
                this.bkNameloading = true;
                getbkNameList(para).then((res) => {
                    let arr = [];
                    arr[0] = '';
                    for ( var i in res.data.data ){
                        arr[i]=res.data.data[i]
                    }
                    this.estate = arr;
                    this.bkNameloading = false;
                    this.list = this.estate.map((item,index) => {
                        return { value: item.tQdCompayId, label: item.compayname };
                    });
                    if (query !== '') {
                        this.bkNameloading = true;
                        setTimeout(() => {
                            this.bkNameloading = false;
                            this.owner.options1 = this.list;
                        }, 200);
                    } else {
                        this.owner.options1 = [];
                    }
                });

            },
            //获取渠道人员
            remoteMethod2(query) {
                let para = {
                    username: query,
                    id:this.owner.jujianfangid!=null?this.owner.jujianfangid:'',
                };
                this.bkryNameloading = true;
                getBrokerCompanyUserListPage(para).then((res) => {
                    let arr = [];
                    arr[0] = '';
                    for ( var i in res.data.data ){
                        arr[i]=res.data.data[i]
                    }
                    this.estate = arr;
                    this.bkryNameloading = false;
                    this.list = this.estate.map((item,index) => {
                        return { value: item.tQdPersonId, label: item.qdPername };
                    });
                    if (query !== '') {
                        this.bkryNameloading = true;
                        setTimeout(() => {
                            this.bkryNameloading = false;
                            this.owner.options2 = this.list;
                        }, 200);
                    } else {
                        this.owner.options2 = [];
                    }
                });

            },
            //新增产权人
            addRentItem() {
                this.owner.chanquanrenList.push({
                    name:'',
                    faren:'',
                    zhengjian:'',
                    tel:'',
                    sex:1,
                    hetongid:null,
                });
            },
            //移除产权人
            removeRentItem(item) {
                var index = this.owner.chanquanrenList.indexOf(item)
                if (index !== -1) {
                    this.owner.chanquanrenList.splice(index, 1)
                }
            }
        },
        mounted(){
            //审核页面input禁用
            if(this.$route.path=='/purchaseContract/review'){
                this.editVisible   =false;
            }
            if(this.$route.path=='/purchaseContract/view'){
                this.editVisible   =false;
            }

        }
    }
</script>

<template>

    <el-row class="container">
            <el-tabs v-model="editableTabsValue2" type="card" :editable="flag" addable @edit="addTab" @tab-remove="removeTab">
                <el-tab-pane
                        v-for="(item, index) in editableTabs2"
                        :key="item.name"
                        :label="item.title"
                        :name="item.name"
                >
                    <el-form label-Weizhi="right" ref="propertyForm" :rules="editPropertyRules" label-width="100px" :model="property.xsOffice[index]">
                        <el-col :span="24">
                            <el-row>
                                <el-col :span="5">
                                    <el-form-item label="楼盘" required prop="loupanName">
                                        <el-select
                                                v-model="property.xsOffice[index].loupanName"
                                                filterable
                                                default-first-option
                                                remote
                                                @change="change1"
                                                placeholder="楼盘"
                                                :remote-method="remoteMethod1"
                                                :loading="loupanloading">
                                            <el-option
                                                    v-for="item in options1"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.label">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="5">
                                    <el-form-item label="楼栋" required prop="loudongName" >
                                        <el-select
                                                v-model="property.xsOffice[index].loudongName"
                                                filterable
                                                default-first-option
                                                remote
                                                @change="change2"
                                                placeholder="楼栋"
                                                :remote-method="remoteMethod2"
                                                :loading="loupanloading">
                                            <el-option
                                                    v-for="item in options2"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.label">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="5">
                                    <el-form-item label="房间号" required prop="fanghao">
                                        <el-select
                                                v-model="property.xsOffice[index].fanghao"
                                                filterable
                                                default-first-option
                                                remote
                                                @change="change3"
                                                placeholder="主房间号"
                                                :remote-method="remoteMethod3"
                                                :loading="fanghaoloading">
                                            <el-option
                                                    v-for="item in options3"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.label">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="5">
                                    <el-form-item prop="subleaseno">
                                        <el-input placeholder="子房间号" v-model="property.xsOffice[index].subleaseno"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item required label="区域" prop="quyu">
                                        <el-input v-model="property.xsOffice[index].quyu"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="16">
                                    <el-form-item label="位置" required prop="weizhi" :span="10">
                                        <el-input v-model="property.xsOffice[index].weizhi"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-form-item label="产权证编号" required prop="chanquanzhenghao">
                                <el-input v-model="property.xsOffice[index].chanquanzhenghao"></el-input>
                            </el-form-item>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="建筑面积" required prop="jianzhumianji" >
                                        <el-input v-model.number="property.xsOffice[index].jianzhumianji"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="承租面积" required prop="qianyuemianji">
                                        <el-input v-model.number="property.xsOffice[index].qianyuemianji" @blur="shangyue(scope.$index, scope.row)"></el-input>
                                    </el-form-item>
                                    <span style="border:0px solid red;font-size:12px;position:relative;left:180px;top:-23px;color:#ff4949;">剩余承租面积&nbsp;&nbsp; <i v-text="syczmj"></i> &nbsp;㎡</span>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item required label="房屋类型" prop="leixing">
                                        <el-select v-model="property.xsOffice[index].leixing" clearable placeholder="请选择">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <!--<el-form-item label="房屋类型" required prop="leixing">
                                        <el-select v-model="property.xsOffice[index].leixing" clearable placeholder="请选择">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>-->
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
    </el-row>
</template>
<script>
    import {getLoupanList,getLoudongList,getSaleFanghaoList,getSaleFanghaoChengzu} from '../../api/api';
    export default {
        components:{

        },
        props:['property'],
        data() {
            return {
                syczmj:0,
                purchaseContract:{
                    type:0,
                },
                flag:false,
                editVisible:true,
                //楼盘数据
                options1:[],
                list1: [],
                loupanloading: false,
                estate: [],//服务器搜索的楼盘数据放入这个数组中
                // 楼栋数据
                options2:[],
                list2: [],
                loudongloading: false,
                building: [],//服务器搜索的楼盘数据放入这个数组中
                // 房间数据
                options3:[],
                list3: [],
                fanghaoloading: false,
                house: [],//服务器搜索的楼盘数据放入这个数组中
                houseData:[],
                //房间类型
                options: [
                     {
                        value: 1,
                        label: '公寓'
                    }, {
                        value: 2,
                        label: '写字楼'
                    }, {
                        value: 3,
                        label: '商铺'
                    }, {
                        value: 4,
                        label: '住宅'
                    }
                    ],
                //房源数据初始化

                editableTabsValue2: '1',
                editableTabs2: [{
                    title: '房间1',
                    name: '1',
                    content: 'Tab 1 content'
                }],
                tabIndex: 1,
                editPropertyRules: {
                    loupanName: [
                        { required: true, message: '不能为空'}
                    ],
                    loudongName:[
                        { required: true, message:'不能为空'}
                    ],
                    fanghao:[
                        { required: true, message:'不能为空'}
                    ],
                    /*quyu:[
                        { required: true, message:'不能为空'}
                    ],*/
                    weizhi:[
                        { required: true, message:'不能为空'}
                    ],
                    chanquanzhenghao:[
                        { required: true, message:'不能为空'}
                    ],
                    jianzhumianji:[
                        { required: true, message: '不能为空'},
                        { type: 'number', message: '必须为数字'},
                    ],
                    leixing:[
                        { required: true, message:'不能为空'}
                    ],
                    qianyuemianji:[
                        { required: true, message:'不能为空'},
                        { type: 'number', message: '必须为数字'},
                    ]
                },
            }
        },
        methods: {
            valid(){
                var flag  = true;
                var flag1 = true;
                var property =  this.$refs.propertyForm;

                for (let i=0;i<property.length;i++){
                    property[i].validate((valid) => {
                        flag = valid;
                        if(flag==false){
                            flag1 = false;
                        }
                        this.property.flag = flag1;
                    })
                }
            },
            shangyue(index,row){
                let para = {
                    fanghao:row.fanghao,
                    qianyuemianji:row.qianyuemianji,
                }
                getSaleFanghaoChengzu(para).then((res) => {
                    this.houseData = res.data;
                    let arr = [];
                    arr[0] = '';
                    for ( var i in res.data ){
                        arr[res.data[i].id]=res.data[i].fybh;
                    }
                    this.house = arr;
                    this.fanghaoloading = false;
                    this.list3 = this.house.map((item,index) => {
                        return { value: index, label: item };
                    });
                    if (query !== '') {
                        this.fanghaoloading = true;
                        setTimeout(() => {
                            this.fanghaoloading = false;
                            this.options3 = this.list3.filter(item => {
                                return item.label.toLowerCase()
                                        .indexOf(query.toLowerCase()) > -1;
                            });
                        }, 200);
                    } else {
                        this.options3 = [];
                    }
                });








            },
            //获取楼盘
            remoteMethod1(query) {
                let para = {
                    str: query
                };
                this.loupanloading = true;
                getLoupanList(para).then((res) => {
                    let arr = [];
                    arr[0] = '';
                    for ( var i in res.data ){
                        arr[i]=res.data [i];
                    }
                    this.estate = arr;
                    this.loupanloading = false;
                    this.list = this.estate.map((item,index) => {
                        return { value: index, label: item };
                    });
                    if (query !== '') {
                        this.loupanloading = true;
                        setTimeout(() => {
                            this.loupanloading = false;
                            this.options1 = this.list.filter(item => {
                                return item.label.toLowerCase()
                                        .indexOf(query.toLowerCase()) > -1;
                            });
                        }, 200);
                    } else {
                        this.options1 = [];
                    }
                });

            },
            //获取楼栋
            remoteMethod2(query) {
                let para = {
                    loupanOmcId:this.property.xsOffice[this.tabIndex-1].loupanOmcId,
                };
                this.loupanloading = true;
                getLoudongList(para).then((res) => {
                    let arr = [];
                    arr[0] = '';
                    for ( var i in res.data ){
                        arr[i]=res.data [i];
                    }
                    this.building = arr;
                    this.loupanloading = false;
                    this.list2 = this.building.map((item,index) => {
                        return { value: index, label: item };
                    });
                    if (query !== '') {
                        this.loupanloading = true;
                        setTimeout(() => {
                            this.loupanloading = false;
                            this.options2 = this.list2.filter(item => {
                                return item.label.toLowerCase()
                                        .indexOf(query.toLowerCase()) > -1;
                            });
                        }, 200);
                    } else {
                        this.options2 = [];
                    }
                });

            },
            //获取房号
            remoteMethod3(query) {
                let para = {
                    lpid: this.property.xsOffice[this.tabIndex-1].loupanOmcId,
                    zdid: this.property.xsOffice[this.tabIndex-1].loudongOmcId,
                };
                this.fanghaoloading = true;
                //console.log(this.property.xsOffice[this.tabIndex-1].loupanOmcId);
                //console.log(this.property.xsOffice[this.tabIndex-1].loudongOmcId);
                //console.log(para);
                getSaleFanghaoList(para).then((res) => {
                    this.houseData = res.data;
                    console.log(22222);
                    console.log(para);
                    console.log(res.data);
                    let arr = [];
                    arr[0] = '';
                    for ( var i in res.data ){
                        arr[res.data[i].id]=res.data[i].fybh;
                    }
                    this.house = arr;
                    this.fanghaoloading = false;
                    this.list3 = this.house.map((item,index) => {
                        return { value: index, label: item };
                    });
                    if (query !== '') {
                        this.fanghaoloading = true;
                        setTimeout(() => {
                            this.fanghaoloading = false;
                            this.options3 = this.list3.filter(item => {
                                return item.label.toLowerCase()
                                        .indexOf(query.toLowerCase()) > -1;
                            });
                        }, 200);
                    } else {
                        this.options3 = [];
                    }
                });

            },
            //得到房间号以后，提取OMC的对应信息
            change1(){
                //楼盘
                for (var x in this.options1){
                    if(this.options1[x].label==this.property.xsOffice[this.tabIndex-1].loupanName){
                        this.property.xsOffice[this.tabIndex-1].loupanOmcId=this.options1[x].value;
                        this.property.xsOffice[this.tabIndex-1].loudongName=null;//清除楼栋和房号的缓存
                        this.property.xsOffice[this.tabIndex-1].loudongOmcId=null;//清除楼栋和房号的缓存
                        this.property.xsOffice[this.tabIndex-1].fanghao=null;//清除楼栋和房号的缓存
                        this.property.xsOffice[this.tabIndex-1].omcId=null;//清除楼栋和房号的缓存
                        //alert(222);
                    }
                }
            },
            change2(){
                //alert(222);
                //楼栋
                for (var x in this.options2){
                    if(this.options2[x].label==this.property.xsOffice[this.tabIndex-1].loudongName){
                        this.property.xsOffice[this.tabIndex-1].loudongOmcId=this.options2[x].value;

                    }
                }
            },
            change3(){
                //alert(111);
                //房号
                for (var x in this.options3){
                    if(this.options3[x].label==this.property.xsOffice[this.tabIndex-1].fanghao){
                        this.property.xsOffice[this.tabIndex-1].omcId=this.options3[x].value;
                    }
                }
                for (var x in this.houseData){
                    if(this.houseData[x].id==this.property.xsOffice[this.tabIndex-1].omcId){
                        this.property.xsOffice[this.tabIndex-1].Jianzhumianji=this.houseData[x].fjmj;
                        this.property.xsOffice[this.tabIndex-1].Qianyuemianji=this.houseData[x].fjmj;
                    }
                }
                //console.log(this.property.xsOffice)
                this.$emit('getshoufanghetong')

            },
            addTab(targetName,action) {
                if(action === "add"){
                let newTabName = ++this.tabIndex + '';
                this.editableTabs2.push({
                    title: '房间'+this.tabIndex,//房间号加上次数（一直会加1，以此类推）
                    name: newTabName,
                    content: 'New Tab content'
                });
                this.property.xsOffice.push({
                    omcId:null,
                    loupanOmcId:null,
                    loudongOmcId:null,
                    loupanName:'',
                    loudongName: '',
                    fanghao: '',
                    weizhi: '',
                    chanquanzhenghao: '',
                    jianzhumianji: '',
                    qianyuemianji: '',
                    leixing: 0,
                    //quyu:'',
                    isdiya:0,
                    diyaren:'',
                });
                this.editableTabsValue2 = newTabName;
                if(this.editableTabs2.length > 1){
                    this.flag = true;
                }
                }
            },
            removeTab(targetName) {
                this.property.xsOffice.pop();//删除
                let tabs = this.editableTabs2;
                /*
                let activeName = this.editableTabsValue2;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }
                */
                tabs = tabs.filter(tab => tab.name !== targetName);
                this.editableTabs2 = tabs.map((tab, idx)=>{
                    tab.name = (idx + 1) + ''; 
                    tab.title = '房间'+ (idx + 1);
                    return tab;
                });
                --this.tabIndex;
                if(parseInt(this.editableTabsValue2) > this.tabIndex - 1){
                    this.editableTabsValue2 = this.editableTabs2[this.tabIndex-1].name;
                }

                if(this.editableTabs2.length < 2){
                    this.flag = false;
                }
            }
        },
        mounted() {
            //审核页面input禁用
            if(this.$route.path=='/saleContract/review'){
                this.editVisible   =false;
            }
            if(this.$route.path=='/saleContract/see'){
                this.editVisible   =false;
            }
        }

    }
</script>

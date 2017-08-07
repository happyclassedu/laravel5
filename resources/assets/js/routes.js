/**
 * Created by liyuequn on 2017/5/15.
 */

import navigation from "./components/Navigation.vue";
import Login from "./components/Login.vue";
import NotFound from "./components/404.vue";

import User from "./components/rbac/User.vue";
import Permission from "./components/rbac/Permission.vue";
import Role from "./components/rbac/Role.vue";
//收房合同
import PurchaseContractIndex from "./components/purchaseContract/Index.vue";
import PurchaseContractAdd from "./components/purchaseContract/Add.vue";
import PurchaseContractUpload from "./components/purchaseContract/Upload.vue";
import PurchaseContractOptimize from "./components/purchaseContract/Optimize.vue";
import PurchaseContractCheckOptimize from "./components/purchaseContract/Optimize.vue";
import PurchaseContractDump20170719 from "./components/purchaseContract/Dump20170719.vue";//版本1


//出房合同
import SaleContractIndex from "./components/saleContract/Index.vue";
import SaleContractAdd from "./components/saleContract/Add.vue";
import SaleContractUpload from "./components/saleContract/Upload.vue";
import SaleContractJieyue from "./components/saleContract/Jieyue.vue";
import SaleContractCheckJieyue from "./components/saleContract/Jieyue.vue";
import SaleContractDump20170719 from "./components/saleContract/Dump20170719.vue";
//装饰合同
import DecorationList from "./components/decoration/List.vue";
//合同版本
import ContractVersionList from "./components/contractVersion/index.vue";



//渠道公司
import BrokerCompany from "./components/brokerCompany/Index.vue";
import BrokerCompanyUser from "./components/brokerCompany/UserList.vue";
import BrokerCompanyAdd from "./components/brokerCompany/Add.vue";
import BrokerCompanyUserAdd from "./components/brokerCompany/AddUser.vue";
import BrokerCompanyHistory from "./components/brokerCompany/HistoryList.vue";
import BrokerCompanyUserHistory from "./components/brokerCompany/UserHistoryList.vue";
import BrokerUser from "./components/brokerCompany/BrokerUserList.vue";
import BrokerUserAdd from "./components/brokerCompany/AddBrokerUser.vue";
import BrokerUserHistory from "./components/brokerCompany/BrokerUserHistoryList.vue";
//佣金管理
import ChuFangCommission from "./components/Commission/Index.vue";
import ShouFangCommission from "./components/Commission/ShouFangList.vue";
import selectCommissionPayType from "./components/Commission/contractPayType.vue";
//应收
import AccountsReceivable from "./components/Commission/accountsReceivableList.vue";
import ReceivableRecord from "./components/Commission/receivableRecordList.vue";
import Receivable from "./components/Commission/receivableList.vue";
import FinanceReceivable from "./components/report/financeReceivableList.vue";
//应付
import PaymentRecord from "./components/report/paymentRecordList.vue";
import PayableRecord from "./components/report/payableRecordList.vue";
import Payable from "./components/report/payableList.vue";
import FinancePayable from "./components/report/financePayableList.vue";



//消息管理
import MessageList from "./components/message/Index.vue";

function fun(funKey) {
    let res = JSON.parse(sessionStorage.getItem('permission'));
    if(res!=null){
        var i = res.length;
        while (i--) {
            if (res[i] === funKey) {
                return true;
            }
        }
    }

}

var fk_permission ,fk_permission_user ,fk_permission_role ,fk_permission_per ,fk_contract ,fk_contract_purchase ,fk_brokerCompany ,fk_brokerCompanyList
,fk_brokerCompanyUserList ;
fun('permission')==true? fk_permission = false:fk_permission = true;
fun('permission')==true? fk_permission_user = false:fk_permission_user = true;
fun('permission')==true? fk_permission_role = false:fk_permission_role = true;
fun('permission')==true? fk_permission_per = false:fk_permission_per = true;
fun('contract')==true? fk_contract = false:fk_contract = true;
fun('purchaseContract')==true? fk_contract_purchase = false:fk_contract_purchase = true;
fun('brokerCompany')==true? fk_brokerCompany = false:fk_brokerCompany = true;
fun('brokerCompanyList')==true? fk_brokerCompanyList = false:fk_brokerCompanyList = true;
fun('brokerCompanyUserList')==true? fk_brokerCompanyUserList = false:fk_brokerCompanyUserList = true;

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: navigation,
        name: '权限管理',
        iconCls: 'el-icon-message',//图标样式class
        hidden:fk_permission,
        children: [
            { path: '/user', component: User, name: '用户' ,hidden:fk_permission_user},
            { path: '/role', component: Role, name: '角色' ,hidden:fk_permission_role},
            { path: '/fun', component: Permission, name: '权限',hidden:fk_permission_per },
        ]

    },
    {
        path: '/',
        component: navigation,
        name: '合同管理',
        iconCls: 'el-icon-document',//图标样式class
        hidden:fk_contract,
        children: [

            { path:'/purchaseContract', component: PurchaseContractIndex, name: '收房合同',hidden:fk_contract_purchase},
            { path:'/purchaseContract/add',component:PurchaseContractAdd,name:'收房录入',hidden:true},
            { path:'/purchaseContract/edit',component:PurchaseContractAdd,name:'收房编辑',hidden:true},
            { path:'/purchaseContract/review',component:PurchaseContractAdd,name:'收房审核',hidden:true},
            { path:'/purchaseContract/view',component:PurchaseContractAdd,name:'收房查看',hidden:true},
            { path:'/purchaseContract/optimize',component:PurchaseContractOptimize,name:'收房优化',hidden:true},
            { path:'/purchaseContract/checkOptimize',component:PurchaseContractCheckOptimize,name:'收房协议查看',hidden:true},
            { path:'/purchaseContract/upload',component:PurchaseContractUpload,name:'上传扫描件',hidden:true},



            { path:'/saleContact', component: SaleContractIndex, name: '出房合同'},
            { path:'/saleContract/add',component:SaleContractAdd,name:'出房录入',hidden:true},
            { path:'/saleContract/see',component:SaleContractAdd,name:'出房查看',hidden:true},
            { path:'/saleContract/edit',component:SaleContractAdd,name:'出房编辑',hidden:true},
            { path:'/saleContract/review',component:SaleContractAdd,name:'出房审核',hidden:true},
            { path:'/saleContract/jieyue',component:SaleContractJieyue,name:'解约协议',hidden:true},
            { path:'/saleContract/checkJieyue',component:SaleContractCheckJieyue,name:'出房协议查看',hidden:true},
            { path:'/saleContract/upload',component:SaleContractUpload,name:'上传扫描件',hidden:true},


            { path:'/decoration', component: DecorationList, name: '工程合同'},
            { path:'/contractVersion', component: ContractVersionList, name: '合同版本管理'},

        ]
    },
    {
        path: '/',
        component: navigation,
        name: '渠道管理',
        iconCls: 'el-icon-document',//图标样式class
        hidden:fk_brokerCompany,
        children: [
            { path:'/brokerCompany', component: BrokerCompany, name: '渠道公司管理',hidden:fk_brokerCompanyList},
            { path:'/brokerCompany/add',component:BrokerCompanyAdd,name:'渠道公司录入',hidden:true},
            { path:'/brokerCompany/edit',component:BrokerCompanyAdd,name:'渠道公司编辑',hidden:true},
            { path:'/brokerCompany/view',component:BrokerCompanyAdd,name:'渠道公司查看',hidden:true},
            { path:'/brokerCompanyUserList',component:BrokerCompanyUser,name:'渠道公司人员管理',hidden:fk_brokerCompanyUserList},
            { path:'/brokerCompanyUserList/add',component:BrokerCompanyUserAdd,name:'渠道公司人员录入',hidden:true},
            { path:'/brokerCompanyUserList/edit',component:BrokerCompanyUserAdd,name:'渠道公司人员编辑',hidden:true},
            { path:'/brokerCompanyUserList/view',component:BrokerCompanyUserAdd,name:'渠道公司人员查看',hidden:true},
            { path:'/brokerCompanyHistory',component:BrokerCompanyHistory,name:'渠道公司跟进记录',hidden:true},
            { path:'/brokerCompanyUserHistory',component:BrokerCompanyUserHistory,name:'渠道公司人员跟进记录',hidden:true},
            { path:'/brokerUser',component:BrokerUser,name:'自由经纪人管理',hidden:false},
            { path:'/brokerUser/add',component:BrokerUserAdd,name:'自由经纪人录入',hidden:true},
            { path:'/brokerUser/edit',component:BrokerUserAdd,name:'自由经纪人编辑',hidden:true},
            { path:'/brokerUser/view',component:BrokerUserAdd,name:'自由经纪人查看',hidden:true},
            { path:'/brokerUserHistory',component:BrokerUserHistory,name:'自由经纪人跟进记录',hidden:true},
        ]
    },
    {

        path: '/',
        component: navigation,
        name: '佣金管理',
        iconCls: 'el-icon-document',//图标样式class
        hidden:false,
        children: [
            { path:'/shouFangCommission', component: ShouFangCommission, name: '收房佣金管理',hidden:false},
            { path:'/chuFangCommission',component:ChuFangCommission,name:'出房佣金管理',hidden:false},
            { path:'/contractPayType',component:selectCommissionPayType,name:'佣金支付方式',hidden:true},
        ]
    },
    {
        //版本1
        path:'/purchaseContract/dump20170719',
        component: PurchaseContractDump20170719,
        name: '收房合同打印',
        hidden: true
    },
    {
        path: '/',
        component: navigation,
        name: '应收应付',
        iconCls: 'el-icon-document',//图标样式class
        hidden:false,
        children: [
            { path:'/receivable',component:Receivable,name:'结算应收',hidden:false},
            { path:'/accountsReceivable',component:AccountsReceivable,name:'应收款记录',hidden:true},
            { path:'/receivableRecord',component:ReceivableRecord,name:'已收款记录',hidden:true},
            { path:'/payable',component:Payable,name:'结算应付',hidden:false},
            { path:'/payableRecord',component:PayableRecord,name:'应付款记录',hidden:true},
            { path:'/paymentRecord',component:PaymentRecord,name:'已付款记录',hidden:true},
            { path:'/financePayable',component:FinancePayable,name:'财务应付',hidden:false},
            { path:'/financeReceivable',component:FinanceReceivable,name:'财务应收',hidden:false},
        ]

    },
    {
        //版本1
        path:'/saleContract/dump20170719',
        component: SaleContractDump20170719,
        name: '出方合同打印',
        hidden: true
     },
     {
         path: '/',
         component: navigation,
         name: '任务管理',
         iconCls: 'el-icon-message',//图标样式class
         hidden:false,
         children: [
             {path:'/message', component: MessageList, name: '我的待办事项', hidden: false},
         ]

     },



]

export default routes;
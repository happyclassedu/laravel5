<template>
    <div class="whole">
        <h2 class="tc">北京市房屋租赁合同</h2>
        <span class="tc f22">幼狮空间成交版</span>
        <p>出租方（甲方）：<input type="text" style="width: 450px" disabled value='北京幼狮科技有限公司'/></p>
        <p>承租方（乙方）：<input type="text" style="width: 450px" disabled value=""/></p>
        <p>居间方（丙方）：<input type="text" style="width: 450px" disabled v-model="renter.jujianfang"/></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;依据《中华人民共和国合同法》及有关法律、法规的规定，甲、乙、丙三方在平等、自愿的基础上，就乙方承租甲方房屋，丙方提供居间服务等事宜，经各方友好协商一致，签订本合同以资信守。</b></p>
        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一条  房屋基本情况</b></p>
        <span
                v-for="(item,index) in property.xsOffice"
                :key="index"
        >
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）房屋坐落于北京市<input type="text" v-model="item.quyu" style="width:100px;">区（县）<input type="text" v-model="item.weizhi" style="width:300px;">，承租区域建筑面积<input type="text"  style="width:120px;" v-model="item.jianzhumianji">平方米（最终以房屋所有权证标注的建筑面积为准），实际承租面积<input type="text"  style="width:120px;" v-model="item.qianyuemianji">平方米，产权证编号： <input type="text" style="width:520px;" v-model="item.chanquanzhenghao" value="">  。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）甲方保证出租的房屋权属证明真实有效，房屋设施符合出租条件。</p>
        <p><b>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二条  房屋租赁情况
        </b></p>
        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;租赁用途：
            <input type="text" style="width: 70px;" value="办公">，房屋性质
            <input type="text" style="width: 70px;" v-if="item.leixing == 1" value="公寓">
            <input type="text" style="width: 70px;" v-if="item.leixing == 2" value="写字楼">
            <input type="text" style="width: 70px;" v-if="item.leixing == 3" value="商铺">
            <input type="text" style="width: 70px;" v-if="item.leixing == 4" value="住宅">
            ，根据房产性质及政府相关规定可以进行工商注册的房屋，甲方向乙方提供业主身份证及房屋所有权证复印件，乙方自行到相关部门办理工商注册事宜，并由乙方自行承担注册不成功之风险。
        </p>
        </span>
        <p><b>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第三条  租赁期限及免租期
        </b></p>

        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）甲方承诺在租赁合同期限内给予乙方<input type="text" v-model="da" style="width:70px;">天的免租期。
        </p>
        <p>
            <span v-for="(item,index) in addDate.mianzuqiList">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自<u>&nbsp;&nbsp;{{year(item.startdate)}}&nbsp;&nbsp;</u>年
            <u>&nbsp;&nbsp;{{month(item.startdate)}}&nbsp;&nbsp;</u>月
            <u>&nbsp;&nbsp;{{day(item.startdate)}}&nbsp;&nbsp;</u>日至
            <u>&nbsp;&nbsp;{{year(item.startdate)}}&nbsp;&nbsp;</u>年
            <u>&nbsp;&nbsp;{{month(item.startdate)}}&nbsp;&nbsp;</u>月
            <u>&nbsp;&nbsp;{{day(item.startdate)}}&nbsp;&nbsp;</u>日止。免租期内乙方不支付租金，以便于乙方进行装饰装修及办理入住手续等事宜。免租期内物业管理费、供暖费由 □甲方 □乙方 承担。
            </span>
        </p>
        </span>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）本合同房屋租赁期限为<input type="text" v-model="nian" style="width:25px;">年<input type="text" v-model="yue" style="width:25px;">月<input type="text" v-model="ri" style="width:25px;">日。
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自<u>&nbsp;&nbsp;{{year(addDate.startdate)}}&nbsp;&nbsp;</u>年
        <u>&nbsp;&nbsp;{{month(addDate.startdate)}}&nbsp;&nbsp;</u>月
        <u>&nbsp;&nbsp;{{day(addDate.startdate)}}&nbsp;&nbsp;</u>日至
        <u>&nbsp;&nbsp;{{year(addDate.enddate)}}&nbsp;&nbsp;</u>年
        <u>&nbsp;&nbsp;{{month(addDate.enddate)}}&nbsp;&nbsp;</u>月
        <u>&nbsp;&nbsp;{{day(addDate.enddate)}}&nbsp;&nbsp;</u>日止。
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）合同期满乙方仍使用该房屋，乙方应提前90天通知甲方，双方协商同意后另行签署新的租赁合同；若乙方未提前90日提出书面续租申请视为乙方放弃续租权，在此期间乙方应配合甲方带领未来租户看房。在同等市场条件下，乙方拥有优先承租权。</p>
        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第四条  租金和押金</b></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）乙方按照下列标准向甲方支付租金（以人民币进行结算）：<span v-for="(item,index) in addDate.zujinList"><u>&nbsp;&nbsp;{{year(item.startdate)}}&nbsp;&nbsp;</u>年
            <u>&nbsp;&nbsp;{{month(item.startdate)}}&nbsp;&nbsp;</u>月
            <u>&nbsp;&nbsp;{{day(item.startdate)}}&nbsp;&nbsp;</u>日至
            <u>&nbsp;&nbsp;{{year(item.enddate)}}&nbsp;&nbsp;</u>年
            <u>&nbsp;&nbsp;{{month(item.enddate)}}&nbsp;&nbsp;</u>月
            <u>&nbsp;&nbsp;{{day(item.enddate)}}&nbsp;&nbsp;</u>日，租金为￥<u>&nbsp;&nbsp;{{item.yuezujin}}&nbsp;&nbsp;</u>元/月（大写：<u>&nbsp;&nbsp;{{daxie(item.yuezujin)}}&nbsp;&nbsp;</u>/月）；
        </span>
        </p>
        <span v-for="(item,index) in addDate.fukuanFangshiList"
              :key="index"
        >
        <p>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）租金支付方式为：押<input type="text" style="width: 70px;" v-model="item.yajinyue">付<input type="text" style="width: 70px;" v-model="item.zujinyue">；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、房租押金：<input type="text" style="width: 100px;" v-model="addDate.yajin">元/月（大写：<u>&nbsp;&nbsp;{{daxie(addDate.yajin)}}&nbsp;&nbsp;</u>/月），支付时间为

            <u>&nbsp;&nbsp;{{year(addDate.yajinfukuanriqi)}}&nbsp;&nbsp;</u>年
            <u>&nbsp;&nbsp;{{month(addDate.yajinfukuanriqi)}}&nbsp;&nbsp;</u>月
            <u>&nbsp;&nbsp;{{day(addDate.yajinfukuanriqi)}}&nbsp;&nbsp;</u>日前。

        </p>
        </span>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、押金是乙方向甲方交付的合法履约的保证金，如乙方在租赁期限届满之前违反本合同约定，押金作为违约金不予退还。租赁期满，乙方结清应承担的费用，并将工商注册地迁离此房后3个工作日内由甲方退还乙方剩余押金。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、首期租金：￥<input type="text" style="width: 100px;" v-model="addDate.yingfuzongzujin">元（大写：<u>&nbsp;&nbsp;{{daxie(addDate.yingfuzongzujin)}}&nbsp;&nbsp;</u>），支付时间为

            <u>&nbsp;&nbsp;{{year(addDate.shouqifukuanri)}}&nbsp;&nbsp;</u>年
            <u>&nbsp;&nbsp;{{month(addDate.shouqifukuanri)}}&nbsp;&nbsp;</u>月
            <u>&nbsp;&nbsp;{{day(addDate.shouqifukuanri)}}&nbsp;&nbsp;</u>日前；租金每<input type="text" v-model="addDate.fukuanFangshiList[0].zujinyue" style="width:70px;">个月支付一次，于付款月起租日 30日前支付下一次租金，即第二期租金的支付时间为<u>&nbsp;&nbsp;{{year(addDate.erqifukuanri)}}&nbsp;&nbsp;</u>年
            <u>&nbsp;&nbsp;{{month(addDate.erqifukuanri)}}&nbsp;&nbsp;</u>月
            <u>&nbsp;&nbsp;{{day(addDate.erqifukuanri)}}&nbsp;&nbsp;</u>日前，第三期租金的支付时间为<u>&nbsp;&nbsp;{{year(addDate.sanqifukuanri)}}&nbsp;&nbsp;</u>年
            <u>&nbsp;&nbsp;{{month(addDate.sanqifukuanri)}}&nbsp;&nbsp;</u>月
            <u>&nbsp;&nbsp;{{day(addDate.sanqifukuanri)}}&nbsp;&nbsp;</u>日前，合同期每期租金以此类推。
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）租金的结算方式为：□ 以转账方式 ；□ 现金支付</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（甲方指定收款账户为：</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;户 &nbsp;&nbsp;名：<input type="text" style="width: 350px;" v-model="renter.shoukuanren"></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开户行：<input type="text" style="width: 350px;" v-model="renter.kaihuhang"></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账 &nbsp;&nbsp;号：<input type="text" style="width: 350px;" v-model="renter.zhanghao"></p>
        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第五条  相关费用的承担方式</b></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）甲方承担在承租期的物业管理费、供暖费。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）在承租期内，乙方自行承担在使用期间的相关费用（水费、电费、燃气费、宽带费、停车费等），乙方按物业管理机构提供的交费通知单交费。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）在承租期内，乙方自行报装电话、宽带，相关费用由乙方自行承担。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）此合同租金仅含物业费、供暖费，出租房屋所产生税费由乙方承担。甲方向乙方提供业主身份证明及房屋所有权证复印件，由乙方自行到税务部门开具租房增值税普通发票。</p>
        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第六条  甲方的权利义务</b></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）甲方应保证出租房屋的建筑结构和设备设施能达到使用要求，不得影响乙方正常使用。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）对于该房屋的主要结构、固定管道线路及固定设施（包括制热、制冷、排风、上下水等设施）发生自然损坏、故障或合理使用而导致的老化、耗损，乙方应及时通知甲方，由甲方对接本项目物业公司及时修复。</p>
        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第七条  乙方权利义务
        </b></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）承租期内，如乙方需要对承租房屋进行装修或改动前应获得甲方书面同意，且装修或改动应符合国家相关法律法规规定以及物业管理规定，但乙方不得拆除、破坏承租区域建筑的主体结构。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）由于乙方装修或使用原因，导致房间的主要结构、固定管道线路及设施发生损坏、故障乙方须及时修复或照价赔偿。</p>
        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第八条  合同解除</b></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）经甲乙双方协商一致，可以解除本合同。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）因不可抗力导致本合同无法继续履行的，本合同自行解除。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）甲方有下列情形之一的，乙方有权单方解除合同：</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、交付的房屋存在重大安全问题，导致乙方无法正常使用达15个工作日。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、房屋主体固定设施严重损坏，致使乙方无法正常使用房屋。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、甲方不具备出租此房权利。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、甲方提前终止合同。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）乙方有下列情形之一的，甲方有权单方解除合同并立即收回房屋：</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、不按照约定支付租金达3日。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、将房屋转租、分租、转借给第三方。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、从事违法活动或危害公共安全，妨碍他人正常工作生活。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、擅自拆除或破坏房屋建筑主体结构或因乙方装修造成房屋重大安全隐患。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、乙方提前终止合同。</p>
        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第九条  违约责任</b></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）甲方有第八条第（三）款约定的情形之一的，应按2个月租金为标准向乙方支付违约金，同时退还乙方已支付押金及未使用租期租金；乙方有第八条第（四）款约定的情形之一的，应按2个月租金为标准向甲方支付违约金。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）租赁期内，甲方收回房屋自用或乙方提前退租应提前3个月通知对方，如未提前通知对方，违约方应向守约方支付两个月房租作为未提前通知的租金补偿，同时乙方应配合甲方带领未来租户看房，本条款与违约责任条款第（一）款同时叠加适用。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）乙方在租赁房屋内的工商注册等营业证照，应在租赁期满或合同解除后10日内迁出，逾期未迁出的，乙方须按日向甲方支付租金直至乙方实际将营业证照迁出之日止，甲方退还乙方剩余押金。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）由乙方原因违约本合同提前终止（包含租期结束），乙方须在终止或解除日3日内腾空房屋并向甲方返还该房屋，如乙方未能在3日内自行腾出该房屋，甲方有权立即收回房屋及钥匙，有权采取换锁、停水停电、阻止人员在承租区域进出经营等自我救济行为，同时可将屋内乙方物品清出至室外，甲方不承担任何保管及赔偿责任，乙方同意自行承担由此产生的全部后果和责任。</p>
        <p><b>第十条  送达条款</b></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）甲乙双方一致同意，可通过在本合同中书写的手机号码以短信、微信方式进行相关通知的送达，在短信、微信发送成功后即视为完成送达。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）甲乙双方在本合同中书写的地址即为本合同下任何书面通知的有效送达地址，若因接收方拒收或地址错误等情况致使无法送达的，均以付邮日（以邮戳为准）后3日即视为通知方已依本合同给予书面通知。若任何一方联络地址变更的，应及时通知对方。</p>
        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第十一条  其他</b></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）本合同经甲乙双方签字或盖章后生效。本合同（及附件）一式叁份，甲、乙、丙方各持一份。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）本合同生效后，各方对合同内容的变更或补充应采取书面形式，作为本合同的附件。</p>
        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第十二条  补充条款</b></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以下条款内容与本合同其它各条款具备同等法律效力,若补充条款与本合同不一致或发生冲突时，应以补充条款为准。</p>
        <!--<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" style="width: 550px;"></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" style="width: 550px;"></p>-->




        <div v-if="historyBuchong">
            <h3>补充协议：</h3>
            <history-buchong></history-buchong>
        </div>
        <div v-if="listJieyue">
            <h3>解约协议：</h3>

            <list-jieyue></list-jieyue>
        </div>





        <!--<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出租人（甲方）：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;承租人（乙方）：</b></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系地址：<input type="text" style="width: 150px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系地址：<input type="text" style="width: 150px;"></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系方式：<input type="text" style="width: 150px;" value="400-078-8800">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系方式：<input type="text" style="width: 150px;"></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;委托代理人 ：<input type="text" style="width: 125px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;委托代理人 ：<input type="text" style="width: 125px;"></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" style="width: 50px;">年
            <input type="text" style="width: 30px;">月
            <input type="text" style="width: 30px;">日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" style="width: 50px;">年
            <input type="text" style="width: 30px;">月
            <input type="text" style="width: 30px;">日</p>
        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;居间方（丙方）：</b></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;房地产经纪人：<input type="text" style="width: 130px;"></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资质证书号：<input type="text" style="width: 200px;"></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系地址：<input type="text" style="width: 220px;"></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系方式：<input type="text" style="width: 220px;"></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" style="width: 50px;">年
        <input type="text" style="width: 30px;">月
        <input type="text" style="width: 30px;">日</p>-->
    </div>

</template>
<style>

    .whole{
        margin: auto;
        top: 0;
        right: 0;
        left:0;
        bottom: 0;
        width: 92%;
        height: 20%;
    }
    .tc{text-align:center;}
    .whole h1{
        font-size:40px;
    }
    .whole span {
        display: block;}
    .f22{
        font-size: 20px;
    }
    p{
        font-size: 18px; text-align:left;
        line-height: 2;}
    .whole input{border: none;border-bottom: 1px solid#333333;outline: none; font-size:20px!important;text-align:center}
    .whole u{
        font-size:20px!important;
    }
    .whole input[disabled]{
        background-color:white;
    }

</style>
<script>
    import {getSaleContractInfo} from '../../api/api';;
    import HistoryBuchong from './HistoryBuchong.vue';
    import ListJieyue from './ListJieyue.vue';
    export default{
        components:{
            HistoryBuchong,
            ListJieyue,
        },
        data(){
            return {
                historyBuchong:false,
                listJieyue:false,
                property:{
                    flag:null,
                    xsOffice: [{
                        omcId:null,
                        loupanOmcId:null,
                        loudongOmcId:null,
                        loupanName:null,
                        loudongName:null,
                        fanghao:null,
                        weizhi: null,
                        chanquanzhenghao: null,
                        jianzhumianji: null,
                        qianyuemianji: null,

                        leixing: null,
                        hetongid:null,
                    }],
                },
                renter:{
                    flag:null,
                    options1:[
                        {
                            value:null,
                            label:null,
                        }
                    ],
                    chengzufang:'华溯商贸',
                    jujianfang:'',
                    jujianfangtype:'',
                    zuhuleixing:1,
                    //产权人
                    chengzuren:[
                        {
                            faren:'',
                            name:'',
                            idNo:'',
                            tel:'',
                            sex:1,
                            hetongid:null,
                        },
                    ],
                    //收款人
                    shoukuanren:'',
                    zhanghao:'',
                    kaihuhang:'',
                    //代理人
                    dailirenName:'',
                    dailirenTel:'',
                    dailirenSex:1,
                    dailirenId:'',
                    //签约人
                    qianyuerenName:'',
                    qianyuerenTel:'',
                    qianyuerenSex:1,
                    qianyuerenId:'',
                },
                addDate: {
                    hetongtype:1,//合同类型
                    dikoujine:'',//合同金额
                    startdate:'',//租期开始时间
                    enddate:'',//租期结束时间
                    xinjianshoufangdate: '',//收房日期
                    xinjianqianyuedate: '',//签约日期
                    shoufangdate: '',//收房日期
                    qianyuedate: '',//签约日期
                    mianzufangshi: [],//免租方式
                    mianzuqiList: [{
                        startdate:'',//免租开始
                        enddate:'',//免租结束
                    }],
                    fukuanFangshiList:[{
                        startdate:'',//开始
                        enddate:'',//结束
                        yajinyue:'',
                        zujinyue:'',
                    }],
                    yajin:'',//押金
                    yingfuzongzujin:'',//总租金
                    hetongyongjin:'',//佣金
                    tiqianfukuantian:'',//提前付款天数
                    yajinfukuanriqi:'',//押金付款日
                    shouqifukuanri:'',//首期租金付款日
                    erqifukuanri:'',//二期付款
                    sanqifukuanri:'',//三期付款
                    buchongTiaokuanList:'',//补充条款
                    zujinList:[
                        {
                            startdate:'',
                            enddate:'',
                            yuezujin:'',
                            price:'',
                            dizengfangshi:'',
                            dizengliang:'',
                        },
                    ],
                    checkList: [],
                    jiafangfeiyong:[],
                },
                quyu:null,
                nian:null,
                yue:null,
                ri:null,
                da:null,
            }
        },
        methods:{
            daxie(money) {
                //汉字的数字
                var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
                //基本单位
                var cnIntRadice = new Array('', '拾', '佰', '仟');
                //对应整数部分扩展单位
                var cnIntUnits = new Array('', '万', '亿', '兆');
                //对应小数部分单位
                var cnDecUnits = new Array('角', '分', '毫', '厘');
                //整数金额时后面跟的字符
                var cnInteger = '整';
                //整型完以后的单位
                var cnIntLast = '元';
                //最大处理的数字
                var maxNum = 999999999999999.9999;
                //金额整数部分
                var integerNum;
                //金额小数部分
                var decimalNum;
                //输出的中文金额字符串
                var chineseStr = '';
                //分离金额后用的数组，预定义
                var parts;
                if (money == '') { return ''; }
                money = parseFloat(money);
                if (money >= maxNum) {
                    //超出最大处理数字
                    return '';
                }
                if (money == 0) {
                    chineseStr = cnNums[0] + cnIntLast + cnInteger;
                    return chineseStr;
                }
                //转换为字符串
                money = money.toString();
                if (money.indexOf('.') == -1) {
                    integerNum = money;
                    decimalNum = '';
                } else {
                    parts = money.split('.');
                    integerNum = parts[0];
                    decimalNum = parts[1].substr(0, 4);
                }
                //获取整型部分转换
                if (parseInt(integerNum, 10) > 0) {
                    var zeroCount = 0;
                    var IntLen = integerNum.length;
                    for (var i = 0; i < IntLen; i++) {
                        var n = integerNum.substr(i, 1);
                        var p = IntLen - i - 1;
                        var q = p / 4;
                        var m = p % 4;
                        if (n == '0') {
                            zeroCount++;
                        } else {
                            if (zeroCount > 0) {
                                chineseStr += cnNums[0];
                            }
                            //归零
                            zeroCount = 0;
                            chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
                        }
                        if (m == 0 && zeroCount < 4) {
                            chineseStr += cnIntUnits[q];
                        }
                    }
                    chineseStr += cnIntLast;
                }
                //小数部分
                if (decimalNum != '') {
                    var decLen = decimalNum.length;
                    for (var i = 0; i < decLen; i++) {
                        var n = decimalNum.substr(i, 1);
                        if (n != '0') {
                            chineseStr += cnNums[Number(n)] + cnDecUnits[i];
                        }
                    }
                }
                if (chineseStr == '') {
                    chineseStr += cnNums[0] + cnIntLast + cnInteger;
                } else if (decimalNum == '') {
                    chineseStr += cnInteger;
                }
                return chineseStr;
            },
            daxie2(number){
                let arr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
            },
            year(riqi){
                if(riqi!=''){
                    return new Date(riqi).getFullYear();
                }else{
                    return '';
                }
            },
            month(riqi){
                if(riqi!=''){
                    if(new Date(riqi).getMonth()+1 <10 ){
                        return '0'+(new Date(riqi).getMonth()+1);
                    }else{
                        return new Date(riqi).getMonth()+1
                    }
                }else{
                    return '';
                }
            },
            day(riqi){
                if(riqi!=''){
                    return new Date(riqi).getDate();
                }else{
                    return '';
                }

            },
            //根据url得到的合同ID，来获取数据
            getSaleContract(id){
                getSaleContractInfo(id).then((res)=>{
                    if(res.data.code=='200'){
                        //把数据分别赋值给三个组件的变量
                        //console.log(res.data)
                        this.fuzhi(res);
                    }else {
                        this.$message({
                            message: '获取数据失败',
                            type: 'error'
                        });
                    }
                })
            },
            //获取区域的中
            getquyu(str1){
                var str1 = str1;
                var str2 = "区";
                var s = str1.indexOf(str2);
                var str3 = str1.substr(3,s);
                //alert(111);
                //alert(str3);
                return(str3);
            },
            fuzhi(res){
                console.log(res.data.data);
                this.id = res.data.data.id;
                this.property.xsOffice = res.data.data.xsOffice;
                if(res.data.data.chengzuren.length>0){
                    this.renter.chengzuren = res.data.data.chengzuren;
                }
                //this.renter.chengzuren = res.data.data.chengzuren;
                this.renter.chengzufang = res.data.data.chengzufang;
                this.renter.jujianfangtype = res.data.data.jujianfangtype;
                this.renter.jujianfang = res.data.data.jujianfang;
                this.renter.shoukuanren = res.data.data.shoukuanren;
                this.renter.kaihuhang = res.data.data.kaihuhang;
                this.renter.zhanghao = res.data.data.zhanghao;
                this.renter.zuhuleixing = res.data.data.zuhuleixing;
                this.renter.shoukuanren = res.data.data.shoukuanren;
                this.renter.zhanghao = res.data.data.zhanghao;
                this.renter.qianyuerenName = res.data.data.qianyuerenName;
                this.renter.qianyuerenTel = res.data.data.qianyuerenTel;
                this.renter.qianyuerenSex = res.data.data.qianyuerenSex;
                this.renter.qianyuerenId = res.data.data.qianyuerenId;
                this.addDate.hetongtype = res.data.data.hetongtype;
                if(res.data.data.startdate != ''){
                    this.addDate.startdate = res.data.data.startdate;
                }
                if(res.data.data.enddate != ''){
                    this.addDate.enddate = res.data.data.enddate;
                }
                if(res.data.data.shoufangdate != ''){
                    this.addDate.shoufangdate = res.data.data.shoufangdate;
                }
                if(res.data.data.qianyueDate != ''){
                    this.addDate.qianyueDate = res.data.data.qianyueDate;
                }
                this.addDate.mianzufangshi = res.data.data.mianzufangshi;
                if(res.data.data.mianzuqiList != ''){
                    this.addDate.mianzuqiList = res.data.data.mianzuqiList;
                }
                this.addDate.fukuanFangshiList = res.data.data.fukuanFangshiList;
                this.addDate.yajin = res.data.data.yajin;
                this.addDate.yingfuzongzujin = res.data.data.yingfuzongzujin;
                this.addDate.hetongyongjin = res.data.data.hetongyongjin;
                this.addDate.tiqianfukuantian = res.data.data.tiqianfukuantian;
                if(res.data.data.yajinfukuanriqi != ''){
                    this.addDate.yajinfukuanriqi = res.data.data.yajinfukuanriqi;
                }
                this.addDate.shouqifukuanri = res.data.data.shouqifukuanri;
                this.addDate.erqifukuanri = res.data.data.erqifukuanri;
                this.addDate.sanqifukuanri = res.data.data.sanqifukuanri;
                this.addDate.buchongTiaokuanList = res.data.data.buchongTiaokuanList;
                if(res.data.data.zujinList != ''){
                    this.addDate.zujinList = res.data.data.zujinList;
                }
                this.addDate.checkList = res.data.data.checkList;
                this.addDate.jiafangfeiyong = res.data.data.jiafangfeiyong;
                this.nian = res.data.data.nian;
                this.yue = res.data.data.yue;
                this.ri = res.data.data.ri;
                this.da = res.data.data.da;
                //alert(res.data.data.xsOffice[0].weizhi);
                var str = res.data.data.xsOffice[0].weizhi;
                this.quyu = this.getquyu(str);
                //alert(this.quyu);
            },
        },
        mounted(){
            //window.print();
            //获取合同的详细信息
            this.getSaleContract(this.$route.query);
            // document.getElementsByTagName('head').innerHTML('<title>华亮房产 -- 先锋地产机构、专业人、信誉人</title>>');
            document.title = '华亮房产 -- 先锋地产机构、专业人、信誉人';
            function  hello() {
                window.print()
            }
            if(this.$route.query.isdump==1){
                this.historyBuchong = false;
                setTimeout(hello,1000);
            }else{
                this.historyBuchong = true;
            }
        }
    }
</script>
webpackJsonp([36],{KR8f:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("xT6B"),i={columns:["date","orderCount","orderAmount"],rows:[{date:"2018-11-01",orderCount:10,orderAmount:1093},{date:"2018-11-02",orderCount:20,orderAmount:2230},{date:"2018-11-03",orderCount:33,orderAmount:3623},{date:"2018-11-04",orderCount:50,orderAmount:6423},{date:"2018-11-05",orderCount:80,orderAmount:8492},{date:"2018-11-06",orderCount:60,orderAmount:6293},{date:"2018-11-07",orderCount:20,orderAmount:2293},{date:"2018-11-08",orderCount:60,orderAmount:6293},{date:"2018-11-09",orderCount:50,orderAmount:5293},{date:"2018-11-10",orderCount:30,orderAmount:3293},{date:"2018-11-11",orderCount:20,orderAmount:2293},{date:"2018-11-12",orderCount:80,orderAmount:8293},{date:"2018-11-13",orderCount:100,orderAmount:10293},{date:"2018-11-14",orderCount:10,orderAmount:1293},{date:"2018-11-15",orderCount:40,orderAmount:4293}]},o={name:"home",data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var a=new Date,s=new Date;s.setFullYear(2018),s.setMonth(10),s.setDate(1),a.setTime(s.getTime()+6048e5),t.$emit("pick",[s,a])}},{text:"最近一月",onClick:function(t){var a=new Date,s=new Date;s.setFullYear(2018),s.setMonth(10),s.setDate(1),a.setTime(s.getTime()+2592e6),t.$emit("pick",[s,a])}}]},orderCountDate:"",chartSettings:{xAxisType:"time",area:!0,axisSite:{right:["orderAmount"]},labelMap:{orderCount:"订单数量",orderAmount:"订单金额"}},chartData:{columns:[],rows:[]},loading:!1,dataEmpty:!1}},created:function(){this.initOrderCountDate(),this.getData()},methods:{handleDateChange:function(){this.getData()},initOrderCountDate:function(){var t=new Date;t.setFullYear(2018),t.setMonth(10),t.setDate(1);var a=new Date;a.setTime(t.getTime()+6048e5),this.orderCountDate=[t,a]},getData:function(){var t=this;setTimeout(function(){t.chartData={columns:["date","orderCount","orderAmount"],rows:[]};for(var a=0;a<i.rows.length;a++){var s=i.rows[a],o=Object(e.b)(s.date),l=t.orderCountDate[0],r=t.orderCountDate[1];o.getTime()>=l.getTime()&&o.getTime()<=r.getTime()&&t.chartData.rows.push(s)}t.dataEmpty=!1,t.loading=!1},1e3)}}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"address-layout"},[s("el-row",{attrs:{gutter:20}})],1),t._v(" "),s("div",{staticClass:"total-layout"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"total-frame"},[s("svg-icon",{staticClass:"total-icon",attrs:{"icon-class":"order"}}),t._v(" "),s("div",{staticClass:"total-title"},[t._v("今日订单总数")]),t._v(" "),s("div",{staticClass:"total-value"},[t._v("200")])],1)]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"total-frame"},[s("svg-icon",{staticClass:"total-icon",attrs:{"icon-class":"total-today"}}),t._v(" "),s("div",{staticClass:"total-title"},[t._v("今日销售总额")]),t._v(" "),s("div",{staticClass:"total-value"},[t._v("￥5000.00")])],1)]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"total-frame"},[s("svg-icon",{staticClass:"total-icon",attrs:{"icon-class":"total-yesterday"}}),t._v(" "),s("div",{staticClass:"total-title"},[t._v("昨日销售总额")]),t._v(" "),s("div",{staticClass:"total-value"},[t._v("￥5000.00")])],1)]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"total-frame"},[s("svg-icon",{staticClass:"total-icon",attrs:{"icon-class":"total-week"}}),t._v(" "),s("div",{staticClass:"total-title"},[t._v("近7天销售总额")]),t._v(" "),s("div",{staticClass:"total-value"},[t._v("￥50000.00")])],1)])],1)],1),t._v(" "),s("div",{staticClass:"un-handle-layout"},[s("div",{staticClass:"layout-title"},[t._v("待处理事务")]),t._v(" "),s("div",{staticClass:"un-handle-content"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("div",{staticClass:"un-handle-item"},[s("span",{staticClass:"font-medium"},[t._v("待付款订单")]),t._v(" "),s("span",{staticClass:"color-danger",staticStyle:{float:"right"}},[t._v("(10)")])])]),t._v(" "),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"un-handle-item"},[s("span",{staticClass:"font-medium"},[t._v("已完成订单")]),t._v(" "),s("span",{staticClass:"color-danger",staticStyle:{float:"right"}},[t._v("(10)")])])]),t._v(" "),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"un-handle-item"},[s("span",{staticClass:"font-medium"},[t._v("待确认收货订单")]),t._v(" "),s("span",{staticClass:"color-danger",staticStyle:{float:"right"}},[t._v("(10)")])])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("div",{staticClass:"un-handle-item"},[s("span",{staticClass:"font-medium"},[t._v("待发货订单")]),t._v(" "),s("span",{staticClass:"color-danger",staticStyle:{float:"right"}},[t._v("(10)")])])]),t._v(" "),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"un-handle-item"},[s("span",{staticClass:"font-medium"},[t._v("新缺货登记")]),t._v(" "),s("span",{staticClass:"color-danger",staticStyle:{float:"right"}},[t._v("(10)")])])]),t._v(" "),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"un-handle-item"},[s("span",{staticClass:"font-medium"},[t._v("待处理退款申请")]),t._v(" "),s("span",{staticClass:"color-danger",staticStyle:{float:"right"}},[t._v("(10)")])])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("div",{staticClass:"un-handle-item"},[s("span",{staticClass:"font-medium"},[t._v("已发货订单")]),t._v(" "),s("span",{staticClass:"color-danger",staticStyle:{float:"right"}},[t._v("(10)")])])]),t._v(" "),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"un-handle-item"},[s("span",{staticClass:"font-medium"},[t._v("待处理退货订单")]),t._v(" "),s("span",{staticClass:"color-danger",staticStyle:{float:"right"}},[t._v("(10)")])])]),t._v(" "),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"un-handle-item"},[s("span",{staticClass:"font-medium"},[t._v("广告位即将到期")]),t._v(" "),s("span",{staticClass:"color-danger",staticStyle:{float:"right"}},[t._v("(10)")])])])],1)],1)]),t._v(" "),s("div",{staticClass:"overview-layout"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"out-border"},[s("div",{staticClass:"layout-title"},[t._v("商品总览")]),t._v(" "),s("div",{staticStyle:{padding:"40px"}},[s("el-row",[s("el-col",{staticClass:"color-danger overview-item-value",attrs:{span:6}},[t._v("100")]),t._v(" "),s("el-col",{staticClass:"color-danger overview-item-value",attrs:{span:6}},[t._v("400")]),t._v(" "),s("el-col",{staticClass:"color-danger overview-item-value",attrs:{span:6}},[t._v("50")]),t._v(" "),s("el-col",{staticClass:"color-danger overview-item-value",attrs:{span:6}},[t._v("500")])],1),t._v(" "),s("el-row",{staticClass:"font-medium"},[s("el-col",{staticClass:"overview-item-title",attrs:{span:6}},[t._v("已下架")]),t._v(" "),s("el-col",{staticClass:"overview-item-title",attrs:{span:6}},[t._v("已上架")]),t._v(" "),s("el-col",{staticClass:"overview-item-title",attrs:{span:6}},[t._v("库存紧张")]),t._v(" "),s("el-col",{staticClass:"overview-item-title",attrs:{span:6}},[t._v("全部商品")])],1)],1)])]),t._v(" "),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"out-border"},[s("div",{staticClass:"layout-title"},[t._v("用户总览")]),t._v(" "),s("div",{staticStyle:{padding:"40px"}},[s("el-row",[s("el-col",{staticClass:"color-danger overview-item-value",attrs:{span:6}},[t._v("100")]),t._v(" "),s("el-col",{staticClass:"color-danger overview-item-value",attrs:{span:6}},[t._v("200")]),t._v(" "),s("el-col",{staticClass:"color-danger overview-item-value",attrs:{span:6}},[t._v("1000")]),t._v(" "),s("el-col",{staticClass:"color-danger overview-item-value",attrs:{span:6}},[t._v("5000")])],1),t._v(" "),s("el-row",{staticClass:"font-medium"},[s("el-col",{staticClass:"overview-item-title",attrs:{span:6}},[t._v("今日新增")]),t._v(" "),s("el-col",{staticClass:"overview-item-title",attrs:{span:6}},[t._v("昨日新增")]),t._v(" "),s("el-col",{staticClass:"overview-item-title",attrs:{span:6}},[t._v("本月新增")]),t._v(" "),s("el-col",{staticClass:"overview-item-title",attrs:{span:6}},[t._v("会员总数")])],1)],1)])])],1)],1),t._v(" "),s("div",{staticClass:"statistics-layout"},[s("div",{staticClass:"layout-title"},[t._v("订单统计")]),t._v(" "),s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticStyle:{padding:"20px"}},[s("div",[s("div",{staticStyle:{color:"#909399","font-size":"14px"}},[t._v("本月订单总数")]),t._v(" "),s("div",{staticStyle:{color:"#606266","font-size":"24px",padding:"10px 0"}},[t._v("10000")]),t._v(" "),s("div",[s("span",{staticClass:"color-success",staticStyle:{"font-size":"14px"}},[t._v("+10%")]),t._v(" "),s("span",{staticStyle:{color:"#C0C4CC","font-size":"14px"}},[t._v("同比上月")])])]),t._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("div",{staticStyle:{color:"#909399","font-size":"14px"}},[t._v("本周订单总数")]),t._v(" "),s("div",{staticStyle:{color:"#606266","font-size":"24px",padding:"10px 0"}},[t._v("1000")]),t._v(" "),s("div",[s("span",{staticClass:"color-danger",staticStyle:{"font-size":"14px"}},[t._v("-10%")]),t._v(" "),s("span",{staticStyle:{color:"#C0C4CC","font-size":"14px"}},[t._v("同比上周")])])]),t._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("div",{staticStyle:{color:"#909399","font-size":"14px"}},[t._v("本月销售总额")]),t._v(" "),s("div",{staticStyle:{color:"#606266","font-size":"24px",padding:"10px 0"}},[t._v("100000")]),t._v(" "),s("div",[s("span",{staticClass:"color-success",staticStyle:{"font-size":"14px"}},[t._v("+10%")]),t._v(" "),s("span",{staticStyle:{color:"#C0C4CC","font-size":"14px"}},[t._v("同比上月")])])]),t._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("div",{staticStyle:{color:"#909399","font-size":"14px"}},[t._v("本周销售总额")]),t._v(" "),s("div",{staticStyle:{color:"#606266","font-size":"24px",padding:"10px 0"}},[t._v("50000")]),t._v(" "),s("div",[s("span",{staticClass:"color-danger",staticStyle:{"font-size":"14px"}},[t._v("-10%")]),t._v(" "),s("span",{staticStyle:{color:"#C0C4CC","font-size":"14px"}},[t._v("同比上周")])])])])]),t._v(" "),s("el-col",{attrs:{span:20}},[s("div",{staticStyle:{padding:"10px","border-left":"1px solid #DCDFE6"}},[s("el-date-picker",{staticStyle:{float:"right","z-index":"1"},attrs:{size:"small",type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},on:{change:t.handleDateChange},model:{value:t.orderCountDate,callback:function(a){t.orderCountDate=a},expression:"orderCountDate"}}),t._v(" "),s("div",[s("ve-line",{attrs:{data:t.chartData,"legend-visible":!1,loading:t.loading,"data-empty":t.dataEmpty,settings:t.chartSettings}})],1)],1)])],1)],1)])},staticRenderFns:[]};var r=s("VU/8")(o,l,!1,function(t){s("N4SM")},"data-v-29379a45",null);a.default=r.exports},N4SM:function(t,a){}});
//# sourceMappingURL=36.76e664bae1f7b65e8464.js.map
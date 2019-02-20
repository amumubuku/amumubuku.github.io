webpackJsonp([10],{"/emZ":function(t,e,o){"use strict";var n=o("woOf"),l=o.n(n),a=o("4cjj"),r=o("UgCr"),i=o("mRsl"),u={type:0,name:null,platform:0,amount:null,perLimit:1,minPoint:null,startTime:null,endTime:null,useType:0,note:null,publishCount:null,productRelationList:[],productCategoryRelationList:[]},s=[{label:"全场赠券",value:0},{label:"会员赠券",value:1},{label:"购物赠券",value:2},{label:"注册赠券",value:3}],c=[{label:"全平台",value:0},{label:"移动平台",value:1},{label:"PC平台",value:2}],p={name:"CouponDetail",props:{isEdit:{type:Boolean,default:!1}},data:function(){return{coupon:l()({},u),typeOptions:l()({},s),platformOptions:l()({},c),rules:{name:[{required:!0,message:"请输入优惠券名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}],publishCount:[{type:"number",required:!0,message:"只能输入正整数",trigger:"blur"}],amount:[{type:"number",required:!0,message:"面值只能是数值，0.01-10000，限2位小数",trigger:"blur"}],minPoint:[{type:"number",required:!0,message:"只能输入正整数",trigger:"blur"}]},selectProduct:null,selectProductLoading:!1,selectProductOptions:[],selectProductCate:null,productCateOptions:[]}},created:function(){var t=this;this.isEdit&&Object(a.d)(this.$route.query.id).then(function(e){t.coupon=e.data}),this.getProductCateList()},methods:{onSubmit:function(t){var e=this;this.$refs[t].validate(function(o){if(!o)return e.$message({message:"验证失败",type:"error",duration:1e3}),!1;e.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.isEdit?Object(a.e)(e.$route.query.id,e.coupon).then(function(o){e.$refs[t].resetFields(),e.$message({message:"修改成功",type:"success",duration:1e3}),e.$router.back()}):Object(a.a)(e.coupon).then(function(o){e.$refs[t].resetFields(),e.$message({message:"提交成功",type:"success",duration:1e3}),e.$router.back()})})})},resetForm:function(t){this.$refs[t].resetFields(),this.coupon=l()({},u)},searchProductMethod:function(t){var e=this;""!==t?(this.loading=!0,Object(r.c)({keyword:t}).then(function(t){e.loading=!1;var o=t.data;e.selectProductOptions=[];for(var n=0;n<o.length;n++){var l=o[n];e.selectProductOptions.push({productId:l.id,productName:l.name,productSn:l.productSn})}})):this.selectProductOptions=[]},handleAddProductRelation:function(){null!==this.selectProduct?(this.coupon.productRelationList.push(this.getProductById(this.selectProduct)),this.selectProduct=null):this.$message({message:"请先选择商品",type:"warning"})},handleDeleteProductRelation:function(t,e){this.coupon.productRelationList.splice(t,1)},handleAddProductCategoryRelation:function(){null!==this.selectProductCate&&0!==this.selectProductCate.length?(this.coupon.productCategoryRelationList.push(this.getProductCateByIds(this.selectProductCate)),this.selectProductCate=[]):this.$message({message:"请先选择商品分类",type:"warning"})},handleDeleteProductCateRelation:function(t,e){this.coupon.productCategoryRelationList.splice(t,1)},getProductById:function(t){for(var e=0;e<this.selectProductOptions.length;e++)if(t===this.selectProductOptions[e].productId)return this.selectProductOptions[e];return null},getProductCateList:function(){var t=this;Object(i.d)().then(function(e){var o=e.data;t.productCateOptions=[];for(var n=0;n<o.length;n++){var l=[];if(null!=o[n].children&&o[n].children.length>0)for(var a=0;a<o[n].children.length;a++)l.push({label:o[n].children[a].name,value:o[n].children[a].id});t.productCateOptions.push({label:o[n].name,value:o[n].id,children:l})}})},getProductCateByIds:function(t){for(var e=void 0,o=void 0,n=0;n<this.productCateOptions.length;n++)if(this.productCateOptions[n].value===t[0]){o=this.productCateOptions[n].label;for(var l=0;l<this.productCateOptions[n].children.length;l++)this.productCateOptions[n].children[l].value===t[1]&&(e=this.productCateOptions[n].children[l].label)}return{productCategoryId:t[1],productCategoryName:e,parentCategoryName:o}}}},d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[o("el-form",{ref:"couponFrom",attrs:{model:t.coupon,rules:t.rules,"label-width":"150px",size:"small"}},[o("el-form-item",{attrs:{label:"优惠券类型："}},[o("el-select",{model:{value:t.coupon.type,callback:function(e){t.$set(t.coupon,"type",e)},expression:"coupon.type"}},t._l(t.typeOptions,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),o("el-form-item",{attrs:{label:"优惠券名称：",prop:"name"}},[o("el-input",{staticClass:"input-width",model:{value:t.coupon.name,callback:function(e){t.$set(t.coupon,"name",e)},expression:"coupon.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"适用平台："}},[o("el-select",{model:{value:t.coupon.platform,callback:function(e){t.$set(t.coupon,"platform",e)},expression:"coupon.platform"}},t._l(t.platformOptions,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),o("el-form-item",{attrs:{label:"总发行量：",prop:"publishCount"}},[o("el-input",{staticClass:"input-width",attrs:{placeholder:"只能输入正整数"},model:{value:t.coupon.publishCount,callback:function(e){t.$set(t.coupon,"publishCount",t._n(e))},expression:"coupon.publishCount"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"面额：",prop:"amount"}},[o("el-input",{staticClass:"input-width",attrs:{placeholder:"面值只能是数值，限2位小数"},model:{value:t.coupon.amount,callback:function(e){t.$set(t.coupon,"amount",t._n(e))},expression:"coupon.amount"}},[o("template",{slot:"append"},[t._v("元")])],2)],1),t._v(" "),o("el-form-item",{attrs:{label:"每人限领："}},[o("el-input",{staticClass:"input-width",attrs:{placeholder:"只能输入正整数"},model:{value:t.coupon.perLimit,callback:function(e){t.$set(t.coupon,"perLimit",e)},expression:"coupon.perLimit"}},[o("template",{slot:"append"},[t._v("张")])],2)],1),t._v(" "),o("el-form-item",{attrs:{label:"使用门槛：",prop:"minPoint"}},[o("el-input",{staticClass:"input-width",attrs:{placeholder:"只能输入正整数"},model:{value:t.coupon.minPoint,callback:function(e){t.$set(t.coupon,"minPoint",t._n(e))},expression:"coupon.minPoint"}},[o("template",{slot:"prepend"},[t._v("满")]),t._v(" "),o("template",{slot:"append"},[t._v("元可用")])],2)],1),t._v(" "),o("el-form-item",{attrs:{label:"有效期："}},[o("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.coupon.startTime,callback:function(e){t.$set(t.coupon,"startTime",e)},expression:"coupon.startTime"}}),t._v(" "),o("span",{staticStyle:{"margin-left":"20px","margin-right":"20px"}},[t._v("至")]),t._v(" "),o("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.coupon.endTime,callback:function(e){t.$set(t.coupon,"endTime",e)},expression:"coupon.endTime"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"可使用商品："}},[o("el-radio-group",{model:{value:t.coupon.useType,callback:function(e){t.$set(t.coupon,"useType",e)},expression:"coupon.useType"}},[o("el-radio-button",{attrs:{label:0}},[t._v("全场通用")]),t._v(" "),o("el-radio-button",{attrs:{label:1}},[t._v("指定分类")]),t._v(" "),o("el-radio-button",{attrs:{label:2}},[t._v("指定商品")])],1)],1),t._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1===t.coupon.useType,expression:"coupon.useType===1"}]},[o("el-cascader",{attrs:{clearable:"",placeholder:"请选择分类名称",options:t.productCateOptions},model:{value:t.selectProductCate,callback:function(e){t.selectProductCate=e},expression:"selectProductCate"}}),t._v(" "),o("el-button",{on:{click:function(e){t.handleAddProductCategoryRelation()}}},[t._v("添加")]),t._v(" "),o("el-table",{ref:"productCateRelationTable",staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.coupon.productCategoryRelationList,border:""}},[o("el-table-column",{attrs:{label:"分类名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.parentCategoryName)+">"+t._s(e.row.productCategoryName))]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(o){t.handleDeleteProductCateRelation(e.$index,e.row)}}},[t._v("删除\n            ")])]}}])})],1)],1),t._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:2===t.coupon.useType,expression:"coupon.useType===2"}]},[o("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"商品名称/商品货号","remote-method":t.searchProductMethod,loading:t.selectProductLoading},model:{value:t.selectProduct,callback:function(e){t.selectProduct=e},expression:"selectProduct"}},t._l(t.selectProductOptions,function(e){return o("el-option",{key:e.productId,attrs:{label:e.productName,value:e.productId}},[o("span",{staticStyle:{float:"left"}},[t._v(t._s(e.productName))]),t._v(" "),o("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v("NO."+t._s(e.productSn))])])})),t._v(" "),o("el-button",{on:{click:function(e){t.handleAddProductRelation()}}},[t._v("添加")]),t._v(" "),o("el-table",{ref:"productRelationTable",staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.coupon.productRelationList,border:""}},[o("el-table-column",{attrs:{label:"商品名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.productName))]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"货号",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("NO."+t._s(e.row.productSn))]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(o){t.handleDeleteProductRelation(e.$index,e.row)}}},[t._v("删除\n            ")])]}}])})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"备注："}},[o("el-input",{staticClass:"input-width",attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:t.coupon.note,callback:function(e){t.$set(t.coupon,"note",e)},expression:"coupon.note"}})],1),t._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSubmit("couponFrom")}}},[t._v("提交")]),t._v(" "),t.isEdit?t._e():o("el-button",{on:{click:function(e){t.resetForm("couponFrom")}}},[t._v("重置")])],1)],1)],1)},staticRenderFns:[]};var m=o("VU/8")(p,d,!1,function(t){o("zWRV")},"data-v-3cf5ffa3",null);e.a=m.exports},"3opA":function(t,e){},"718U":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"addCoupon",components:{CouponDetail:o("/emZ").a}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("coupon-detail",{attrs:{isEdit:!1}})},staticRenderFns:[]};var a=o("VU/8")(n,l,!1,function(t){o("3opA")},"data-v-dd01893e",null);e.default=a.exports},zWRV:function(t,e){}});
//# sourceMappingURL=10.2816764d78d579b099aa.js.map
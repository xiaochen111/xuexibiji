# xuexibiji学习笔记


2.(1)鼠标悬停 提示（tips）伪类 :after{content:attr(name)} //name为标签里的属性
(2) content: url(../images/menber/wallet/nike.jpg); .pos_a(); top: 44px; right: 0;



3.css  -webkit-box-sizing:border-box   box-sizing:border-box   宽高一定  padding的值不受影响


4. http://www.cnblogs.com/cainiaoguoshi/p/3303156.html table td的宽度详解 (table的table-layout: fixed;(fixed表示td的宽度是定长的，不随td内容变化而变化)。)  每一行td 不能每个都设宽度  要至少留一个不给宽度  自己适应宽度


5.react  react子组件改变父组件state   在父级上写一个方法 用属性的方式写在组件上  子集通过props调用此方法 从而改变父级的state

6.angularjs表单验证 http://www.cnblogs.com/rohelm/p/4033513.html

   <form role="form" name="myForm" id="myForm" novalidate>
    <div class="form-group col-md-4">
    <label class="col-sm-3 control-label"><span class="red">*</span>提单号:{{myForm.tidan.$dirty}}</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" placeholder="请输入提单号" name="tidan" required ng-model='formObj.tidan'>
      <span class="glyphicon glyphicon-ok form-control-feedback" ng-show="myForm.tidan.$dirty">fsdfsd</span>
    </div>
  </div>
  </form>
  
（注意：ng-model='formObj.tidan'  这个一定要写  不然不起效果）

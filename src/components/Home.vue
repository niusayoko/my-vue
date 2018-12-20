<template>
  <!-- Main navbar -->
  <div class="navbar navbar-inverse" id="base-header">
    <div class="navbar-header">
      <a class="navbar-brand" href="/home">JCI</a>
    </div>

    <div class="navbar-collapse collapse" id="navbar-mobile">
      <ul class="nav navbar-nav">
        <li><a class="sidebar-control sidebar-main-toggle hidden-xs"><i class="icon-paragraph-justify3"></i></a></li>
      </ul>
      <ul class="nav navbar-nav">
        <li v-for="headerBaseMenu in headerBaseMenus"><a href="#">{{headerBaseMenu.text}}</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{headerCodeMenu.codeMenu}}<span class="caret"></span></a>
          <ul class="dropdown-menu dropdown-menu-right">
            <li v-for="codeMenuChild in headerCodeMenu.codeMenuChilds"><a href="#">{{codeMenuChild.text}}</a></li>
          </ul>
        </li>
      </ul>

      <div class="navbar-right">
        <ul class="nav navbar-nav">

          <li class="dropdown language-switch">
            <a class="dropdown-toggle" data-toggle="dropdown" @click="getLanguage">
              <img src="http://localhost:1235/default/assets/images/flags/cn.png" class="position-left" >
              简体中文
              <span class="caret"></span>
            </a>

            <ul class="dropdown-menu" id="v-for-languages">
              <li v-for="language in languages"><a :class="language.class"class="deutsch"><img :src="language.imgUrl" >{{language.text}}</a></li>
            </ul>
          </li>


          <li class="dropdown dropdown-user">
            <a class="dropdown-toggle" data-toggle="dropdown">
              <span>Victoria</span>
              <i class="caret"></i>
            </a>

            <ul class="dropdown-menu dropdown-menu-right">
              <li><a href="#"><i class="icon-user-plus"></i> Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- /main navbar -->

</template>

<script>
  export default {
    data:function(){
      return {
        headerBaseMenus: [
          { text: '产品' },
          { text: '组件' },
          { text: '需求' },
          { text: 'BUG' },
          { text: '移动端'},
          { text: '变更' },
          { text: '提测' },
          { text: '上线' }
        ],
        headerCodeMenu: {
          codeMenu: '代码' ,
          codeMenuChilds: [
            { text: '仓库' },
            { text: '审批' },
            { text: '产品线' },
          ]
        },
        languages: [
        ]
      }
    },
    methods:{
      getLanguage:function () {
        var _this = this;

          //点击事件获取数据，用vue渲染到下拉选中
          this.axios.get('/static/data/language.json').then(response => {
            console.log(response);
            _this.languages = response.data.languages;
            console.log(_this.languages);
          });
      }
    }
  }
</script>

<style scoped>

</style>

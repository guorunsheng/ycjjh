<template>
    <div class="back-all-wrap">
        <el-row class="tac">
            <el-col class="col-wrap" :span="4">
                <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                >
                <el-menu-item index="1" @click="jumpTo('publishPage')">
                    <i class="el-icon-circle-plus-outline"></i>
                    <span slot="title">文章发布</span>
                </el-menu-item>
                <el-menu-item index="2" @click="jumpTo('pageList')">
                    <i class="el-icon-document"></i>
                    <span slot="title">文章列表</span>
                </el-menu-item>
                <el-menu-item index="3" @click="jumpTo('uploadFile')">
                    <i class="el-icon-upload2"></i>
                    <span slot="title">上传文档</span>
                </el-menu-item>
                <el-menu-item index="4" @click="jumpTo('uploadRes')">
                    <i class="el-icon-upload2"></i>
                    <span slot="title">上传资源</span>
                </el-menu-item>
                <el-menu-item index="5" @click="jumpTo('uploadResList')">
                    <i class="el-icon-upload2"></i>
                    <span slot="title">上传资源列表</span>
                </el-menu-item>
                <el-menu-item index="6" @click="jumpTo('uploadList')">
                    <i class="el-icon-upload2"></i>
                    <span slot="title">上传文档列表</span>
                </el-menu-item>
                <el-menu-item index="7" @click="jumpTo('verifyMemberQ')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">会员审核</span>
                </el-menu-item>
                <el-menu-item index="8" @click="jumpTo('memberList')">
                    <i class="el-icon-setting"></i>
                    <span slot="title">会员列表</span>
                </el-menu-item>
                <el-menu-item index="9" disabled>
                    <i class="el-icon-setting"></i>
                    <span slot="title">更多</span>
                </el-menu-item>
                </el-menu>
            </el-col>
            <el-col class="col-wrap1" :span='16' :offset='2'>
                <div class="main-oper">
                    <el-button size='small' type='success' @click="jumpTo('/')">回到官网</el-button>
                    <el-button size='small' type='danger' @click="exitFc">退出登录</el-button>
                </div>
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  methods: {
    jumpTo(v) {
        this.$router.push(v)
    },
    exitFc() {
        localStorage.clear();
        this.jumpTo('/')
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("to", to);
    console.log("from", from);
    console.log("next", next);
    if (+localStorage.getItem("isAdmin") === 1) {
      next();
      return;
    }
    next("/index");
  },
  created() {

  }
};
</script>

<style lang='scss' scoped>
.back-all-wrap {
    width: 1000PX;
    background-color:white;
    margin: 0PX auto;
    //height: 180vh;
    .tac {
        //height: 100%;
        height: 100%;
        margin-left: 20PX;
        margin-top: -20px;
        .col-wrap {
            //height: 100%;
            height: 100%;
            width:170px;
            margin-top: 25px;
            .main-oper {
                margin-top: 2em;
            }
        }
         .col-wrap1{
         width: 750px;
         margin-left: 25px;
         margin-top: 40px;
        }
    }
}
</style>



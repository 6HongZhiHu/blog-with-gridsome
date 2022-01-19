<template>
  <div>
    <Layout>
      <!-- Page Header-->
      <header
        class="masthead"
        style="background-image: url('/img/contact-bg.jpg')"
      >
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="page-heading">
                <h1>联系我们</h1>
                <span class="subheading">有问题？请提交您的意见</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- Main Content-->
      <main class="mb-4">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <p>想要联系吗?请填写下面的表格给我发信息，我会尽快给您回复!</p>
              <div class="my-5">
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item prop="name" label="名称">
                    <el-input @input="onInput()" v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item prop="phone" label="手机号码">
                    <el-input v-model="form.phone"></el-input>
                  </el-form-item>
                  <el-form-item prop="email" label="邮箱">
                    <el-input v-model="form.email"></el-input>
                  </el-form-item>
                   <el-form-item prop="msg" label="信息">
                    <el-input type="textarea" v-model="form.msg"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit"
                      >提交</el-button
                    >
                    <el-button @click="resetForm('form')">重置</el-button>
                    <!-- <el-button>取消</el-button> -->
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//import { mapGetters } from 'vuex'
import axios from "axios";
const { log } = console;
export default {
  name: "Contect",
  components: {},
  // 定义属性
  data() {
    return {
      form: {
        name: "",
        msg:"",
        email:"",
        phone:""
      },
    };
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async onSubmit() {
      console.log("111");
      log("123",this.form);
      let {data} = await axios({
        method:'POST',
        url:"http://106.75.14.165/contacts",
        data:this.form
      })
      if(data && data.id){
        this.$message({
          message: '请求成功',
          type: 'success'
        });
      }else{
        this.$message.error('请求失败');
      }
      this.resetForm('form');
    },
    resetForm(formName) {
      console.log(formName)
      this.$refs[formName].resetFields();
    },
    onInput(){
      this.$forceUpdate();
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang='stylus' scoped></style>
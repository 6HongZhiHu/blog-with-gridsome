<template>
  <div>
    <Layout>
      <!-- Page Header-->
      <header
        class="masthead"
        style="background-image: url('/img/home-bg.jpg')"
      >
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="site-heading">
                <h1>#{{$page.strapiTag.title}}</h1>
                <!-- <span class="subheading">一个由启动引导的博客主题</span> -->
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- Main Content-->
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <!-- Post preview-->
            <div 
              class="post-preview" 
              v-for="edge in $page.strapiTag.articles"
              :key="edge.id"
            >
              <g-link :to="'/post/'+edge.id">
                <h2 class="post-title">
                  {{edge.title}}
                  <!-- Man must explore, and this is exploration at its greatest -->
                </h2>
                <h3 class="post-subtitle">
                  {{edge.description}}
                </h3>
              </g-link>
              <p class="post-meta">
                发布于
                <a href="#!">{{edge.author}}</a>
                on {{edge.created_at}}
              </p>
              <!-- <p>
                <span 
                  v-for="tag in edge.tags"
                  :key="tag.id"
                >
                  <g-link :to="/tag/+tag.id">{{tag.title}}</g-link>
                  &nbsp;
                </span>
              </p> -->
              <hr class="my-4" />
            </div>
            

            <!-- Pager-->
            <!-- <div class="d-flex justify-content-end mb-4">
              <a class="btn btn-primary text-uppercase" href="#!"
                >Older Posts →</a
              >
            </div> -->
            <!-- <pager class="text-center" :info="$page.allStrapiArticle.pageInfo"/> -->
            <!-- <el-pagination
              background
              layout="prev, pager, next"
              :total="$page.allStrapiArticle.edges.length"
              :current-page="$page.allStrapiArticle.pageInfo.currentPage"
            >
            </el-pagination> -->
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>
// 在页面查询预渲染数据 (perPage:3 ,page: 1) @paginate 这个是分页用的
<page-query>
query{
strapiTag(id:1){
  id
  title
  articles{
    id
    author
    created_at
    title
    description
  }
}
}
</page-query>
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//import { mapGetters } from 'vuex'

export default {
  name:"tagPage",
  components: {
  },
  // 定义属性
  data() {
    return {
      
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='stylus' scoped>
  
</style>
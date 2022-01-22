<template>
  <div>
    <Layout>
      <!-- Page Header-->
      <header
        class="masthead"
        :style="{
          backgroundImage: `url(${$page.strapiArticle.act[0].url})`,
        }"
      >
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="post-heading">
                <h1>
                  {{ $page.strapiArticle.title }}
                </h1>
                <h2 class="subheading">
                  {{ $page.strapiArticle.description }}
                </h2>
                <span class="meta">
                  文章发布于
                  <a href="#!">{{ $page.strapiArticle.author }}</a>
                  {{ $page.strapiArticle.created_at }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- Post Content-->
      <article class="mb-4">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <!-- <div v-html="$page.post.edges[0].node.content"></div> -->
              <div
                v-if="!checkHtml($page.strapiArticle.content)"
                v-html="mdto($page.strapiArticle.content)"
              ></div>
              <div
                v-else
                v-html="$page.strapiArticle.content"
              ></div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  </div>
</template>
// 在页面查询预渲染数据

<page-query>
query($id:ID!){
  strapiArticle(id:$id){
    id
    title
    author
    created_at
    description
    content
    act{
      updated_at
      created_at
      name
      url
    }
  }
}
</page-query>
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//import { mapGetters } from 'vuex'
/**
 * <page-query>
query {
  post:allBlogPost{
    edges{
      node{
        id
        title
        content
      }
    }
  }
}
</page-query>
 * 
 * 
 * 
 */
import md from "markdown-it";
let mkd = new md();
export default {
  components: {},
  // 定义属性
  data() {
    return {};
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    mdto(mdwn) {
      return mkd.render(mdwn);
    },
    checkHtml(htmlStr) {
      let reg = /<[^>]+>/g;
      return reg.test(htmlStr);
    },
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
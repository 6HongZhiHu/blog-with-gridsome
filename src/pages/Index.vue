<template>
  <div>
    <Layout>
      <!-- Page Header-->
      <!-- <header
        class="masthead"
        style="background-image: url('/img/home-bg.jpg')"
      > -->
      <header
        class="masthead"
        :style="{backgroundImage: `url(${GRIDSOME_API_URL + $page.allStrapiGeneral.edges[0].node.img.url})`}"
      >
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="site-heading">
                <h1>红紫黑</h1>
                <h2>{{$page.allStrapiGeneral.edges[0].node.title}}</h2>
                <span class="subheading">{{$page.allStrapiGeneral.edges[0].node.subtitle}}</span>
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
              v-for="edge in orgData"
              :key="edge.node.id"
            >
              <g-link :to="'/post/'+edge.node.id">
                <h2 class="post-title">
                  {{edge.node.title}}
                  <!-- Man must explore, and this is exploration at its greatest -->
                </h2>
                <h3 class="post-subtitle">
                  {{edge.node.description}}
                </h3>
              </g-link>
              <p class="post-meta">
                发布于
                <a href="#!">{{edge.node.author}}</a>
                on {{edge.node.created_at}}
              </p>
              <p>
                <span 
                  v-for="tag in edge.node.tags"
                  :key="tag.id"
                >
                  <g-link :to="/tag/+tag.id">{{tag.title}}</g-link>
                  &nbsp;
                </span>
              </p>
              <hr class="my-4" />
            </div>
            

            <!-- Pager-->
            <!-- <div class="d-flex justify-content-end mb-4">
              <a class="btn btn-primary text-uppercase" href="#!"
                >Older Posts →</a
              >
            </div> -->
            <!-- <pager class="text-center" :info="$page.allStrapiArticle.pageInfo"/> -->
            <el-pagination
              background
              :page-sizes="pageSizes"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="$page.allStrapiArticle.edges.length"
              :page-count="totalPage"
              :current-page="1"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </Layout>
  </div>

  <!-- <page-query>
query{
  allStrapiArticle {
    pageInfo{
      totalPages
      currentPage
    }
    edges{
      node{
        author
        description
        id
        title
        content
        is_publish
        created_at
        category{
          id
        }
        tags{
          id
          title
        }
      }
    }
  }

   allStrapiGeneral{
    edges{
      node{
        subtitle
        id
        title
        img{
          url
        }
      }
    }
  }
}
</page-query> -->
</template>
// 在页面查询预渲染数据 (perPage:3 ,page: 1) @paginate 这个是分页用的
<page-query>
query{
  allStrapiArticle {
    pageInfo{
      totalPages
      currentPage
    }
    edges{
      node{
        author
        description
        id
        title
        content
        is_publish
        created_at
        category{
          id
        }
        tags{
          id
          title
        }
      }
    }
  }

   allStrapiGeneral{
    edges{
      node{
        subtitle
        id
        title
        img{
          url
        }
      }
    }
  }
}
</page-query>
<script>
import {Pager} from "gridsome"
export default {
  name:"homePage",
  metaInfo: {
    title: "Hello, world!",
  },
  components:{
    Pager
  },
  data() {
    return {
      isShow: false,
      pageSizes:[5,10],
      pageSize:5,
      orgData:[]
    };
  },
  computed:{
    totalPage(){
      // a = []
      // a.length
      let p = this.$page.allStrapiArticle.edges.length;
      console.log(p,this.pageSize)
      return Math.ceil(p / this.pageSize)
    },
    // orgData(){
    //   return JSON.stringify(JSON.parse(this.$page.allStrapiArticle.edges)) 
    // }
  },
  mounted() {
    console.log(this.$page.allStrapiArticle.edges)
    if(this.orgData.length == 0){
      this.orgData = JSON.parse(JSON.stringify(this.$page.allStrapiArticle.edges))
    }
    
    this.handleCurrentChange(1)
  },
  methods: {
    checkShow() {
      this.isShow = !this.isShow;
    },
    jumpPage(){

    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.handleCurrentChange(1)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      console.log(this.orgData.slice((val-1)*this.pageSize,val*this.pageSize))
      // let p = this.$page.allStrapiArticle.edges;
      // this.$page.allStrapiArticle.edges = this.orgData.slice((val-1)*this.pageSize,val*this.pageSize)
      this.orgData = this.$page.allStrapiArticle.edges.slice((val-1)*this.pageSize,val*this.pageSize)
    }
  },
};
</script>

<style scoped>
</style>


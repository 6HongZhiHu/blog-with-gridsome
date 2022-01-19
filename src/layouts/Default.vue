<template>
  <div class="layout">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div class="container px-4 px-lg-5">
        <g-link class="navbar-brand" to="/">Start Bootstrap</g-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="checkShow"
        >
          菜单
          <i class="fas fa-bars"></i>
        </button>
        <div

          :class="isShow ? 'collapse navbar-collapse navbar-collapse' : 'no'"
          id="navbarResponsive"
        >
          <ul class="navbar-nav ms-auto py-4 py-lg-0">
            <li class="nav-item">
              <g-link class="nav-link px-lg-3 py-3 py-lg-4" to="/"
                >首页</g-link
              >
            </li>
            <li class="nav-item">
              <g-link class="nav-link px-lg-3 py-3 py-lg-4" to="/about"
                >关于</g-link
              >
            </li>
            <li class="nav-item">
              <g-link class="nav-link px-lg-3 py-3 py-lg-4" to="/post/1"
                >文章</g-link
              >
            </li>
            <li class="nav-item">
              <g-link class="nav-link px-lg-3 py-3 py-lg-4" to="/contect"
                >联系我们</g-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- 默认插槽 -->
    <slot/>
     <!-- Footer-->
    <footer class="border-top">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <div class="small text-center text-muted fst-italic">
              Copyright &copy; Your Website 2022
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow:true,
      screenWidth:""
    }
  },
  mounted() {
     window.onresize = () => {
        return (() => {
            window.screenWidth = document.body.clientWidth
            this.screenWidth = window.screenWidth
            // console.log(window.screenWidth);
            if(window.screenWidth>974){
              this.isShow = true
            }else{
              this.isShow = false
            }
        })()
    }
  },
  methods: {
    checkShow(){
      this.isShow = !this.isShow
    }
  },
}
</script>

<style>
.no{
  display: none;
}
</style>

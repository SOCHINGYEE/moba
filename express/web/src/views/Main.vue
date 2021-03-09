<template>
    <div>
        <div class="topbar bg-black py-2 text-white px-3 d-flex ai-center">
            <img src="../../public/images/logo.png" height="30">
            <div class="px-3 flex-1">
                <div class="text-white">王者荣耀</div>
                <div class="text-grey-dark fs-xxs">团队成就更多</div>
            </div>
            <button class="bg-primary btn">立即下载</button>
        </div>
         
        <!-- 导航栏 -->
        <div class="bg-primary pt-3 pb-2"> 
            <div class="nav nav-inverse pb-1 jc-around"> 
                <div class="nav-item">
                    <router-link tag="div" to="/">游戏资料</router-link>
                </div>
                <div class="nav-item">
                    <router-link tag="div" to="/">攻略中心</router-link>
                </div>
                <div class="nav-item">
                    <router-link tag="div" to="/">赛事中心</router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  
  
}
</script>


<style lang="scss">
    .topbar {
        position: sticky;
        top:0;
        z-index: 999;
    }
</style>
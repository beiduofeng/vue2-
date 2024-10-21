<template>
    <div>
        <div class="head">

            <span>
                <router-link to="/home">首页</router-link>
            </span>
            <span>
                <router-link to="/login">登录页</router-link>
            </span>
            <span>
                <router-link to="/search">搜索页</router-link>
            </span>
            <span class="stuTitle">
                学生成绩管理系统
            </span>
            <span style="float: right;"> <router-link to="/login">我的</router-link></span>
        </div>

    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
    name: "AppHeader",

}
</script>
<style scoped>
.head {
    width: 100%;
    height: 80px;
    background-color: #fff;
    box-shadow: 0px 5px 3px 0px #eaecef;

}

span {
    margin: 30px;
    float: left;
}

.stuTitle {
    font-size: 40px;
    margin-top: 12px;
    margin-left: 239px;
    /* margin-left: 50%; */
    /* margin-right: -300px; */
}
</style>
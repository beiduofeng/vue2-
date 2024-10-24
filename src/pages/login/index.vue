<template>
    <div class="login-page-container">
        <div class="title">
            <h1>学生成绩管理系统</h1>
        </div>
        <div class="login-form">
            <el-form :model="loginForm" status-icon ref="loginForm" label-width="100px">
                <el-form-item label="工号/学号" prop="no" required>
                    <el-input v-model.number="loginForm.no"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" required>
                    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { post } from '@/request'
export default {
    name: "login",

    data() {
        return {
            loginForm: {
                password: '',
                no: ''
            },
        };
    },

    methods: {
        submitForm() {
            this.$refs['loginForm'].validate((valid) => {
                if (valid) {
                    this.login(this.loginForm.no, this.loginForm.password);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm() {
            this.$refs['loginForm'].resetFields();
        },

        // 省略其他部分，只写了 login 函数
        login(no, password) {
            if (no && password) {
                post('/login', { no, password }).then((res) => {
                    const realResponse = res.data;
                    if (realResponse.data) {
                        // 使用 element-ui 的 message 组件提示用户是否登录成功
                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        });
                        // 使用 vue-router 提供的方法跳转，方便一些
                        // 参考 https://v3.router.vuejs.org/zh/guide/essentials/navigation.html
                        setTimeout(() => {
                            this.$router.push({ path: '/home' });
                        }, 100);
                        // 或者直接使用浏览器的 bom api，修改 location 对象的 hash 并重新加载页面
                        // 更推荐使用第一种 vue-router 的写法，更简洁且具体实现更好。
                        // setTimeout(() => {
                        //   window.location.hash = 'home';
                        //   window.location.reload();
                        // }, 100);
                    } else {
                        this.$message({
                            message: realResponse.msg,
                            type: 'error'
                        });
                    }
                });
            }
        }
    }
}
</script>
<style scoped>
/* flex 布局实现子元素的垂直居中对齐 */
.login-page-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 75vh;
    flex-direction: column;
}

.title {
    width: 400px;
    text-align: center;
}

.login-form {
    width: 400px;
}
</style>
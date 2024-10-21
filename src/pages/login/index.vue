<template>
    <div class="login-page-container">
        <div class="title">
            <h1>学生成绩管理系统</h1>
        </div>
        <div class="login-form">
            <el-form :model="loginForm" status-icon ref="loginForm" label-width="100px">
                <el-form-item label="工号/学号" prop="id" required>
                    <el-input v-model.number="loginForm.id"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass" required>
                    <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                    <el-button @click="resetForm('loginForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

export default {
    name: "LoginPage",
    data() {
        return {
            loginForm: {
                pass: '',
                id: ''
            },
        };
    },

    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const params = {
                        id: this.loginForm.id,
                        pass: this.loginForm.pass
                    }
                    console.log('data is', params)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
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
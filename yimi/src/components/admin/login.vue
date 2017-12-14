<template>
    <div>
        <div class="bg"></div>
        <div class="container">
            <div class="line bouncein">
                <div class="xs6 xm4 xs3-move xm4-move">
                    <div style="height:150px;"></div>
                    <div class="media media-y margin-big-bottom">考试管理系统</div>
                    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-form">
                        <el-form-item label="用户名" prop="name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="密  码" prop="pass">
                            <el-input v-model="form.pass" type="password" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" prop="code">
                            <div>
                                <el-input type="text" v-model="form.code" class="width-half"></el-input>
                                <img :src="src" alt="点击刷新" @click="src='/home/core/code.php?t='+Math.random()" class="vertical-middle">
                            </div>
                        </el-form-item>
                        <el-form-item label="角色" prop="type">
                            <el-radio-group v-model="form.type">
                                <el-radio label="admin">管理员</el-radio>
                                <el-radio label="teacher">教师</el-radio>
                                <el-radio label="student">学生</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('form')">立即登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                src: "/home/core/code.php",
                form: {
                    code: '',
                    name: '',
                    pass: '',
                    type: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    pass: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    type: [
                        { required: true, message: '身份类型', trigger: 'change' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('/home/checklogin.php', this.form).then(res=>{
                            if(res.body == 1){
                                this.$message({
                                    message: '恭喜你，登陆成功',
                                    type: 'success'
                                });
                                if(this.form.type === 'admin'){
                                    this.$router.push('admin');
                                }else if(this.form.type === 'teacher'){
                                    this.$router.push('teacher');
                                }else if(this.form.type === 'student'){
                                    this.$router.push('student');
                                }
                            }else if(res.body == 2){
                                this.$message({
                                    message: '密码错误',
                                    type: 'warning'
                                });
                            }else if(res.body == 3){
                                this.$message({
                                    message: '用户名不存在',
                                    type: 'warning'
                                });
                            }else if(res.body == 4){
                                this.$message({
                                    message: '验证码不正确',
                                    type: 'warning'
                                });
                            }else{
                                this.$message({
                                    message: '登录错误',
                                    type: 'warning'
                                });
                            }
                        });
                    } else {
                        this.$message({
                            message: '请输入登录信息',
                            type: 'warning'
                        });
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style>
    @import url(../../assets/css/pintuer.css);
    @import url(../../assets/css/admin.css);
    .width-half{
        width: 50% !important;
    }
    .vertical-middle{
        vertical-align: middle;
    }
</style>
<template>
    <div class="upload-file">
        <el-upload
            class="upload-demo"
            drag
            action="http://chstpa.chstpa.com/upload/downloadUp"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">支持上传Excel、Word等多种格式文件...</div>
        </el-upload>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='scss'>
    .upload-file {
        //margin-top: 2em;
         margin-top: 17px;
    }
</style>

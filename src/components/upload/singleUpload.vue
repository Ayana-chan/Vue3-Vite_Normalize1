<template>
  <div>
    <el-upload
      ref="upload"
      action="http://gulimall-ayana.oss-cn-beijing.aliyuncs.com"
      :data="dataObj"
      list-type="picture"
      :multiple="false"
      :limit="1"
      :file-list="fileList"
      :on-remove="handleRemove"
      :on-exceed="handleExceed"
      :before-upload="beforeUpload"
      :on-success="handleUploadSuccess"
      :on-error="handleError"
      :on-preview="handlePreview"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过10MB
      </div>
    </el-upload>

  </div>
</template>
<script setup>
import { policy } from './policy';
import { getUUID } from '@/utils';
import { reactive } from 'vue';
import { genFileId } from 'element-plus';

const name = 'singleUpload';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const upload = ref();

let fileList = reactive([]);

let dataObj = {
  policy: '',
  signature: '',
  key: '',
  OSSAccessKeyId: '',
  dir: '',
  host: '',
  // callback:'',
};

function handleError() {
  console.log('handleError: dataobj', dataObj);
  ElMessage.error('上传图片失败！');
}
function emitInput(val) {
  emit('update:modelValue', val);
}
function handleRemove(file, fileList) {
  emitInput('');
}
function handleExceed(files) {
  //新加的文件会顶替上一个文件
  upload.value.clearFiles();
  const file = files[0];
  file.uid = genFileId();
  upload.value.handleStart(file);
  //上传
  upload.value.submit();
}
function handlePreview(file) {
  dialogVisible = true;
}
function beforeUpload(file) {
  return new Promise((resolve, reject) => {
    policy()
      .then((response) => {
        console.log('响应的数据', response);
        dataObj.policy = response.data.policy;
        dataObj.signature = response.data.signature;
        dataObj.OSSAccessKeyId = response.data.accessId;
        dataObj.key = response.data.dir + getUUID() + '_${filename}';
        dataObj.dir = response.data.dir;
        dataObj.host = response.data.host;
        console.log('响应的数据222。。。', dataObj);
        resolve(true);
      })
      .catch((err) => {
        reject(false);
      });
  });
}
function handleUploadSuccess(res, file) {
  console.log('上传成功...');
  ElMessage.success('上传图片成功！');
  fileList.pop();
  fileList.push({
    name: file.name,
    url: dataObj.host + '/' + dataObj.key.replace('${filename}', file.name),
  });
  emitInput(fileList[0].url);
  console.log('fileList', fileList);
}
</script>
<style></style>

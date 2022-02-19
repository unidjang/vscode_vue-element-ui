<template>
  <div>
    <fm-generate-form :data="jsonData" :remote="remoteFuncs" :value="editData" ref="generateForm">
      
        <template slot="blank_1645271519000_36034" slot-scope="">
          <!-- 自定义区域 -->
          <!-- use v-model="scope.model.blank_1645271519000_36034" to bind data -->
        </template>
    
    </fm-generate-form>
    <el-button type="primary" @click="handleSubmit">提交</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        jsonData: {"list":[{"type":"textarea","icon":"icon-diy-com-textarea","options":{"width":"100%","defaultValue":"多福多寿","required":false,"disabled":false,"pattern":"","placeholder":"","remoteFunc":"func_1645271461000_43747"},"name":"多行文本","key":"1645271461000_43747","model":"textarea_1645271461000_43747","rules":[]},{"type":"checkbox","icon":"icon-check-box","options":{"inline":false,"defaultValue":[],"showLabel":false,"options":[{"value":"Option 1"},{"value":"Option 2"},{"value":"Option 3"}],"required":false,"width":"","remote":false,"remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1645271472000_88669","disabled":false},"name":"多选框组","key":"1645271472000_88669","model":"checkbox_1645271472000_88669","rules":[]},{"type":"number","icon":"icon-number","options":{"width":"","required":false,"defaultValue":0,"min":0,"max":0,"step":1,"disabled":false,"controlsPosition":"","remoteFunc":"func_1645271512000_79244"},"name":"计数器","key":"1645271512000_79244","model":"number_1645271512000_79244","rules":[]},{"type":"grid","icon":"icon-grid-","columns":[{"span":12,"list":[{"type":"blank","icon":"icon-zidingyishuju","options":{"defaultType":"String","remoteFunc":"func_1645271519000_36034"},"name":"自定义区域","key":"1645271519000_36034","model":"blank_1645271519000_36034","rules":[]}]},{"span":12,"list":[{"type":"checkbox","icon":"icon-check-box","options":{"inline":false,"defaultValue":[],"showLabel":false,"options":[{"value":"Option 1"},{"value":"Option 2"},{"value":"Option 3"}],"required":false,"width":"","remote":false,"remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1645271522000_51728","disabled":false},"name":"多选框组","key":"1645271522000_51728","model":"checkbox_1645271522000_51728","rules":[]}]}],"options":{"gutter":0,"justify":"start","align":"top","remoteFunc":"func_1645271516000_36701"},"name":"栅格布局","key":"1645271516000_36701","model":"grid_1645271516000_36701","rules":[]}],"config":{"labelWidth":100,"labelPosition":"right","size":"small"}},
        editData: {},
        remoteFuncs: {
          
        }
      }
    },
    methods: {
      handleSubmit () {
        this.$refs.generateForm.getData().then(data => {
          // data check success
          // data - form data
        }).catch(e => {
          // data check failed
        })
      }
    }
  }
</script>
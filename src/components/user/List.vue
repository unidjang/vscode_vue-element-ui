<template>
  <div>
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="编号" width="180">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <!-- 增加一列数据 -->
      <el-table-column label="生日" prop="bir"></el-table-column>
      <!-- 只需要两个属性 -->
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入姓名关键字搜索"
          />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button type="success" size="mini">添加</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      tableData: [
        {
          id: 1,
          bir: "2016-05-02",
          name: "程序员鱼皮",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
        },
        {
          id: 2,
          bir: "2016-05-02",
          name: "罗斯",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
        },
        {
          id: 3,
          bir: "2016-05-02",
          name: "李宏毅",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
        },
        {
          id: 4,
          bir: "2016-05-02",
          name: "稚晖君",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
<style scoped>
</style>
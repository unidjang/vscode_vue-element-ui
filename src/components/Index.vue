<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="img in imgs" :key="img" style="">
        <el-image
          style="height: 600px"
          :src="img"
          fit="fill"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
    <a href="#/test">点我访问test</a>
  </div>
</template>

<script>
import img1 from "../assets/IndexImgs/1.jpg";
import img2 from "../assets/IndexImgs/2.jpg";
import img3 from "../assets/IndexImgs/3.jpg";
import img4 from "../assets/IndexImgs/4.jpg";

export default {
  name: "VueBasicIndex",
  data() {
    return {
      activeIndex: "/index",
      imgs: [
        img1,
        img2,
        img3,
        img4,
      ],
    };
  },
  methods: {},
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
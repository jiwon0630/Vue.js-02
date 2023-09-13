<template>
    <!-- <div class="box">Box</div> -->
    <div class="box" v-bind:class="['box', color]" v-bind:style="{ width: width + 'px', height: height + 'px'}"></div>
</template>

<script>
export default {
    props: {
        color: { type: String, default: '' }
    },
    data() {
        return {
            width : 50, 
            height : 50
        };
    }
};

</script>

<style scoped>
.box {
  border: 1px solid #000;
  /* background: rgb(133, 133, 224); */
  margin-top: 10px;
  flex : 1;
}
.blue {
  background: #009bff;
}
.purple {
  background: #8f46ff;
}
.green {
  background: #00bcac;
}

</style>
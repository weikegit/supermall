<template>
    <div class="recommend">
        <div v-for="item in recommends" :key="item.id">
          <a href="">
            <img src="item.src" alt="">
            <div>{{item.title}}</div>
          </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style>

</style>

<template>
    <div class="cartcontrol">
      <transition name="slide-fade">
        <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click="decreaseCart"></div>
      </transition>
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click.stop="addCart"></div>
    </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart () {
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
      },
      decreaseCart () {
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size 0
    .cart-decrease
      display inline-block
      padding 6px  // 使点击范围变大
      line-height 24px
      font-size 24px
      color rgb(0, 160, 220)
      &.slide-fade-enter-active
        transition: all .3s;
      &.slide-fade-leave-active
        transition: all .3s;
      &.slide-fade-enter, &.slide-fade-leave-to
        transform: translateX(10px);
        opacity: 0;
    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147,153, 159)
    .cart-add
      display inline-block
      line-height 24px
      padding 6px
      font-size 24px
      color rgb(0, 160, 220)
</style>

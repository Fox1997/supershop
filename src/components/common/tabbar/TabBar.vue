!<template>
    <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: "TabBar"
}
</script>

<style>
 #tab-bar {
    display: flex;
    background-color: #f5f5f5;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid rgba(100,100,100,0.1);
    box-shadow: 0px -1px 1px rgba(150,150,150,0.1);
  }
</style>
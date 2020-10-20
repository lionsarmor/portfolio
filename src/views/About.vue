<template>
   <div id="app" class="flex bg-gray-900 text-white min-h-screen">
    <sidebar-navigation />
    <div class="w-full">
      <transition name="page" mode="out-in">
        
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      background: require('@/assets/captain_marvel_background.jpg')
    }
  }
}
</script>


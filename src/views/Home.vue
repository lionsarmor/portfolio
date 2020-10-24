<template>
<div class="container mx-auto">
    <div class="my-8">
        <vue-glide :perView="1" :bullet="true" class="mb-12">
            <vue-glide-slide>
                <router-link to="/about">
                    <img src="@/assets/slide1.jpg" alt="mandalorian" class="rounded" />
                </router-link>
            </vue-glide-slide>
            <vue-glide-slide>
                <router-link to="/about">
                    <img src="@/assets/slide2.jpg" alt="mandalorian" class="rounded" />
                </router-link>
            </vue-glide-slide>
            <vue-glide-slide>
                <router-link to="/about">
                    <img src="@/assets/slide3.jpg" alt="mandalorian" class="rounded" />
                </router-link>
            </vue-glide-slide>
            <template slot="control">
                <button data-glide-dir="<" class="absolute w-8 h-8 rounded-full bg-gray-500" style="top: calc(50% - 16px); left: 10px">
                    <svg width="18" height="18" viewBox="0 0 24 24" style="margin-left: 6px">
                        <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
                    </svg>
                </button>
                <button data-glide-dir=">" class="absolute w-8 h-8 rounded-full bg-gray-500" style="top: calc(50% - 16px); right: 10px">
                    <svg width="18" height="18" viewBox="0 0 24 24" style="margin-left: 6px">
                        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                    </svg>
                </button>
            </template>
        </vue-glide>
        <div class="recommended px-6 mb-12">
            <h3 class="text-gray-500 mb-1">Project Catagories</h3>
            <vue-glide :perView="4" :gap="20" :peek="{ before: 0, after: 70 }" :breakpoints="{
            1024: {
              perView: 3
            },
            800: {
              perView: 2,
            },
            576: {
              perView: 1,
              peek: {
                before: 0,
                after: 0,
              }
            }
          }">
                <vue-glide-slide>
                    <router-link to="/Vue-page" href="#" class="bg-gray-800 h-32 flex justify-center items-center shadow-custom border border-gray-700 rounded-lg p-4 hover:bg-gray-900">
                        <img src="@/assets/Vue.svg" class="svg" width="70%" alt="VUE">
                    </router-link>
                </vue-glide-slide>
                <vue-glide-slide>
                    <router-link to="/Svelte-page" href="#" class="bg-gray-800 h-32 flex justify-center items-center shadow-custom border border-gray-700 rounded-lg p-4 hover:bg-gray-900">
                        <img src="@/assets/Svelte.png" class="svg" width="30%" alt="VUE">
                    </router-link>
                </vue-glide-slide>
                <vue-glide-slide>
                    <router-link to="/Electron-page" href="#" class="bg-gray-800 h-32 flex justify-center items-center shadow-custom border border-gray-700 rounded-lg p-4 hover:bg-gray-900">
                        <img class="svg" src="@/assets/electron.svg" width="40%" alt="ELECTRON">
                    </router-link>
                </vue-glide-slide>
                <vue-glide-slide>
                    <router-link to="/Api-page" href="#" class="bg-gray-800 h-32 flex justify-center items-center shadow-custom border border-gray-700 rounded-lg p-4 hover:bg-gray-900">
                        <img class="svg" src="@/assets/api.svg" width="40%" alt="API">
                    </router-link>
                </vue-glide-slide>
                <vue-glide-slide>
                    <router-link to="/Three-dee" href="#" class="bg-gray-800 h-32 flex justify-center items-center shadow-custom border border-gray-700 rounded-lg p-4 hover:bg-gray-900">
                        <img class="svg" src="@/assets/3d.svg" width="40%" alt="3D">
                    </router-link>
                </vue-glide-slide>
                <vue-glide-slide>
                    <router-link to="/Electronics-page" href="#" class="bg-gray-800 h-32 flex justify-center items-center shadow-custom border border-gray-700 rounded-lg p-4 hover:bg-gray-900">
                        <img class="svg" src="@/assets/cpu.svg" width="40%" alt="ELECTRONICS">
                    </router-link>
                </vue-glide-slide>
                <vue-glide-slide>
                    <router-link to="/Shopping-page" href="#" class="bg-gray-800 h-32 flex justify-center items-center shadow-custom border border-gray-700 rounded-lg p-4 hover:bg-gray-900">
                        <img class="svg" src="@/assets/carts.svg" width="40%" alt="STORE">
                    </router-link>
                </vue-glide-slide>
                <template slot="control">
                    <button data-glide-dir="<" class="absolute w-8 h-8 rounded-full bg-gray-500" style="top:calc(50% - 16px); left: 10px">
                        <svg width="18" height="18" viewBox="0 0 24 24" style="margin-left: 6px">
                            <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
                        </svg>
                    </button>
                    <button data-glide-dir=">" class="absolute w-8 h-8 rounded-full bg-gray-500" style="top:calc(50% - 16px); right: 10px">
                        <svg width="18" height="18" viewBox="0 0 24 24" style="margin-left: 6px">
                            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                        </svg>
                    </button>
                </template>
            </vue-glide>
        </div> <!-- end recommended -->
        <div class="continue-watching px-6 mb-12">
            <h3 class="text-gray-500 mb-1">Featured Projects</h3>
            <vue-glide :perView="4" :gap="70" :peek="{ before: 0, after: 70 }" :breakpoints="{
            1024: {
              perView: 3
            },
            800: {
              perView: 2,
            },
            576: {
              perView: 1,
              peek: {
                before: 0,
                after: 0,
              }
            }
          }">
                <vue-glide-slide>
                    <a type="link" href="https://www.rockrepairanddesign.com/"><img src="@/assets/1.png" alt="Rock Repair and Design"></a>
                </vue-glide-slide>
                <vue-glide-slide>
                    <a type="link" href="https://www.stonkselite.com/"><img src="@/assets/2.png" alt="Rock Repair and Design"></a>
                </vue-glide-slide>
                <template slot="control">
                    <button data-glide-dir="<" class="absolute w-8 h-8 rounded-full bg-gray-500" style="top:calc(50% - 16px); left: 10px">
                        <svg width="18" height="18" viewBox="0 0 24 24" style="margin-left: 6px">
                            <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
                        </svg>
                    </button>
                    <button data-glide-dir=">" class="absolute w-8 h-8 rounded-full bg-gray-500" style="top:calc(50% - 16px); right: 10px">
                        <svg width="18" height="18" viewBox="0 0 24 24" style="margin-left: 6px">
                            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                        </svg>
                    </button>
                </template>
            </vue-glide>
        </div> <!-- end continue-watching -->
    </div>
</div>
</template>

<script>
export default {
    name: 'home',
}
</script>

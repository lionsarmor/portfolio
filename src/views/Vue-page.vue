<template>
<div class="container mx-auto">
    <div class="my-8">
        <div class="continue-watching px-6 mb-12">
            <h1 class="text-gray-500 mb-1">VUE PROJECTS</h1>
            <vue-glide :perView="2" :gap="20" :peek="{ before: 0, after: 70 }" :breakpoints="{
            1024: {
              perView: 2
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
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <a href="https://rockrepairanddesign.com"><img class="w-full" src="@/assets/1.png" alt="Rock Repair and Design"></a>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Rock Repair And Design</div>
                            <p class="text-gray-700 text-base">
                                This is a business website that advertises software and electronic design services.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <a href="https://github.com/lionsarmor/rockrepairanddesign"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</span></a>
                        </div>
                    </div>
                </vue-glide-slide>
                <vue-glide-slide>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <a href="https://www.stonkselite.com/"><img class="w-full" src="@/assets/2.png" alt="Rock Repair and Design"></a>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Stonks Elite</div>
                            <p class="text-gray-700 text-base">
                                This web app helps users invest on Robinhood using world famous investment tequniques.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <a href="https://github.com/lionsarmor/Stonks-Frontend"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</span></a>
                        </div>
                    </div>
                </vue-glide-slide>
            </vue-glide>
        </div> <!-- end continue-watching -->
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

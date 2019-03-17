import Vue from "vue";
import Inject from 'vue-speedy/conf/inject'
import pages from 'vue-speedy/src/pages'
Vue.use(Inject, {
    site: {
        title: 'Speedy Demo',
        shortTitle: 'SD',
    },
    pages: pages,
    modules: [
        {
            path: 'test',
            module: {
                state: {
                    name: 'vue speedy template'
                },
                getters: {
                    nameGet: state => state.name
                }
            }
        }
    ]
})

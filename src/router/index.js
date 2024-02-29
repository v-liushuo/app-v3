import Vue from "vue";
import {createRouter, createWebHashHistory} from 'vue-router';
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";


const routes = [{
    path: '/',
    redirect: HelloWorld
}];

const globEager = import.meta.glob("@/components/*/*.vue");
console.log(globEager)
require.context("@/components", true, /\.vue$/)
    .keys()
    .map((item) => {
        let path = item.slice(1).replace(".vue", "");
        routes.push({
            path,
            name: path.slice(1),
            component: () => import(`@/components${item.slice(1)}`),
        });
    });

console.log(routes)
const router = createRouter({
    history: createWebHashHistory,
    routes: routes
});


export default router
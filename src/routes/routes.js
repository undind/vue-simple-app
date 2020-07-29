export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/signin',
        name: 'signin',
        component: () => import('@/views/SignIn.vue')
    },
    {
        path: '/post',
        name: 'post',
        component: () => import('@/views/AddEditPost.vue')
    },
    {
        path: '/post-view',
        name: 'view',
        component: () => import('@/views/ViewPost.vue')
    },
    {
        path: '*',
        redirect: '/'
    }
];

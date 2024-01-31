import { defineConfig } from 'vitepress'
console.log('hellosfsfsfsfs')

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'My Awesome Project',
    description: 'A VitePress Site',
    base: '/learn',
    srcDir: './docs',

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: 'local',
        },
        nav: [
            { text: '首页', link: '/' },
            { text: 'typescript', activeMatch: '/typescript', link: '/typescript/index' },
            { text: 'vue', activeMatch: '/vue', link: '/vue/index' },
            { text: 'c++', activeMatch: '/c\\+\\+', link: '/c++/index' },
            { text: 'java', activeMatch: '/java', link: '/java/index' },
            { text: 'php', activeMatch: '/php', link: '/php/index' },
            { text: 'golang', activeMatch: '/golang', link: '/golang/index' },
            { text: '物联网', activeMatch: '/物联网', link: '/物联网/index' },
        ],
        sidebar: {
            '/typescript': [
                {
                    text: 'Guide',
                    collapsed: true,
                    items: [
                        { text: '开始', link: '/typescript/index' },
                        { text: 'test', link: '/typescript/test' },
                    ],
                },
            ],
            '/vue': [
                {
                    text: 'Guide',
                },
            ],
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/nbqcode' }],
    },
})

// component link
Vue.component('link-component', {
    template:
    `<div id="link-component">
        <div class="avatar-container">
        <div class="border-avatar">
            <img id="avatar" class="avatar" :src="avatar" alt="avatar">
        </div>
        </div>
        <div class="link-component" v-for="social in socials">
            <div class="link-component__title">
                <a :href="social.url" target="_blank" id="social-url"> {{ social.name }} <i :class="social.icon + ' social-icon'"></i> </a>
            </div>
            <div class="link-component__content">
                <div class="link-component__content__item">
                </div>
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {
            avatar: '/assets/images/avatar/avatar.jpg',
            socials: [
                {
                    title: 'facebook',
                    name: 'Nguyễn Quang Bảo',
                    url: 'https://www.facebook.com/quangbaorp',
                    icon: 'fab fa-facebook-f'
                },
                {
                    title: 'twitter',
                    name: 'Nguyễn Quang Bảo',
                    url: 'https://www.twitter.com/',
                    icon: 'fab fa-twitter'
                },
                {
                    title: 'instagram',
                    name: 'Nguyễn Quang Bảo',
                    url: 'https://www.instagram.com/',
                    icon: 'fab fa-instagram'
                },
                {
                    title: 'github',
                    name: 'Nguyễn Quang Bảo',
                    url: 'https://www.github.com/nquangbaort',
                    icon: 'fab fa-github'
                },
                {
                    title: 'linkedin',
                    name: 'Nguyễn Quang Bảo',
                    url: 'https://www.linkedin.com/',
                    icon: 'fab fa-linkedin-in'
                },

            ]
        }
    }
})
export default {
  async asyncData({ $content, app, error, params}) {
    const defaultLocale = app.i18n.locale;
    const blogs = await $content(`${defaultLocale}/blog`, { deep: true }) 


      .sortBy('createdAt', 'asc')
 
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })




    return {
      blogs: blogs.map(blog => ({
        ...blog,
        path: blog.path.replace(`/${defaultLocale}`, ''),
      })),
      /* data_loaded : true, */
    }
  },

/*   methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return new Date(date).toLocaleDateString('ar', options)
    }
  } */
}



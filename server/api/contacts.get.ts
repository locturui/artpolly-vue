export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const externalApi = config.externalApiUrl
  
  if (externalApi) {
    try {
      const data = await $fetch(`${externalApi}/contacts`)
      return data
    } catch (error) {
      console.error('Error fetching from external API:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch contacts'
      })
    }
  }
  
  // Mock data fallback
  return {
    Phone: '+7 (XXX) XXX-XX-XX',
    Email: 'info@artpolly.studio',
    Address: 'г. Москва, ул. Примерная, д. 1',
    WHours: 'Пн-Пт: 10:00-20:00, Сб-Вс: 11:00-18:00'
  }
})


export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const externalApi = config.externalApiUrl
  
  if (externalApi) {
    try {
      const data = await $fetch(`${externalApi}/event`)
      return data
    } catch (error) {
      console.error('Error fetching from external API:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch events'
      })
    }
  }
  
  // Mock data fallback
  return [
    {
      ID: 1,
      Title: 'Открытый мастер-класс',
      Description: 'Присоединяйтесь к нам на бесплатный мастер-класс по керамике',
      ImageURL: '/image/photo_pot.jpeg'
    },
    {
      ID: 2,
      Title: 'Выставка работ студентов',
      Description: 'Познакомьтесь с работами наших талантливых учеников',
      ImageURL: '/image/photo_about.jpeg'
    },
    {
      ID: 3,
      Title: 'Летний интенсив',
      Description: 'Недельный интенсивный курс по живописи',
      ImageURL: '/image/main_background_photo.jpeg'
    }
  ]
})


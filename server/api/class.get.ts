export default defineEventHandler(async (event) => {
  // You can either return mock data or proxy to external backend
  const config = useRuntimeConfig()
  const externalApi = config.externalApiUrl
  
  if (externalApi) {
    // Proxy to external backend
    try {
      const data = await $fetch(`${externalApi}/class`)
      return data
    } catch (error) {
      console.error('Error fetching from external API:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch classes'
      })
    }
  }
  
  // Mock data fallback
  return [
    {
      ID: 1,
      Title: 'Керамика',
      Description: 'Классы по керамике для всех уровней подготовки',
      Classes: [
        {
          ID: 1,
          Title: 'Керамика для начинающих',
          Price: 1500,
          Description: 'Изучите основы работы с глиной и создайте свои первые изделия'
        },
        {
          ID: 2,
          Title: 'Продвинутая керамика',
          Price: 2000,
          Description: 'Освойте сложные техники и создавайте профессиональные работы'
        }
      ]
    },
    {
      ID: 2,
      Title: 'Живопись',
      Description: 'Курсы живописи разных направлений',
      Classes: [
        {
          ID: 3,
          Title: 'Акварельная живопись',
          Price: 1800,
          Description: 'Научитесь создавать прозрачные и воздушные акварельные картины'
        },
        {
          ID: 4,
          Title: 'Масляная живопись',
          Price: 2500,
          Description: 'Освойте технику масляной живописи от основ до мастерства'
        }
      ]
    }
  ]
})


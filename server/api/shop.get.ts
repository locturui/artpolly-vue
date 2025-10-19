export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const externalApi = config.externalApiUrl
  
  if (externalApi) {
    try {
      const data = await $fetch(`${externalApi}/shop`)
      return data
    } catch (error) {
      console.error('Error fetching from external API:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch shop items'
      })
    }
  }
  
  return {
    categories: [
      {
        id: 1,
        name: 'Керамика',
        items: [
          {
            id: 1,
            name: 'Керамическая ваза',
            price: 2500,
            description: 'Ручная работа, уникальный дизайн',
            imageUrl: '/image/photo_pot.jpeg'
          },
          {
            id: 2,
            name: 'Набор тарелок',
            price: 3500,
            description: 'Комплект из 6 тарелок',
            imageUrl: '/image/photo_pot.jpeg'
          },
          {
            id: 3,
            name: 'Кружка',
            price: 800,
            description: 'Идеальна для утреннего кофе',
            imageUrl: '/image/photo_pot.jpeg'
          },
          {
            id: 7,
            name: 'Чайный сервиз',
            price: 5200,
            description: 'Полный набор для чаепития',
            imageUrl: '/image/photo_pot.jpeg'
          },
          {
            id: 8,
            name: 'Салатник',
            price: 2100,
            description: 'Большой керамический салатник',
            imageUrl: '/image/photo_pot.jpeg'
          }
        ]
      },
      {
        id: 2,
        name: 'Декор',
        items: [
          {
            id: 4,
            name: 'Панно на стену',
            price: 4000,
            description: 'Керамическое панно ручной работы',
            imageUrl: '/image/photo_about.jpeg'
          },
          {
            id: 5,
            name: 'Подсвечник',
            price: 1200,
            description: 'Стильный керамический подсвечник',
            imageUrl: '/image/photo_about.jpeg'
          },
          {
            id: 6,
            name: 'Статуэтка',
            price: 1800,
            description: 'Декоративная фигурка',
            imageUrl: '/image/photo_about.jpeg'
          },
          {
            id: 9,
            name: 'Настенная композиция',
            price: 3600,
            description: 'Абстрактная керамическая композиция',
            imageUrl: '/image/photo_about.jpeg'
          }
        ]
      }
    ]
  }
})


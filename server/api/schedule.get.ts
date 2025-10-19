export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const externalApi = config.externalApiUrl
  
  if (externalApi) {
    try {
      const data = await $fetch(`${externalApi}/schedule`)
      return data
    } catch (error) {
      console.error('Error fetching from external API:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch schedule'
      })
    }
  }
  
  // Mock data fallback
  return {
    weekSchedule: [
      {
        day: 'Понедельник',
        events: [
          { time: '10:00', description: 'Керамика для начинающих' },
          { time: '14:00', description: 'Акварельная живопись' },
          { time: '18:00', description: 'Свободное творчество' }
        ]
      },
      {
        day: 'Вторник',
        events: [
          { time: '11:00', description: 'Масляная живопись' },
          { time: '15:00', description: 'Продвинутая керамика' },
          { time: '19:00', description: 'Детская группа' }
        ]
      },
      {
        day: 'Среда',
        events: [
          { time: '10:00', description: 'Керамика для начинающих' },
          { time: '14:00', description: 'Акрил' },
          { time: '18:00', description: 'Мастер-класс' }
        ]
      },
      {
        day: 'Четверг',
        events: [
          { time: '11:00', description: 'Живопись маслом' },
          { time: '15:00', description: 'Скульптура' },
          { time: '19:00', description: 'Открытая студия' }
        ]
      },
      {
        day: 'Пятница',
        events: [
          { time: '10:00', description: 'Керамика' },
          { time: '14:00', description: 'Акварель' },
          { time: '18:00', description: 'Вечерний класс' }
        ]
      },
      {
        day: 'Суббота',
        events: [
          { time: '11:00', description: 'Семейные мастер-классы' },
          { time: '14:00', description: 'Интенсив по керамике' },
          { time: '17:00', description: 'Живопись' }
        ]
      },
      {
        day: 'Воскресенье',
        events: [
          { time: '12:00', description: 'Воскресная студия' },
          { time: '15:00', description: 'Детское творчество' }
        ]
      }
    ]
  }
})


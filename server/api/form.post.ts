export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const externalApi = config.externalApiUrl
    
    // Read the request body
    const body = await readBody(event)
    
    // Validate the form data
    if (!body.email || !body.name || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }
    
    if (externalApi) {
      try {
        const data = await $fetch(`${externalApi}/form`, {
          method: 'POST',
          body: body
        })
        return data
      } catch (error) {
        console.error('Error submitting to external API:', error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Failed to submit form'
        })
      }
    }
    
    // Mock success response
    // In a real app, you would:
    // - Save to database
    // - Send email notification
    // - Integrate with CRM
    console.log('Form submission received:', body)
    
    return {
      success: true,
      message: 'Форма успешно отправлена'
    }
  })
  
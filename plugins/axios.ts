// plugins/axios.ts
import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  const instance = axios.create({
    baseURL: String(config.public.API_BASE_URL)
  })

  instance.interceptors.request.use(
    (config) => {
      const token = useCookie('token').value
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  return {
    provide: {
      axios: instance
    }
  }
})

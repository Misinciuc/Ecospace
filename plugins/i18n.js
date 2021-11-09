// При использовании модульной системы (например, через vue-cli)
// нужно импортировать Vue и VueI18n и вызвать Vue.use(VueI18n).
//
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Готовые переводы сообщений локализаций
const messages = {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    ru: {
      message: {
        hello: 'Привет мир'
      }
    }
  }
  
  // Создание экземпляра VueI18n с настройками
 export const i18n = new VueI18n({
    locale: 'ru', // установка локализации по умолчанию
    messages // установка сообщений локализаций
  })
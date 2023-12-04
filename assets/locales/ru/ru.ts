import {en} from '../en/en';

export const ru: typeof en = {
  loginScreen: {
    email: 'Емейл',
    password: 'Пароль',
    button: 'Авторизация',
    validation: {
      required: '{{field}} не может быть пустым',
      mail: 'Пожалуйста введите валидный емейл',
      max: 'Ваш код должен быть меньше {{max}}',
      min: 'Ваш код должен быть минимум {{min}}',
    },
    forgot: 'Забыли?',
  },
  mainStack: {
    shop: {
      header: 'Лучший магазин',
      tapBar: 'Магазин',
    },
    profile: {
      header: 'Аккаунт',
      tapBar: 'Профиль',
    },
    total: {
      header: 'Всего',
      tapBar: 'Корзина',
    },
  },
  shopScreen: {
    noData: 'магазин пуст',
  },
  profileScreen: {
    edit: 'Сменить',
    logout: 'Выйти',
    userDataTitles: {
      name: 'Имя пользователя',
      mail: 'Емейл',
      password: 'Пароль',
    },
  },
  cartScreen: {
    noData: 'корзина пуста',
    button: 'Оформить заказ',
  },
  modalScreen: {
    change: 'Сменить',
  },
};

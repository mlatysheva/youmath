export const hardCodedpopularTasks = [
  {
    title: 'Высшая математика для гуманитариев',
    question_text: 'М.А. Евдокимов, С.Г. Афанасьева, 2005',
    description: 
    // eslint-disable-next-line max-len
    'Типовой расчет по высшей математике М.А. Евдокимова, С.Г. Афанасьева. 10 задач для студентов 1 и 2 курса гуманитарного факультета 1. Определители 2 и 3 порядка.Основные свойства, минор и алгебраическое дополнение.Система линейных уравнений. Метод Крамера...',
    options: {
      backgroundColor: 'white',
      textColor: 'var(--bg-blue-color)',
      nums:  [1, 2, 10],
    },
    backgroundColor: 'var(--bg-blue-color)',
    textColor: 'white',
  },
  {
    title: 'Задания для подготовки к изучению курса высшей математики',
    question_text: 'С.Г. Корнфельд, 2013',
    // eslint-disable-next-line max-len
    description: 'Для помощи студентов 1 курса в обощении и систематизации школьного курса. Задания для подготовки к изучению курса высшей математики по методичке С.Г. Корнфельд, 2013. Формулы сокращения, дробные , тригонометрические, многочленов, иррациональных , алгебраических, логарифмических... ',
    options: {
      backgroundColor: 'var(--bg-green-color)',
      textColor: 'white',
      nums:  [1, 10, 2],
    },
    backgroundColor: 'var(--bg-light-green-color)',
    textColor: 'var(--bg-green-color)',
  },
  {
    title: 'Дифференциальные уравнения. Ряды. Теория вероятностей',
    question_text: 'С.Г. Корнфельд, Н.Н. Попов, 2014',
    // eslint-disable-next-line max-len
    description: 'Для студентов 1 курса. Практикум. Решение типового расчета. Дифференциальные уравнения. Ряды. Теория вероятностей по методичке авторов С.Г. Корнфельд, Н.Н. Попов, 2014, уравнения первого порядка, общий интеграл, сходимость, числовые ряды, вероятность, случайная величина, распределение.',
    options: {
      backgroundColor: 'white',
      textColor: 'var(--bg-green-color)',
      nums:  [1, 2, 10],
    },
    backgroundColor: 'var(--bg-green-color)',
    textColor: 'white',
  }
]

export const styleOptions = [
  { backgroundColor: 'var(--bg-blue-color)',
    textColor: 'white',
  },
  {
    backgroundColor: 'var(--bg-light-green-color)',
    textColor: 'var(--bg-green-color)',
  },
  {
    backgroundColor: 'var(--bg-green-color)',
    textColor: 'white',
  }
]
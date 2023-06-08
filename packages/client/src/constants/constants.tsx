import * as FaIcons from 'react-icons/fa'
import * as GrIcons from 'react-icons/gr'
import * as AiIcons from 'react-icons/ai'
export const ROUTES = {
  CATS: { ID: 1, PATH: '/', TITLE: 'КОТЯТА', ICON: <FaIcons.FaCat /> },
  ClUBS: {
    ID: 2,
    PATH: '/club',
    TITLE: 'КЛУБЫ',
    ICON: <FaIcons.FaHamburger />,
  },
  SHOWS: {
    ID: 3,
    PATH: '/shows',
    TITLE: 'ВЫСТАВКИ',
    ICON: <FaIcons.FaFortAwesome />,
  },
  ARTICLES: {
    ID: 4,
    PATH: '/articles',
    TITLE: 'СТАТЬИ',
    ICON: <FaIcons.FaReceipt />,
  },
  FOOD: { ID: 5, PATH: '/food', TITLE: 'КОРМ', ICON: <FaIcons.FaHamburger /> },
}

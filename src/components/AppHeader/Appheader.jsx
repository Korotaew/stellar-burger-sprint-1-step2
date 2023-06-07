import { Logo, BurgerIcon, ListIcon, ProfileIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './Header.module.css'

const Appheader = () => {
    // ( ͡° ͜ʖ ͡°)
  return (
    <div className={headerStyles.Header}>
        <div className={headerStyles.buttonsContainer}>
            <button className={`${headerStyles.button} ${headerStyles.buttonK}`}>
                <BurgerIcon type="primary"/>
                <p className={headerStyles.text}>Конструктор</p>
            </button>
            <button className={`${headerStyles.button} ${headerStyles.buttonL}`}>
                <ListIcon type="secondary"/>
                <p className={headerStyles.text}>Лента заказов</p>
            </button>
            <button className={`${headerStyles.buttonP} ${headerStyles.buttonLK}`}>
                <ProfileIcon type="secondary"/>
                <p className={headerStyles.text}>личный кабинет</p>
            </button>
        </div> 
        <div className={headerStyles.logo}>
            <Logo/>
        </div>
    </div>
  )
}

export default Appheader
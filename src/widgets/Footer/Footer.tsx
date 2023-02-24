import classes from "./Footer.module.scss";
import logo from "../../shared/assets/images/logo.svg";

export const Footer = () => {
  return (
    <>
      <footer className={classes.booter}>
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <img src={logo} className={classes.logo} alt="Company logo" />
            <a className={classes.link} href="#">
              Связаться с нами
            </a>
          </div>
          <p className={classes.description}>
            Примеры решения задач и типовых расчетов по высшей математике для
            студентов 1 и 2 курса Самарского Государственного Технического
            Университета.
          </p>
          <p className={classes.year}>2023</p>
          <div className={`${classes.wrapper} ${classes.bottom}`}>
            <p className={classes.copyright}>
              Все материалы представленные на сайте исключительно с целью
              ознакомления читателями и не преследуют коммерческих целей или
              нарушение авторских прав.
            </p>
            <a className={classes.copyright} href="#">
              Яндекс Метрики
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

import Styles from "../css/LearnCSSModule2.module.css"

export const LearnCSSModule2 = () => {
  return (
    <>
      <p className={`${Styles.txt_size} ${Styles.txt_color}`}>This is CSS Module 2</p>
    </>
  )
}
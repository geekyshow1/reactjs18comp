import Styles from "../css/LearnCSSModule1.module.css"
export const LearnCSSModule1 = () => {
  return (
    <>
      <p className={`${Styles.txt_size} ${Styles.txt_color}`}>This is CSS Module 1</p>
    </>
  )
}

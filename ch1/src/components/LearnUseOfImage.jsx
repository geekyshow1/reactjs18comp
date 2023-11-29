import Pic from '/images/pic.png'
import SupaPic from '../assets/images/supapic.png'
export const LearnUseOfImage = () => {
  return (
    <>
      <h1>Images</h1>
      <img src={Pic} alt="" width="400px" />
      <br />
      <img src={SupaPic} alt="" width="300px" />
    </>
  )
}

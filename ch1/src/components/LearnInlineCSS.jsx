export const LearnInlineCSS = () => {
  const btnStyle = {
    color: 'blue',
    backgroundColor: 'orange'
  }
  return (
    <>
      <p style={{ 'fontSize': '20px', 'color': 'red' }}>Hello React + Vite + GeekyShows</p>
      <button style={btnStyle}>Button 1</button>
      <button style={{ ...btnStyle, ...{ 'fontSize': '20px' } }}>Button 2</button>
    </>
  )
}

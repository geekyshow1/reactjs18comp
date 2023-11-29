import { CounterApp } from "./components/CounterApp"
import { LearnCSSModule1 } from "./components/LearnCSSModule1"
import { LearnCSSModule2 } from "./components/LearnCSSModule2"
import { LearnComponent } from "./components/LearnComponent"
import { LearnConditionalRender } from "./components/LearnConditionalRender"
import { LearnCustomHook } from "./components/LearnCustomHook"
import { LearnEvent } from "./components/LearnEvent"
import { LearnExternalCSS1 } from "./components/LearnExternalCSS1"
import { LearnExternalCSS2 } from "./components/LearnExternalCSS2"
import { LearnForm } from "./components/LearnForm"
import { LearnInlineCSS } from "./components/LearnInlineCSS"
import { LearnJSX } from "./components/LearnJSX"
import { LearnLiftingStateUp } from "./components/LearnLiftingStateUp"
import { LearnMap } from "./components/LearnMap"
import { LearnProps } from "./components/LearnProps"
import { LearnState } from "./components/LearnState"
import { LearnUseCallback } from "./components/LearnUseCallback"
import { LearnUseEffect } from "./components/LearnUseEffect"
import { LearnUseMemo } from "./components/LearnUseMemo"
import { LearnUseOfImage } from "./components/LearnUseOfImage"
import { LearnUsingENV } from "./components/LearnUsingENV"

function App() {
  let roll = 101
  const getData = (data) => {
    console.log(data);
  }
  return (
    <>
      <LearnComponent />
      {/* <LearnJSX /> */}
      {/* <LearnProps name="Rajesh Kumar" roll={roll} /> */}
      {/* <LearnEvent /> */}
      {/* <LearnLiftingStateUp myClick={getData} /> */}
      {/* <LearnState /> */}
      {/* <CounterApp /> */}
      {/* <LearnUseEffect /> */}
      {/* <LearnUseMemo /> */}
      {/* <LearnUseCallback /> */}
      {/* <LearnCustomHook /> */}
      {/* <LearnConditionalRender /> */}
      {/* <LearnMap /> */}
      {/* <LearnInlineCSS /> */}
      {/* <LearnExternalCSS1 /> */}
      {/* <LearnExternalCSS2 /> */}
      {/* <LearnCSSModule1 /> */}
      {/* <LearnCSSModule2 /> */}
      {/* <LearnUseOfImage /> */}
      {/* <LearnForm /> */}
      {/* <LearnUsingENV /> */}

    </>
  )
}

export default App

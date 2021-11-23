import React, { useState } from "react"
import Card from "./Card"

export default function Students() {
  const [senior, setSenior] = useState(false)

  function seniors() {
    return (
      <>
        <h2>2020 students</h2>
        <Card />
      </>
    )
  }

  function juniors() {
    return (
      <>
        <h2>2021 students</h2>
        <Card />
      </>
    )
  }
  return (
    <div>
      Students
      <button onClick={() => setSenior(true)}>2020</button>
          <button onClick={() => setSenior(false)}>2021</button>
          {senior ? seniors() : juniors()}
    </div>
  )
}

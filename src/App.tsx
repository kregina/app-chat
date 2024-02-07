function App() {

  return (
    <div>
      <h1>App light</h1>
      <ul className="light">
        <li>Text</li>
        <li className="box primary">primary</li>
        <li className="box secondary">secondary</li>
        <li className="box tertiary">tertiary</li>
        <li className="box success">success</li>
        <li className="box danger">danger</li>
      </ul>

      <h1>App dark</h1>
      <ul className="dark">
        <li>Text</li>
        <li className="box primary">primary</li>
        <li className="box secondary">secondary</li>
        <li className="box tertiary">tertiary</li>
        <li className="box success">success</li>
        <li className="box danger">danger</li>
      </ul>
    </div>
  )
}

export default App

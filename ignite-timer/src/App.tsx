import { Button } from "./components/button/Button";

export function App() {
  return(
    <div className="App">
      <Button variant={'primary'}></Button>
      <Button variant={'secondary'}></Button>
      <Button variant={'danger'}></Button>
      <Button variant={'success'}></Button>
    </div>
  )
}
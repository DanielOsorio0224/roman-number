import coliseum from '../assets/coliseum.png'
export default function Header() {
  return (
    <header className="p-5">
      <div className="constainer w-100 d-flex justify-content-around">
        <img src={coliseum} alt="coliseum" />
        <h1 className='title'>Números romanos</h1>
        <img src={coliseum} alt="coliseum" />
      </div>
    </header>
  )
}

type NavProps = {
 setPage: (page: string) => void
}

const Navbar = ({ setPage }: NavProps): JSX.Element => {
 return (
  <nav>
   <button onClick={() => setPage('planets')}>Planets</button>
   <button onClick={() => setPage('people')}>People</button>
  </nav>
 )
}

export default Navbar
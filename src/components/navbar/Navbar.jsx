import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
      <a href="/" className="logo">Travel<span>Nest</span></a>
        <div className="navItems">
          <button className="navButton">Đăng ký</button>
          <button className="navButton">Đăng nhập</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
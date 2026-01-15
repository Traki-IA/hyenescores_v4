import { Link, useLocation } from 'react-router-dom'

const BottomNav = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', icon: '📊', label: 'Classement' },
    { path: '/match', icon: '⚽', label: 'Match' },
    { path: '/palmares', icon: '🏆', label: 'Palmarès' },
    { path: '/pantheon', icon: '👑', label: 'Panthéon' },
  ]

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
        >
          <span className="icon">{item.icon}</span>
          <span className="label">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}

export default BottomNav

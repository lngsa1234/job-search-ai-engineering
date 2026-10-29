export default function Header({ sections, active, onSelect }) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="brand">
          <span className="brand__mark">AI</span>
          <span className="brand__name">Job Search HQ</span>
        </div>
        <nav className="nav">
          {sections.map((s) => (
            <button
              key={s.id}
              className={
                'nav__item' + (s.id === active ? ' nav__item--active' : '')
              }
              onClick={() => onSelect(s.id)}
            >
              {s.label}
              {!s.available && <span className="nav__badge">soon</span>}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

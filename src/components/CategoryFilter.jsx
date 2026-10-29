export default function CategoryFilter({ categories, active, counts, onSelect }) {
  const items = [{ id: 'all', label: 'All' }, ...categories]

  return (
    <div className="filter" role="tablist" aria-label="Question categories">
      {items.map((c) => (
        <button
          key={c.id}
          role="tab"
          aria-selected={c.id === active}
          className={'chip' + (c.id === active ? ' chip--active' : '')}
          onClick={() => onSelect(c.id)}
        >
          {c.label}
          <span className="chip__count">{counts[c.id] ?? 0}</span>
        </button>
      ))}
    </div>
  )
}

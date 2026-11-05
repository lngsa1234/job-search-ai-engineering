import { useMemo, useState } from 'react'
import data from '../data/interviewQuestions.json'
import CategoryFilter from './CategoryFilter.jsx'
import QuestionCard from './QuestionCard.jsx'

const ROLES = [
  { id: 'engineering', label: 'AI Engineer' },
  { id: 'pm', label: 'AI Product Manager' },
]

const roleOf = (item) => item.role || 'engineering'

export default function InterviewQuestions() {
  const [activeRole, setActiveRole] = useState('engineering')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeCompany, setActiveCompany] = useState('all')

  const roleCategories = useMemo(
    () => data.categories.filter((c) => roleOf(c) === activeRole),
    [activeRole]
  )

  const roleQuestions = useMemo(
    () => data.questions.filter((q) => roleOf(q) === activeRole),
    [activeRole]
  )

  // Only offer companies that have questions for this role
  const roleCompanies = useMemo(() => {
    const used = new Set(roleQuestions.flatMap((q) => q.companies || []))
    return data.companies.filter((c) => used.has(c.id))
  }, [roleQuestions])

  const selectRole = (role) => {
    setActiveRole(role)
    setActiveCategory('all')
    setActiveCompany('all')
  }

  const companyLabel = useMemo(() => {
    const m = new Map()
    for (const c of data.companies) m.set(c.id, c.label)
    return (id) => m.get(id) ?? id
  }, [])

  const categoryLabel = useMemo(() => {
    const m = new Map()
    for (const c of data.categories) m.set(c.id, c.label)
    return (id) => m.get(id) ?? id
  }, [])

  // Questions filtered by the active company only (used for category counts)
  const byCompany = useMemo(() => {
    if (activeCompany === 'all') return roleQuestions
    return roleQuestions.filter((q) => (q.companies || []).includes(activeCompany))
  }, [roleQuestions, activeCompany])

  const counts = useMemo(() => {
    const map = { all: byCompany.length }
    for (const c of roleCategories) {
      map[c.id] = byCompany.filter((q) => q.category === c.id).length
    }
    return map
  }, [byCompany, roleCategories])

  const visibleQuestions = useMemo(() => {
    if (activeCategory === 'all') return byCompany
    return byCompany.filter((q) => q.category === activeCategory)
  }, [byCompany, activeCategory])

  return (
    <section className="section">
      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar__heading sidebar__heading--first">Role</div>
          <div className="role-toggle" role="radiogroup" aria-label="Role">
            {ROLES.map((r) => (
              <button
                key={r.id}
                role="radio"
                aria-checked={r.id === activeRole}
                className={'role-toggle__btn' + (r.id === activeRole ? ' role-toggle__btn--active' : '')}
                onClick={() => selectRole(r.id)}
              >
                {r.label}
              </button>
            ))}
          </div>

          {roleCompanies.length > 0 && (
          <label className="company-select">
            <span>Company</span>
            <select
              value={activeCompany}
              onChange={(e) => setActiveCompany(e.target.value)}
            >
              <option value="all">All companies</option>
              {roleCompanies.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
          )}

          <div className="sidebar__heading">Categories</div>
          <CategoryFilter
            categories={roleCategories}
            active={activeCategory}
            counts={counts}
            onSelect={setActiveCategory}
          />
        </aside>

        <div className="content">
          <div className="content__bar">
            <span className="result-count">
              {visibleQuestions.length} question
              {visibleQuestions.length === 1 ? '' : 's'}
            </span>
          </div>

          <div className="question-list">
            {visibleQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                categoryLabel={categoryLabel(q.category)}
                companyLabel={companyLabel}
              />
            ))}
            {visibleQuestions.length === 0 && (
              <p className="empty">No questions match this filter.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

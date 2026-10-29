import { useMemo, useState } from 'react'
import data from '../data/interviewQuestions.json'
import CategoryFilter from './CategoryFilter.jsx'
import QuestionCard from './QuestionCard.jsx'

export default function InterviewQuestions() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeCompany, setActiveCompany] = useState('all')

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
    if (activeCompany === 'all') return data.questions
    return data.questions.filter((q) => (q.companies || []).includes(activeCompany))
  }, [activeCompany])

  const counts = useMemo(() => {
    const map = { all: byCompany.length }
    for (const c of data.categories) {
      map[c.id] = byCompany.filter((q) => q.category === c.id).length
    }
    return map
  }, [byCompany])

  const visibleQuestions = useMemo(() => {
    if (activeCategory === 'all') return byCompany
    return byCompany.filter((q) => q.category === activeCategory)
  }, [byCompany, activeCategory])

  return (
    <section className="section">
      <div className="layout">
        <aside className="sidebar">
          <label className="company-select">
            <span>Company</span>
            <select
              value={activeCompany}
              onChange={(e) => setActiveCompany(e.target.value)}
            >
              <option value="all">All companies</option>
              {data.companies.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>

          <div className="sidebar__heading">Categories</div>
          <CategoryFilter
            categories={data.categories}
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

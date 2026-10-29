import { useState } from 'react'

export default function QuestionCard({ question, categoryLabel, companyLabel }) {
  const [open, setOpen] = useState(false)
  const companies = question.companies || []

  return (
    <article className={'card' + (open ? ' card--open' : '')}>
      <button
        className="card__head"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="card__meta">
          <span className="tag">{categoryLabel}</span>
          {question.difficulty && (
            <span className={'tag tag--diff tag--' + question.difficulty}>
              {question.difficulty}
            </span>
          )}
        </div>
        <h3 className="card__question">{question.question}</h3>
        {companies.length > 0 && (
          <div className="card__companies">
            {companies.map((id) => (
              <span key={id} className="tag tag--company">
                {companyLabel(id)}
              </span>
            ))}
          </div>
        )}
        <span className="card__toggle" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>

      {open && (
        <div className="card__answer">
          {question.answer ? (
            <p className="card__prose">{question.answer}</p>
          ) : (
            <p className="card__prose card__prose--muted">
              Answer coming soon.
            </p>
          )}
        </div>
      )}
    </article>
  )
}

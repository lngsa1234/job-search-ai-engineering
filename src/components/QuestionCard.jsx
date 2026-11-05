import { useState } from 'react'

export default function QuestionCard({ question, categoryLabel, companyLabel }) {
  const [open, setOpen] = useState(false)
  const companies = question.companies || []
  const sources = [
    ...(question.source ? [question.source] : []),
    ...(question.sources || []),
  ]

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
          {question.hint && (
            <p className="card__hint">
              <strong>What they're looking for:</strong> {question.hint}
            </p>
          )}
          {question.answer ? (
            <p className="card__prose">{question.answer}</p>
          ) : (
            !question.outline?.length && (
              <p className="card__prose card__prose--muted">
                {question.hint
                  ? 'No model answer yet. Use the hint above to frame your own.'
                  : 'Answer coming soon.'}
              </p>
            )
          )}
          {question.outline?.length > 0 && (
            <div className="card__outline">
              <strong>Answer outline</strong>
              <ol>
                {question.outline.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          )}
          {question.learnMore?.length > 0 && (
            <p className="card__links">
              <strong>Learn more:</strong>{' '}
              {question.learnMore.map((l, i) => (
                <span key={l.url}>
                  {i > 0 && ' · '}
                  <a href={l.url} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                </span>
              ))}
            </p>
          )}
          {sources.length > 0 && (
            <p className="card__source">
              {sources.length === 1 ? 'Source: ' : 'Sources: '}
              {sources.map((src, i) => (
                <span key={src.url}>
                  {i > 0 && ' · '}
                  <a href={src.url} target="_blank" rel="noreferrer">
                    {src.label}
                  </a>
                </span>
              ))}
            </p>
          )}
        </div>
      )}
    </article>
  )
}

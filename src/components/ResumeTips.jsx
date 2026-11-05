import { useState } from 'react'
import { RESUMES, CHECKLIST, RESUME_SOURCES, resumeToText } from '../data/resumeSamples.js'

function ResumeSection({ section }) {
  return (
    <div className="paper__section">
      <h3 className="paper__heading">{section.heading}</h3>
      {section.paragraphs?.map((p) => (
        <p key={p} className="paper__text">{p}</p>
      ))}
      {section.skills && (
        <dl className="paper__skills">
          {section.skills.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      )}
      {section.bullets && (
        <ul className="paper__bullets">
          {section.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      )}
    </div>
  )
}

function Job({ job }) {
  return (
    <div className="paper__job">
      <div className="paper__jobhead">
        <span>
          <strong>{job.title}</strong> · {job.org}
        </span>
        <span className="paper__dates">
          {job.place} · {job.dates}
        </span>
      </div>
      <ul className="paper__bullets">
        {job.bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </div>
  )
}

function Row({ children, why, first, last, showNotes }) {
  return (
    <div className={'resume-row' + (showNotes ? '' : ' resume-row--nonotes')}>
      <div className={'paper' + (first ? ' paper--first' : '') + (last ? ' paper--last' : '')}>
        {children}
      </div>
      {showNotes && (
        <aside className="why">
          <span className="why__label">Why this works</span>
          <p>{why}</p>
        </aside>
      )}
    </div>
  )
}

export default function ResumeTips() {
  const [activeId, setActiveId] = useState(RESUMES[0].id)
  const [showNotes, setShowNotes] = useState(true)
  const [copied, setCopied] = useState(false)
  const sample = RESUMES.find((r) => r.id === activeId)
  const r = sample.resume

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(resumeToText(r))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const rows = []
  r.sections.forEach((s) => {
    if (s.jobs) {
      s.jobs.forEach((j, i) =>
        rows.push({
          key: s.heading + j.title + j.dates,
          why: j.why,
          node: (
            <div className="paper__section">
              {i === 0 && <h3 className="paper__heading">{s.heading}</h3>}
              <Job job={j} />
            </div>
          ),
        })
      )
    } else {
      rows.push({ key: s.heading, why: s.why, node: <ResumeSection section={s} /> })
    }
  })

  return (
    <section className="section">
      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar__heading sidebar__heading--first">Sample resume</div>
          <div className="role-toggle" role="radiogroup" aria-label="Sample resume role">
            {RESUMES.map((s) => (
              <button
                key={s.id}
                role="radio"
                aria-checked={s.id === activeId}
                className={'role-toggle__btn' + (s.id === activeId ? ' role-toggle__btn--active' : '')}
                onClick={() => setActiveId(s.id)}
              >
                {s.role}
              </button>
            ))}
          </div>

          <div className="sidebar__heading">View</div>
          <label className="toggle-line">
            <input
              type="checkbox"
              checked={showNotes}
              onChange={(e) => setShowNotes(e.target.checked)}
            />
            Show “why this works” notes
          </label>
          <button className="btn" onClick={copy}>
            {copied ? 'Copied' : 'Copy as plain-text template'}
          </button>

          <div className="sidebar__heading">Every resume</div>
          <ul className="checklist">
            {CHECKLIST.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </aside>

        <div className="content">
          <div className="resume-intro">
            <h1>{sample.role} resume</h1>
            <p className="resume-intro__tagline">{sample.tagline}</p>
            <div className="resume-intro__look">
              <span className="sidebar__heading">What reviewers look for</span>
              <ul>
                {sample.lookFor.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
          </div>

          <div className="resume">
            <Row first showNotes={showNotes} why={r.headerWhy || 'Contact details on one line, with GitHub and a portfolio. Reviewers for technical roles do click through to the code.'}>
              <div className="paper__header">
                <div className="paper__name">{r.name}</div>
                <div className="paper__title">{r.title}</div>
                <div className="paper__contact">{r.contact.join('  ·  ')}</div>
              </div>
            </Row>
            {rows.map((row, i) => (
              <Row key={row.key} why={row.why} last={i === rows.length - 1} showNotes={showNotes}>
                {row.node}
              </Row>
            ))}
          </div>
          <p className="resume-disclaimer">
            Sample candidate, companies and numbers are fictional. Use them for structure and level of detail, and fill in your own real work.
          </p>

          <div className="mistakes">
            <h2>Common mistakes on {sample.role} resumes</h2>
            <ul>
              {sample.mistakes.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>

          <p className="card__source">
            Guidance drawn from:{' '}
            {RESUME_SOURCES.map((s, i) => (
              <span key={s.url}>
                {i > 0 && ' · '}
                <a href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}

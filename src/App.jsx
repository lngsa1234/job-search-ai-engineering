import { useState } from 'react'
import Header from './components/Header.jsx'
import InterviewQuestions from './components/InterviewQuestions.jsx'
import ComingSoon from './components/ComingSoon.jsx'

const SECTIONS = [
  { id: 'interview', label: 'Interview Questions', available: true },
  { id: 'resume', label: 'Resume Tips', available: false },
  { id: 'companies', label: 'Companies', available: false },
  { id: 'applications', label: 'Application Tracker', available: false },
]

export default function App() {
  const [section, setSection] = useState('interview')

  return (
    <div className="app">
      <Header
        sections={SECTIONS}
        active={section}
        onSelect={setSection}
      />
      <main className="main">
        {section === 'interview' ? (
          <InterviewQuestions />
        ) : (
          <ComingSoon title={SECTIONS.find((s) => s.id === section)?.label} />
        )}
      </main>
      <footer className="footer">
        <p>Built for the AI engineering job hunt · interview prep &amp; more</p>
        <p>
          Some interview questions are sourced from{' '}
          <a
            href="https://github.com/pallavi-shekhar/ai-engineering-interview-questions-company-wise"
            target="_blank"
            rel="noreferrer"
          >
            Outcome School
          </a>
          .
        </p>
      </footer>
    </div>
  )
}

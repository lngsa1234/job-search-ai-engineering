// Sample resumes for the Resume Tips section.
// Candidates, companies and numbers are fictional; they model the level of
// specificity reviewers look for. Each section carries a "why" note.

export const RESUME_SOURCES = [
  {
    label: 'Aced (formerly Exponent): Forward Deployed Engineer resume guide',
    url: 'https://www.tryexponent.com/blog/forward-deployed-engineer-resume',
  },
  {
    label: 'Interview Kickstart: FDE skills employers ask for (job-posting analysis)',
    url: 'https://interviewkickstart.com/blogs/articles/forward-deployed-engineer-skills-job-posting-analysis',
  },
  {
    label: 'Gauntlet AI: What hiring managers actually look for in AI engineers',
    url: 'https://gauntletai.com/night-school/what-hiring-managers-actually-look-for-in-ai-engineers',
  },
  {
    label: 'AI Interview Atlas: role guides (FDE, applied AI engineer)',
    url: 'https://github.com/eiler2005/ai-interview-atlas',
  },
]

export const RESUMES = [
  {
    id: 'fde',
    role: 'Forward Deployed Engineer',
    tagline:
      'Half engineer, half customer owner. Reviewers want proof you ship production systems inside a customer’s environment and drive adoption, not just demos.',
    lookFor: [
      'Production code you owned and kept running, not prototypes',
      'Direct customer work: discovery, scoping, executive readouts',
      'Outcomes in the customer’s terms (time saved, contracts, adoption)',
      'One-off customer work turned into reusable product capability',
      'Evals and a clean handoff so the customer can operate it without you',
    ],
    resume: {
      name: 'Jordan Reyes',
      title: 'Forward Deployed Engineer',
      contact: [
        'San Francisco, CA',
        'jordan.reyes@email.com',
        'github.com/jreyes',
        'linkedin.com/in/jordanreyes',
      ],
      sections: [
        {
          heading: 'Summary',
          paragraphs: [
            'Forward deployed engineer with 6 years of production software experience, the last 3 embedded with enterprise customers. Took 9 LLM deployments from discovery to production handoff across insurance, logistics and healthcare; 4 became reusable product features.',
          ],
          why: 'In two lines it answers the four things an FDE screener checks first: years of real engineering, customer exposure, number of deployments taken all the way to production, and whether the work compounded into product.',
        },
        {
          heading: 'Skills',
          skills: [
            ['Languages', 'Python, TypeScript, SQL, Go (working)'],
            ['AI / LLM', 'Agents and tool use, RAG, structured outputs, eval harnesses, prompt caching'],
            ['Data & cloud', 'AWS (ECS, Lambda, Bedrock), Postgres, Snowflake, Kafka, Terraform'],
            ['Integration', 'REST, GraphQL, SAML/OIDC SSO, Salesforce, ServiceNow, SAP connectors'],
            ['Customer', 'Discovery workshops, pilot scoping, success criteria, executive readouts'],
          ],
          why: 'Grouped so a reviewer scans it in seconds. It leads with the terms FDE postings ask for most (Python, TypeScript, agents, AWS, LLMs) and adds integration and customer skills, which most engineer resumes leave out. Every item is backed by a bullet below.',
        },
        {
          heading: 'Experience',
          jobs: [
            {
              title: 'Forward Deployed Engineer',
              org: 'Fieldline AI · enterprise agent platform, Series C',
              place: 'San Francisco',
              dates: 'Mar 2023 – Present',
              bullets: [
                'Led the claims-intake deployment for a top-10 US property and casualty insurer: built a document-extraction agent over 40k claims a month (Python, Bedrock, Postgres) that cut adjuster triage from 22 to 6 minutes, with 94% field-level accuracy on a 600-claim eval set before go-live.',
                'Ran discovery with 14 stakeholders across claims, IT security and legal, and turned it into written success criteria the VP of Claims signed before build; the $180k pilot converted to a $1.4M annual contract.',
                'Built a ServiceNow and Salesforce integration layer reused by the next 3 customers, cutting deployment setup from 5 weeks to 8 days; it was merged into the core product as the Connectors feature.',
                'Designed the release gate for customer prompt changes (regression set plus an LLM judge validated against 300 human labels, κ = 0.81); it caught 2 regressions before they reached production.',
                'Owned on-call for 4 production deployments at 99.9% uptime over 12 months, then wrote runbooks and trained 2 customer platform teams to run the system on their own.',
              ],
              why: 'Each bullet follows action → what was built → for which customer → measurable result. Together they cover the full FDE arc: discovery, build, evals, commercial outcome, reuse and handoff. The reuse bullet is the strongest senior signal, because it shows customer work becoming product.',
            },
            {
              title: 'Software Engineer',
              org: 'Routewise · logistics SaaS, 120 people',
              place: 'Oakland',
              dates: 'Jun 2019 – Feb 2023',
              bullets: [
                'Built and owned the carrier-onboarding API (TypeScript, Postgres) processing 2.1M shipments a month, from design review through on-call.',
                'Volunteered as technical lead on 6 enterprise onboardings, wrote each customer’s EDI mappings, and turned the common cases into a self-serve mapping tool that cut support tickets 35%.',
                'Shipped an ETA-prediction model with the data team (gradient boosting, nightly Airflow batch) that reduced late-delivery escalations 18%.',
              ],
              why: 'This is the common path into FDE work: a product engineer who kept volunteering for customer-facing technical work. Calling that out makes the career move read as deliberate rather than a pivot.',
            },
          ],
        },
        {
          heading: 'Projects',
          bullets: [
            'pilotkit: open-source template for scoping and evaluating LLM pilots (success-criteria doc, eval harness, rollout checklist). 1.2k GitHub stars; used by 2 consultancies.',
          ],
          why: 'This is proof a reviewer can open and check. It also shows the candidate thinks about deployment as a repeatable process, which is exactly the FDE skill.',
        },
        {
          heading: 'Education',
          bullets: ['B.S. Computer Science, University of California, Davis, 2019'],
          why: 'Kept short and placed last. With 6 years of experience, the degree is a checkbox, not a selling point.',
        },
      ],
    },
    mistakes: [
      'Writing “we” bullets, so the reviewer can’t tell what you personally owned',
      'Calling a prototype or proof of concept a production system',
      'Burying customer work, or describing it only as “collaborated with stakeholders”',
      'Results with no number and no named customer or business outcome',
      'Only one-off customer fixes, with nothing that became reusable',
      'Listing tools you can’t defend in a technical deep dive',
    ],
  },
  {
    id: 'ai-engineer',
    role: 'AI Engineer',
    tagline:
      'Everyone can call a model now. Reviewers look for engineers who can prove a system works: evals, verification habits, and production results with cost and latency attached.',
    lookFor: [
      'LLM systems in production with real users and a baseline to compare against',
      'Evals that gate changes. This is the clearest differentiator.',
      'Cost and latency engineering, not just quality',
      'Safety and failure handling for tools that take actions',
      'Proof you can open: open source, deployed projects, write-ups',
    ],
    resume: {
      name: 'Sam Okafor',
      title: 'AI Engineer',
      contact: [
        'New York, NY · open to remote',
        'sam.okafor@email.com',
        'github.com/sokafor',
        'samokafor.dev',
      ],
      sections: [
        {
          heading: 'Summary',
          paragraphs: [
            'AI engineer with 5 years of backend experience and 2.5 years building LLM products in production. Owns systems end to end, from retrieval and agents to eval pipelines and cost and latency. Current assistant serves 300k monthly users and resolves 71% of conversations without a human.',
          ],
          why: 'It leads with backend depth, then LLM production time, then one headline metric. That tells the reviewer this is a software engineer who ships AI, not a prompt tinkerer.',
        },
        {
          heading: 'Skills',
          skills: [
            ['Languages', 'Python, TypeScript, SQL'],
            ['LLM systems', 'RAG (hybrid search, reranking), tool calling, structured outputs, LangGraph, MCP servers'],
            ['Evals & observability', 'Offline regression suites, LLM-as-judge calibration, pass^k, Langfuse, OpenTelemetry'],
            ['Infra', 'AWS, Kubernetes, vLLM, Redis, pgvector, GitHub Actions'],
            ['Models', 'OpenAI and Anthropic APIs, Llama fine-tuning (LoRA)'],
          ],
          why: 'Evals and observability get their own row because that is where hiring managers probe hardest. The list stays short: depth in a few tools you can defend beats a long list of logos.',
        },
        {
          heading: 'Experience',
          jobs: [
            {
              title: 'Senior AI Engineer',
              org: 'Ledgerly · consumer fintech, 2M users',
              place: 'New York',
              dates: 'Jan 2024 – Present',
              bullets: [
                'Built and own the in-app support assistant (RAG over 4,200 help and policy docs plus 9 account tools). It resolves 71% of conversations without a human, up from 38% with the previous intent-based bot, saving about $2.3M a year in support cost.',
                'Created the eval suite that gates every prompt, model and retrieval change: 1,100 labeled cases drawn from production failures, running in CI in 6 minutes. Releases with a regression fell from 1 in 4 to 1 in 20.',
                'Cut median latency from 4.1s to 1.6s and cost per conversation 58% by routing 70% of turns to a smaller model, caching the stable prompt prefix and streaming tool results.',
                'Designed the guardrails for money-moving tools (scoped permissions, user confirmation, PII redaction); passed an external red-team review with 0 critical findings.',
                'Migrated off a deprecated model in 3 weeks with no drop in resolution rate, comparing candidates on shadow traffic against the eval suite.',
              ],
              why: 'Every result is measured against a baseline (38% → 71%, 4.1s → 1.6s). The eval bullet shows the verification habit reviewers screen for. The cost, safety and migration bullets show the unglamorous work that separates production engineers from demo builders.',
            },
            {
              title: 'Software Engineer, Backend',
              org: 'Ledgerly',
              place: 'New York',
              dates: 'Jun 2021 – Dec 2023',
              bullets: [
                'Built the transaction-categorization service (Python, Kafka) handling 40M events a day at p99 under 80ms.',
                'Replaced rule-based merchant matching with an embedding model, raising match accuracy from 81% to 93% and retiring 1,400 hand-maintained rules.',
              ],
              why: 'Listing two titles at one company shows a promotion without saying so. The embedding bullet shows the move into AI happening on the job, grounded in real backend scale.',
            },
            {
              title: 'Software Engineer',
              org: 'Brightpath Health · healthtech',
              place: 'Remote',
              dates: 'Jul 2019 – May 2021',
              bullets: [
                'Built HIPAA-compliant appointment APIs (Python, Postgres) serving 600 clinics; owned on-call and incident reviews.',
              ],
              why: 'Older roles shrink to one line. Compliance and on-call ownership are still worth keeping because they show production discipline.',
            },
          ],
        },
        {
          heading: 'Open source & writing',
          bullets: [
            'evalgate: open-source CLI that runs LLM eval suites in CI and posts score diffs on pull requests. 2.4k stars, 40 contributors.',
            '“What 1,100 production failures taught us about RAG,” engineering blog post, 18k reads.',
          ],
          why: 'A repo and a write-up the reviewer can open are among the strongest signals for AI engineers. Both reinforce the eval story instead of adding unrelated side projects.',
        },
        {
          heading: 'Education',
          bullets: ['B.S. Computer Engineering, Georgia Institute of Technology, 2019'],
          why: 'One line. For applied AI roles, shipped systems outweigh coursework.',
        },
      ],
    },
    mistakes: [
      'A keyword wall of frameworks with no bullet showing you used them',
      'Projects with no evals, no metric and no iteration',
      'Demo-only work presented as production',
      'Quality numbers with no baseline (“95% accuracy” compared to what?)',
      'Ignoring cost, latency and failure handling',
      'Claiming depth in code an AI assistant mostly wrote. Expect to walk through it in the interview.',
    ],
  },
]

export const CHECKLIST = [
  'One page (two only with 8+ years), single column, no graphics or tables, so applicant-tracking systems parse it',
  'Every bullet: action verb, what you built or owned, context, measurable result',
  'Put a number on every outcome, ideally against a baseline',
  'Mirror the posting’s own terms in your skills and bullets, but only skills you can defend',
  'Link GitHub, a portfolio or a write-up. Reviewers do click.',
  'Tailor per company: data-heavy FDE roles stress decomposition and data engineering; AI labs stress production LLM systems',
]

export function resumeToText(r) {
  const lines = [r.name.toUpperCase(), r.title, r.contact.join(' | '), '']
  for (const s of r.sections) {
    lines.push(s.heading.toUpperCase())
    for (const p of s.paragraphs || []) lines.push(p)
    for (const [k, v] of s.skills || []) lines.push(`${k}: ${v}`)
    for (const j of s.jobs || []) {
      lines.push(`${j.title}, ${j.org} | ${j.place} | ${j.dates}`)
      for (const b of j.bullets) lines.push(`- ${b}`)
      lines.push('')
    }
    for (const b of s.bullets || []) lines.push(`- ${b}`)
    lines.push('')
  }
  return lines.join('\n').trim() + '\n'
}

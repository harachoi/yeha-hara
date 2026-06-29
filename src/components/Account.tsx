import { useState } from 'react'
import { weddingData } from '../data/wedding'

type Side = 'groom' | 'bride'
type AccountEntry = (typeof weddingData.groom.accounts)[number]

function PeopleIcon() {
  return (
    <svg className="account-toggle-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M14 18c.3-2 1.8-3.5 3.5-3.5S20.7 16 21 18" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg className="account-copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="account-copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12l5 5L19 7" />
    </svg>
  )
}

function AccountRow({ entry }: { entry: AccountEntry }) {
  const [copied, setCopied] = useState(false)

  const copyAccount = async () => {
    const text = `${entry.bank} ${entry.number} (${entry.holder})`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="account-row">
      <span className="account-row-label">
        {entry.role}
        <span className="account-row-name">{entry.holder}</span>
      </span>
      <div className="account-row-info">
        {entry.bank} {entry.number}
      </div>
      <button
        type="button"
        className={`account-row-copy ${copied ? 'is-copied' : ''}`}
        onClick={copyAccount}
        aria-label={copied ? '복사 완료' : '계좌번호 복사'}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  )
}

function AccountAccordion({ side }: { side: Side }) {
  const [open, setOpen] = useState(false)
  const person = weddingData[side]
  const title = side === 'groom' ? '신랑측에게' : '신부측에게'

  return (
    <div className={`account-accordion ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="account-accordion-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <PeopleIcon />
        <span className="account-accordion-title">{title}</span>
        <span className="account-accordion-chevron" aria-hidden="true">∨</span>
      </button>

      {open && (
        <div className="account-accordion-panel">
          {person.accounts.map((entry) => (
            <AccountRow key={`${entry.role}-${entry.holder}`} entry={entry} />
          ))}
        </div>
      )}
    </div>
  )
}

export function Account() {
  return (
    <section className="section account-section scroll-reveal">
      <p className="section-label">Account</p>
      <p className="account-desc">
        직접 축하의 마음을 전해주시기 어려운 분들을 위해<br />
        조심스러운 마음으로 계좌번호를 함께 안내드립니다.<br />
        넓은 마음으로 양해 부탁드립니다.
      </p>

      <div className="account-accordions">
        <AccountAccordion side="groom" />
        <AccountAccordion side="bride" />
      </div>
    </section>
  )
}

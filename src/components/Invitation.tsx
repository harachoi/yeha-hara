import { weddingData } from '../data/wedding'
import { FlowerIcon } from './FlowerIcon'

type ParentBlockProps = {
  father: string
  mother: string
  relationLabel: string
  role: string
  name: string
}

function ParentBlock({ father, mother, relationLabel, role, name }: ParentBlockProps) {
  return (
    <div className="parent-block">
      <p className="parent-line">
        <span className="parent-names">
          {father} · {mother}의 {relationLabel}
        </span>
      </p>
      <p className="parent-line parent-line--couple">
        <span className="parent-role">{role}</span>
        <span className="parent-couple-name">{name}</span>
      </p>
    </div>
  )
}

export function Invitation() {
  const { groom, bride } = weddingData

  return (
    <section className="section invitation">
      <div className="scroll-reveal invitation-content">
        <FlowerIcon className="invitation-flower scroll-reveal-item" />
        <div className="parents scroll-reveal-item">
          <ParentBlock
            father={groom.father}
            mother={groom.mother}
            relationLabel="아들"
            role="신랑"
            name={groom.name}
          />
          <div className="parent-divider" aria-hidden="true" />
          <ParentBlock
            father={bride.father}
            mother={bride.mother}
            relationLabel="딸"
            role="신부"
            name={bride.name}
          />
        </div>
      </div>
    </section>
  )
}

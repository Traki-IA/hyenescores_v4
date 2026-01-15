import BottomNav from '@/components/BottomNav'

interface TeamStats {
  pos: number
  name: string
  ldh: number | null
  fr: number | null
  es: number | null
  it: number | null
  en: number | null
  total: number
}

const teams: TeamStats[] = [
  { pos: 1, name: 'MILAN AC', ldh: 5, fr: 1, es: 2, it: 2, en: 2, total: 12 },
  { pos: 2, name: 'BIMBAM', ldh: null, fr: 2, es: 1, it: 2, en: 3, total: 8 },
  { pos: 3, name: 'STOCKY FC', ldh: 2, fr: 1, es: 1, it: 1, en: 2, total: 7 },
  { pos: 4, name: 'COMARDINHO', ldh: 1, fr: 1, es: 2, it: null, en: null, total: 4 },
  { pos: 5, name: 'DYNAMO KEV', ldh: null, fr: 2, es: 1, it: null, en: 1, total: 4 },
  { pos: 6, name: 'WARNAQUE', ldh: null, fr: 1, es: 1, it: null, en: null, total: 2 },
  { pos: 7, name: 'MAMBA TEAM', ldh: null, fr: null, es: null, it: 2, en: null, total: 2 },
  { pos: 8, name: 'TRAKNAR FC', ldh: null, fr: 1, es: null, it: null, en: null, total: 1 },
]

const getBadgeColor = (pos: number): string => {
  if (pos === 1) return '#FFB830'
  if (pos <= 3) return '#34d399'
  if (pos <= 7) return '#60a5fa'
  return '#fb923c'
}

const renderCell = (value: number | null) => {
  if (value === null) {
    return <span className="empty">–</span>
  }
  return value
}

const Pantheon = () => {
  return (
    <div className="ds-page">
      <div className="ds-page-title">
        <h1>PANTHÉON</h1>
      </div>

      <div className="ds-card">
        <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(150, 190, 200, 0.08)' }}>
          <span style={{ fontSize: '13px', color: 'rgba(224, 240, 245, 0.6)', fontWeight: 500 }}>
            Classement historique
          </span>
        </div>

        <table className="ds-table">
          <thead>
            <tr>
              <th style={{ width: '36px' }}>#</th>
              <th className="left">ÉQUIPE</th>
              <th style={{ width: '32px' }}>🏆</th>
              <th style={{ width: '32px' }}>🇫🇷</th>
              <th style={{ width: '32px' }}>🇪🇸</th>
              <th style={{ width: '32px' }}>🇮🇹</th>
              <th style={{ width: '32px' }}>🏴󠁧󠁢󠁥󠁮󠁧󠁿</th>
              <th style={{ width: '45px' }}>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.pos}>
                <td>
                  <span className="ds-badge" style={{ background: getBadgeColor(team.pos) }}>
                    {team.pos}
                  </span>
                </td>
                <td className="left">{team.name}</td>
                <td>{renderCell(team.ldh)}</td>
                <td>{renderCell(team.fr)}</td>
                <td>{renderCell(team.es)}</td>
                <td>{renderCell(team.it)}</td>
                <td>{renderCell(team.en)}</td>
                <td>
                  <span className="ds-pts">{team.total}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <BottomNav />
    </div>
  )
}

export default Pantheon

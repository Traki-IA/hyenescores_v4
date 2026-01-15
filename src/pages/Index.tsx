import BottomNav from '@/components/BottomNav'

const teams = [
  { pos: 1, name: 'Milan AC', pts: 95, v: 30, n: 5, d: 18, bp: 116, bc: 97, diff: 49 },
  { pos: 2, name: 'Stocky FC', pts: 86, v: 24, n: 14, d: 15, bp: 115, bc: 88, diff: 27 },
  { pos: 3, name: 'BimBam', pts: 84, v: 25, n: 9, d: 19, bp: 119, bc: 96, diff: 23 },
  { pos: 4, name: 'Dynamo Kev', pts: 82, v: 26, n: 4, d: 23, bp: 119, bc: 110, diff: 9 },
  { pos: 5, name: 'Traknar FC', pts: 74, v: 21, n: 11, d: 21, bp: 111, bc: 106, diff: 6 },
  { pos: 6, name: 'FC Grinta', pts: 74, v: 22, n: 8, d: 23, bp: 96, bc: 102, diff: -6 },
  { pos: 7, name: 'Comardinho', pts: 71, v: 20, n: 11, d: 22, bp: 94, bc: 107, diff: -13 },
  { pos: 8, name: 'Mamba Team', pts: 64, v: 18, n: 10, d: 25, bp: 96, bc: 110, diff: -14 },
  { pos: 9, name: 'Warnaque', pts: 61, v: 17, n: 10, d: 26, bp: 94, bc: 110, diff: -16 },
  { pos: 10, name: 'NopiGoal FC', pts: 61, v: 15, n: 12, d: 26, bp: 86, bc: 121, diff: -35 },
]

const getBadgeColor = (pos: number): string => {
  if (pos === 1) return '#FFB830'
  if (pos <= 3) return '#34d399'
  if (pos <= 7) return '#60a5fa'
  if (pos <= 9) return '#fb923c'
  return '#f87171'
}

const Index = () => {
  return (
    <div className="ds-page">
      <div className="ds-page-title">
        <h1>CLASSEMENT</h1>
      </div>

      <div className="ds-card">
        <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(150, 190, 200, 0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '13px', color: 'rgba(224, 240, 245, 0.6)', fontWeight: 500 }}>
              🏆 Ligue des Hyènes | Saison 9
            </span>
            <span style={{ fontSize: '13px', color: 'rgba(224, 240, 245, 0.6)', fontWeight: 500 }}>
              J.53/72 (74%)
            </span>
          </div>
        </div>

        <table className="ds-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}>#</th>
              <th className="left">ÉQUIPE</th>
              <th style={{ width: '45px' }}>PTS</th>
              <th style={{ width: '65px' }}>V-N-D</th>
              <th style={{ width: '55px' }}>BP-BC</th>
              <th style={{ width: '40px' }}>+/-</th>
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
                <td>
                  <span className="ds-pts">{team.pts}</span>
                </td>
                <td style={{ fontSize: '12px', opacity: 0.65 }}>
                  {team.v}-{team.n}-{team.d}
                </td>
                <td style={{ fontSize: '12px', opacity: 0.65 }}>
                  {team.bp}-{team.bc}
                </td>
                <td>
                  <span
                    style={{
                      color: team.diff >= 0 ? '#34d399' : '#f87171',
                      fontWeight: 700,
                      fontSize: '12px',
                    }}
                  >
                    {team.diff >= 0 ? '+' : ''}
                    {team.diff}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="ds-footer">
          <span className="label">Caviste</span>
          <span>Gunners</span>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default Index

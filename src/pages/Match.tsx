import BottomNav from '@/components/BottomNav'

const Match = () => {
  const matches = [
    { home: '', homeScore: '', awayScore: '', away: '' },
    { home: 'MILAN AC', homeScore: '3', awayScore: '1', away: 'STOCKY FC' },
    { home: '', homeScore: '', awayScore: '', away: '' },
    { home: '', homeScore: '', awayScore: '', away: '' },
    { home: '', homeScore: '', awayScore: '', away: '' },
  ]

  return (
    <div className="ds-page">
      <div className="ds-page-title">
        <h1>MATCH</h1>
      </div>

      <div className="ds-card">
        <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(150, 190, 200, 0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '13px', color: 'rgba(224, 240, 245, 0.6)', fontWeight: 500 }}>
              Saison 9
            </span>
            <span style={{ fontSize: '13px', color: 'rgba(224, 240, 245, 0.6)', fontWeight: 500 }}>
              Journée 1 (0/5)
            </span>
          </div>
        </div>

        <div style={{ padding: '12px' }}>
          <div className="match-filter-bar">
            <div className="match-filter-item">
              <span className="match-filter-icon">🇫🇷</span>
            </div>
            <div className="match-filter-item">
              <span className="match-filter-label">Saison 9</span>
            </div>
            <div className="match-filter-item">
              <span className="match-filter-label">J.1 (0/5)</span>
            </div>
            <div className="match-filter-item">
              <span className="match-filter-icon">📤</span>
              <span className="match-filter-label" style={{ fontSize: '9px' }}>
                Import
              </span>
            </div>
          </div>
        </div>

        <div>
          {matches.map((match, idx) => (
            <div key={idx} className="match-row">
              <div className={`team-select ${match.home ? 'filled' : ''}`}>
                {match.home || '—'}
              </div>
              <div className="score-box">
                <div className={`score-input ${match.homeScore ? 'filled' : ''}`}>
                  {match.homeScore || '-'}
                </div>
                <span className="score-vs">-</span>
                <div className={`score-input ${match.awayScore ? 'filled' : ''}`}>
                  {match.awayScore || '-'}
                </div>
              </div>
              <div className={`team-select ${match.away ? 'filled' : ''}`}>
                {match.away || '—'}
              </div>
            </div>
          ))}
        </div>

        <div className="ds-footer">
          <span className="label">Exempt</span>
          <span>Gunners</span>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default Match

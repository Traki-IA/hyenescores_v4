import { useState } from 'react'
import BottomNav from '@/components/BottomNav'

const championsData = [
  { season: '9', team: 'TRAKNAR FC', points: 127 },
  { season: '7', team: 'MILAN AC', points: 134 },
  { season: '6', team: 'BIMBAM', points: 125 },
  { season: '5', team: 'MILAN AC', points: 129 },
  { season: '4', team: 'MILAN AC', points: 132 },
  { season: '3', team: 'STOCKY FC', points: 121 },
  { season: '2', team: 'MILAN AC', points: 138 },
  { season: '1', team: 'MILAN AC', points: 136 },
]

const championships = [
  { id: 'ldh', icon: '🏆', name: 'Ligue des Hyènes' },
  { id: 'france', icon: '🇫🇷', name: 'France' },
  { id: 'espagne', icon: '🇪🇸', name: 'Espagne' },
  { id: 'italie', icon: '🇮🇹', name: 'Italie' },
  { id: 'angleterre', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'Angleterre' },
]

const Palmares = () => {
  const [activeChamp, setActiveChamp] = useState('ldh')

  return (
    <div className="ds-page">
      <div className="ds-page-title">
        <h1>PALMARÈS</h1>
      </div>

      <div className="ds-card">
        <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(150, 190, 200, 0.08)' }}>
          <span style={{ fontSize: '13px', color: 'rgba(224, 240, 245, 0.6)', fontWeight: 500 }}>
            Historique des champions
          </span>
        </div>

        <div style={{ padding: '12px' }}>
          <div className="ds-filter-bar">
            {championships.map((champ) => (
              <div
                key={champ.id}
                className={`ds-filter-item ${activeChamp === champ.id ? 'active' : ''}`}
                onClick={() => setActiveChamp(champ.id)}
                title={champ.name}
              >
                {champ.icon}
              </div>
            ))}
          </div>
        </div>

        <table className="ds-table">
          <thead>
            <tr>
              <th style={{ width: '70px' }}>SAISON</th>
              <th className="left">CHAMPION</th>
              <th style={{ width: '80px' }}>POINTS</th>
            </tr>
          </thead>
          <tbody>
            {championsData.map((champion) => (
              <tr key={champion.season}>
                <td>
                  <span className="season-badge">{champion.season}</span>
                </td>
                <td className="left">{champion.team}</td>
                <td>
                  <span className="ds-pts">{champion.points}</span>
                  <span className="pts-unit">pts</span>
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

export default Palmares

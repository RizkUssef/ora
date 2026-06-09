'use client';
import StatsCard from '../common/StatsCard'

const StatsBanner = () => {
  return (
    <div className="stats-banner container">
      <StatsCard icon={<span>🎉</span>} label="500" span="+" description="Events hosted" />
      <StatsCard icon={<span>🏛️</span>} label="50" span="yrs" description="Heritage" />
      <StatsCard icon={<span>👥</span>} label="1,200" description="Max capacity" />
      <StatsCard icon={<span>⭐</span>} label="4.9" span="/5" description="Guest rating" />
    </div>
  )
}

export default StatsBanner

'use client';

const StatsCard = ({icon, label, span, description }:{icon: React.ReactNode, label: string, span?: string, description: string}) => {
  return (
    <div className="stats-card">
      <div className="stats-card-icon">
        {icon}
      </div>
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-baseline">
          <h3 className="stats-card-label font-bold">{label}</h3>
          <span className="stats-card-label-muted">{span}</span>
        </div>
        <p className="stats-card-paragraph">{description}</p>
      </div>
    </div>
  );
};

export default StatsCard;

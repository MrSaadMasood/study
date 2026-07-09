import { Link } from 'react-router-dom';
import type { WeekPlan } from '../types/schedule';
import { DayRow } from './DayRow';
import { useProgressStore } from '../hooks/useProgressStore';
import { getWeekProgress } from '../hooks/useProgress';

interface WeekCardProps {
  week: WeekPlan;
}

export function WeekCard({ week }: WeekCardProps) {
  useProgressStore();
  const sessionIds = week.sessions.map((s) => s.id);
  const { completed, total } = getWeekProgress(week.number, sessionIds);
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <section className="week-card" id={`week-${week.number}`}>
      <header className="week-card__header">
        <div>
          <span className="week-card__number">Week {week.number}</span>
          <h2 className="week-card__title">{week.title}</h2>
          <p className="week-card__theme">{week.theme}</p>
        </div>
        <div className="week-card__meta">
          <div className="progress-ring" style={{ '--pct': pct } as React.CSSProperties}>
            <span>{pct}%</span>
          </div>
          <Link to={`/week/${week.number}`} className="btn">
            Full Week →
          </Link>
        </div>
      </header>

      <div className="table-wrap">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Topic</th>
              <th>Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {week.sessions.map((session) => (
              <DayRow key={session.id} weekNumber={week.number} session={session} compact />
            ))}
          </tbody>
        </table>
      </div>

      <p className="week-card__exit">
        <strong>Exit criteria:</strong> {week.exitCriteria}
      </p>
    </section>
  );
}

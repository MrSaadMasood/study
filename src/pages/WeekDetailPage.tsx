import { Link, Navigate, useParams } from 'react-router-dom';
import { getWeek, WEEKS } from '../data/weeks';
import { DayRow } from '../components/DayRow';
import { BackLink, InfoBox } from '../components/ui';
import { getWeekProgress } from '../hooks/useProgress';
import { useProgressStore } from '../hooks/useProgressStore';

export function WeekDetailPage() {
  const { weekNumber } = useParams();
  const num = Number(weekNumber);
  const week = getWeek(num);
  useProgressStore();

  if (!week) return <Navigate to="/" replace />;

  const sessionIds = week.sessions.map((s) => s.id);
  const { completed, total } = getWeekProgress(num, sessionIds);
  const prevWeek = WEEKS.find((w) => w.number === num - 1);
  const nextWeek = WEEKS.find((w) => w.number === num + 1);

  return (
    <div className="page">
      <BackLink to="/">Back to schedule</BackLink>

      <header className="week-detail__header">
        <span className="week-card__number">Week {week.number}</span>
        <h1>{week.title}</h1>
        <p className="week-detail__theme">{week.theme}</p>
        <div className="week-detail__stats">
          <span className="budget-badge">
            {completed}/{total} sessions complete
          </span>
        </div>
      </header>

      <InfoBox variant="tip" title="Exit criteria for this week:">
        {week.exitCriteria}
      </InfoBox>

      <section className="section">
        <h2>Daily Plan</h2>
        <p className="section__lead">
          Click <strong>View Details</strong> on any day for exercises, resources, focus areas, and
          what to skip.
        </p>
        <div className="table-wrap">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Topic &amp; Plan</th>
                <th>Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {week.sessions.map((session) => (
                <DayRow key={session.id} weekNumber={week.number} session={session} />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <nav className="week-pagination">
        {prevWeek ? (
          <Link to={`/week/${prevWeek.number}`} className="btn btn--ghost">
            ← Week {prevWeek.number}
          </Link>
        ) : (
          <span />
        )}
        {nextWeek ? (
          <Link to={`/week/${nextWeek.number}`} className="btn btn--ghost">
            Week {nextWeek.number} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}

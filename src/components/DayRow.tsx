import { Link } from 'react-router-dom';
import type { StudySession } from '../types/schedule';
import { PriorityBadge, SessionTypeBadge } from './ui';
import { useProgressStore } from '../hooks/useProgressStore';

interface DayRowProps {
  weekNumber: number;
  session: StudySession;
  compact?: boolean;
}

export function DayRow({ weekNumber, session, compact = false }: DayRowProps) {
  const { isComplete, toggle } = useProgressStore();
  const complete = isComplete(session.id);
  const isRest = session.type === 'rest';

  return (
    <tr className={`day-row ${isRest ? 'day-row--rest' : ''} ${session.type === 'mock' ? 'day-row--mock' : ''} ${session.type === 'system-design' || session.type === 'applications' ? 'day-row--sat' : ''} ${complete ? 'day-row--done' : ''}`}>
      <td className="day-row__day">
        {!isRest && (
          <input
            type="checkbox"
            checked={complete}
            onChange={() => toggle(session.id)}
            aria-label={`Mark ${session.dayLabel} complete`}
            className="day-row__check"
          />
        )}
        <span>{session.dayLabel}</span>
      </td>
      <td className="day-row__topic">
        <div className="day-row__topic-header">
          <strong>{session.topic}</strong>
          {!isRest && <SessionTypeBadge type={session.type} />}
        </div>
        {!compact && <p className="day-row__summary">{session.summary}</p>}
        {!isRest && session.priorities.length > 0 && (
          <div className="day-row__badges">
            {session.priorities.map((p) => (
              <PriorityBadge key={p} id={p} />
            ))}
          </div>
        )}
      </td>
      <td className="day-row__duration">{session.duration}</td>
      <td className="day-row__action">
        {!isRest && (
          <Link to={`/week/${weekNumber}/day/${session.day}`} className="btn btn--sm">
            View Details
          </Link>
        )}
      </td>
    </tr>
  );
}

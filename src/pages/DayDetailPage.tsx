import { Navigate, useParams } from 'react-router-dom';
import { getSession, getWeek } from '../data/weeks';
import { resolveDocRef, withBaseUrl } from '../data/localDocs';
import { BackLink, InfoBox, PriorityBadge, SessionTypeBadge } from '../components/ui';
import { useProgressStore } from '../hooks/useProgressStore';

function ResourceCard({ title, url, note }: { title: string; url: string; note?: string }) {
  const href = withBaseUrl(url);
  const isInternal = !/^https?:\/\//i.test(url);
  return (
    <a
      href={href}
      className="resource-card"
      target={isInternal ? '_self' : '_blank'}
      rel={isInternal ? undefined : 'noreferrer'}
    >
      <span className="resource-card__title">{title}</span>
      {note && <span className="resource-card__note">{note}</span>}
      <span className="resource-card__link">{isInternal ? 'Open doc →' : 'Open →'}</span>
    </a>
  );
}

export function DayDetailPage() {
  const { weekNumber, day } = useParams();
  const num = Number(weekNumber);
  const week = getWeek(num);
  const session = day ? getSession(num, day) : undefined;
  const { isComplete, toggle } = useProgressStore();

  if (!week || !session) return <Navigate to="/" replace />;

  const complete = isComplete(session.id);
  const isRest = session.type === 'rest';

  return (
    <div className="page">
      <div className="day-detail__nav">
        <BackLink to="/">Schedule</BackLink>
        <span className="day-detail__sep">/</span>
        <BackLink to={`/week/${num}`}>Week {num}</BackLink>
      </div>

      <header className="day-detail__header">
        <div className="day-detail__labels">
          <span className="week-card__number">Week {num} · {session.dayLabel}</span>
          {!isRest && <SessionTypeBadge type={session.type} />}
          {!isRest && session.priorities.map((p) => <PriorityBadge key={p} id={p} />)}
        </div>
        <h1>{session.topic}</h1>
        <p className="day-detail__summary">{session.summary}</p>
        <div className="day-detail__meta">
          <span className="budget-badge">Duration: {session.duration}</span>
          {!isRest && (
            <label className="complete-toggle">
              <input
                type="checkbox"
                checked={complete}
                onChange={() => toggle(session.id)}
              />
              Mark session complete
            </label>
          )}
        </div>
      </header>

      {isRest ? (
        <InfoBox variant="tip" title="Rest day">
          {session.studyPlan[0]}
        </InfoBox>
      ) : (
        <>
          {session.docRefs.length > 0 && (
            <section className="detail-section">
              <h2>Reference Material</h2>
              <div className="resource-grid">
                {session.docRefs.map((ref) => {
                  const resolved = resolveDocRef(ref);
                  if (resolved) {
                    return <ResourceCard key={ref} {...resolved} />;
                  }
                  return (
                    <div key={ref} className="resource-card resource-card--static">
                      <span className="resource-card__title">{ref}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {session.timeBreakdown && (
            <section className="detail-section">
              <h2>Time Breakdown ({session.duration})</h2>
              <ul className="detail-list detail-list--timeline">
                {session.timeBreakdown.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="detail-section">
            <h2>Study Plan — Step by Step</h2>
            <ol className="numbered-list">
              {session.studyPlan.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          {session.exercises.length > 0 && (
            <section className="detail-section">
              <h2>Exercises</h2>
              <div className="exercise-grid">
                {session.exercises.map((ex) => (
                  <article key={ex.title} className="exercise-card">
                    <h3>
                      {ex.title}
                      {ex.optional && <span className="exercise-card__optional">Optional</span>}
                    </h3>
                    <p>{ex.description}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="focus-skip-grid">
            <section className="detail-section detail-section--focus">
              <h2>Focus On (Must Cover)</h2>
              <ul className="detail-list">
                {session.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="detail-section detail-section--skip">
              <h2>Skip / De-prioritize</h2>
              <ul className="detail-list">
                {session.skip.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          {session.resources.length > 0 && (
            <section className="detail-section">
              <h2>Free Resources</h2>
              <div className="resource-grid">
                {session.resources.map((res) => (
                  <ResourceCard key={res.title} title={res.title} url={res.url} note={res.note} />
                ))}
              </div>
            </section>
          )}

          <InfoBox variant="info" title="End-of-session rule:">
            Write 3–5 bullet points in your own words. If you can't explain it without notes, you
            haven't finished the session.
          </InfoBox>
        </>
      )}

      <section className="detail-section detail-section--muted">
        <h2>Week Context</h2>
        <p>
          <strong>Theme:</strong> {week.theme}
        </p>
        <p>
          <strong>Exit criteria:</strong> {week.exitCriteria}
        </p>
      </section>
    </div>
  );
}

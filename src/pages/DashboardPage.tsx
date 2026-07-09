import { Link } from 'react-router-dom';
import { WEEKS } from '../data/weeks';
import {
  DSA_PROBLEMS,
  MARKET_STRATEGY,
  MINIMUM_VIABLE_WEEK,
  PRIORITY_HIERARCHY,
  SCHEDULE_META,
} from '../data/constants';
import { WeekCard } from '../components/WeekCard';
import { InfoBox } from '../components/ui';
import { useProgressStore } from '../hooks/useProgressStore';

export function DashboardPage() {
  const { completedCount } = useProgressStore();
  const totalStudySessions = WEEKS.reduce(
    (acc, w) => acc + w.sessions.filter((s) => s.type !== 'rest').length,
    0,
  );

  return (
    <div className="page">
      <header className="hero">
        <p className="hero__eyebrow">Interview Prep Hub</p>
        <h1>{SCHEDULE_META.title}</h1>
        <p className="hero__subtitle">{SCHEDULE_META.subtitle}</p>
        <div className="hero__badges">
          {SCHEDULE_META.budgets.map((b) => (
            <span key={b} className="budget-badge">
              {b}
            </span>
          ))}
        </div>
        <div className="hero__progress">
          Overall progress: <strong>{completedCount}</strong> / {totalStudySessions} sessions
        </div>
      </header>

      <InfoBox variant="tip" title="Why this schedule works:">
        {SCHEDULE_META.followabilityTip}
      </InfoBox>

      <InfoBox variant="info" title="How to use this app:">
        Each week has a fixed pattern — Mon–Wed main topic, Thu–Fri DSA, Sat deep session.
        Click <strong>View Details</strong> beside any day for exercises, free resources, what to
        focus on, and what to skip. Check off days as you complete them — progress saves locally.
      </InfoBox>

      <InfoBox variant="warn" title="Priority rule when compressed:">
        {SCHEDULE_META.priorityRule}
      </InfoBox>

      <section className="section">
        <h2>Weekly Structure</h2>
        <div className="table-wrap">
          <table className="schedule-table schedule-table--compact">
            <thead>
              <tr>
                <th>Day</th>
                <th>What Happens</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday – Wednesday</td>
                <td>Main subject study — one focused topic per day</td>
                <td>1 hr</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>DSA — 1 pattern + 1 problem solved completely</td>
                <td>1 hr</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>DSA — 1 harder problem</td>
                <td>1 hr</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>System Design deep session OR Mock Interview</td>
                <td>2–3 hrs</td>
              </tr>
              <tr className="day-row--rest">
                <td>Sunday</td>
                <td colSpan={2}>FULL REST — recovery is part of the plan</td>
              </tr>
            </tbody>
          </table>
        </div>
        <InfoBox variant="tip" title='What "1 hr" means:'>
          {SCHEDULE_META.oneHourRule}
        </InfoBox>
      </section>

      <section className="section">
        <h2>Priority Hierarchy</h2>
        <div className="table-wrap">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Priority</th>
                <th>Subject</th>
                <th>Hrs</th>
                <th>Pak Market</th>
                <th>International</th>
              </tr>
            </thead>
            <tbody>
              {PRIORITY_HIERARCHY.map((row) => (
                <tr key={row.id}>
                  <td>
                    <span className="priority-badge" style={{ backgroundColor: `var(--priority-${row.id})` }}>
                      {row.label}
                    </span>
                  </td>
                  <td>{row.subject}</td>
                  <td>{row.hours}</td>
                  <td>{row.pakMarket}</td>
                  <td>{row.international}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>Week-by-Week Plan</h2>
        <nav className="week-nav">
          {WEEKS.map((w) => (
            <a key={w.number} href={`#week-${w.number}`} className="week-nav__link">
              W{w.number}
            </a>
          ))}
        </nav>
        {WEEKS.map((week) => (
          <WeekCard key={week.number} week={week} />
        ))}
      </section>

      <section className="section">
        <h2>DSA Problem Tracker — 28 Problems</h2>
        <p className="section__lead">
          2 problems per week (Thu + Fri). Solve completely before moving on.
        </p>
        <div className="table-wrap">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Week</th>
                <th>Day</th>
                <th>Problem</th>
                <th>Pattern</th>
                <th>LC #</th>
              </tr>
            </thead>
            <tbody>
              {DSA_PROBLEMS.map((p) => (
                <tr key={`${p.week}-${p.day}`}>
                  <td>{p.week}</td>
                  <td className="capitalize">{p.day.slice(0, 3)}</td>
                  <td>
                    <Link to={`/week/${p.week}/day/${p.day}`}>{p.name}</Link>
                  </td>
                  <td>{p.pattern}</td>
                  <td>
                    {p.leetcode !== 'Your pick' && p.leetcode !== 'Your picks' ? (
                      <a
                        href={`https://leetcode.com/problems/`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {p.leetcode}
                      </a>
                    ) : (
                      p.leetcode
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>If a Week Goes Badly — Minimum Viable Week</h2>
        <InfoBox variant="warn">
          <ol className="numbered-list">
            {MINIMUM_VIABLE_WEEK.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </InfoBox>
      </section>

      <section className="section">
        <h2>Market-Specific Strategy</h2>
        <div className="table-wrap">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Interviewing At</th>
                <th>Prioritize</th>
                <th>Can De-emphasize</th>
              </tr>
            </thead>
            <tbody>
              {MARKET_STRATEGY.map((row) => (
                <tr key={row.market}>
                  <td>{row.market}</td>
                  <td>{row.prioritize}</td>
                  <td>{row.deemphasize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

import type { WeekPlan } from '../../types/schedule';
import { week1Sessions } from './week1';
import { week2Sessions, week3Sessions } from './week2-3';
import { week4Sessions, week5Sessions } from './week4-5';
import { week6Sessions, week7Sessions, week8Sessions } from './week6-8';
import { week9Sessions, week10Sessions } from './week9-10';

export const WEEKS: WeekPlan[] = [
  {
    number: 1,
    title: 'JavaScript Depth + DSA Foundation + System Design Intro',
    theme:
      'Build the foundation. Node.js and JS questions are asked in the first 10 minutes of most Pakistani interviews. Week 1 locks those in.',
    exitCriteria:
      'You can explain the event loop phases without looking at notes. You\'ve solved 2 LeetCode Mediums. You can give a real-world example of CAP theorem.',
    sessions: week1Sessions,
  },
  {
    number: 2,
    title: 'Node.js Depth + REST API Design + DSA Patterns',
    theme:
      'Go deeper on your primary stack. Node.js internals are the #1 gap that separates 2-YOE candidates from 4–5 YOE in Pakistani interviews.',
    exitCriteria:
      'You can explain backpressure with an analogy. You know when to use Worker Threads vs clustering. You\'ve solved 4 total LeetCode problems.',
    sessions: week2Sessions,
  },
  {
    number: 3,
    title: 'Databases You Can Write + URL Shortener',
    theme:
      'Databases come up constantly at 4–5 years. This week you write the index, the transfer, and the aggregation. Saturday is a design you attempt before you read it.',
    exitCriteria:
      'You can write the orders index and say why the column order is that way. You can write the bank transfer. You have a 40-minute URL shortener on paper. 6 problems solved.',
    sessions: week3Sessions,
  },
  {
    number: 4,
    title: 'Auth, Security, SQL You Can Write + Mock 1',
    theme:
      'Auth and IDOR are normal senior questions. Saturday is a baseline mock, not more reading.',
    exitCriteria:
      'You can sketch the JWT middleware and the order-ownership check. The top-3 query is written, not described. Mock 1 is done and three gaps are written down. 9 problems solved.',
    sessions: week4Sessions,
  },
  {
    number: 5,
    title: 'React Questions You Will Actually Get + Rate Limiter',
    theme:
      'Three hours on the React questions seniors get asked, then a rate limiter you design closed-book. No new frontend stack.',
    exitCriteria:
      'You can fix the stale closure in code and reject a useless useCallback. The rate limiter is on paper, including what happens when the counter store is down. 11 problems solved.',
    sessions: week5Sessions,
  },
  {
    number: 6,
    title: 'Stories, Three Applications, Mock 2',
    theme:
      'Behavioral starts because international loops use it. The proxy story stays honest. Three applications go out. Mock 2 adds two stories.',
    exitCriteria:
      'Five stories exist on paper. Three applications are submitted. The proxy walkthrough includes what is not built. Mock 2 is compared with mock 1. 13 problems solved.',
    sessions: week6Sessions,
  },
  {
    number: 7,
    title: 'A Real Test, One Ops Hour, One Design',
    theme:
      'Write one test. Learn the circuit breaker well enough to draw it. Design either notifications or chat, not both.',
    exitCriteria:
      'A unit test with a mocked dependency exists. You can walk the three breaker states. One of notifications or chat is designed closed-book. 14 distinct problems, plus one timed re-solve.',
    sessions: week7Sessions,
  },
  {
    number: 8,
    title: 'Apply What You Know + The Other Design',
    theme:
      'No new stacks. Re-renders, database recall, one endpoint, two more problems in patterns you already know, and the design you skipped.',
    exitCriteria:
      'The list re-render has a written fix. One orders endpoint is in a scratch file. The second of notifications or chat is done. 16 distinct problems.',
    sessions: week8Sessions,
  },
  {
    number: 9,
    title: 'Retrieval + Mock 3',
    theme:
      'Say the stories. Review the cheat sheet. One hour on one mock gap. Two problems that close real holes: a hash map, and the cycle-start follow-up.',
    exitCriteria:
      'Stories are spoken on a timer. The shaky list has at most five items. Mock 3 is closed-book on a design you already studied. 18 distinct problems.',
    sessions: week9Sessions,
  },
  {
    number: 10,
    title: 'Resume, One Last Problem, Applications',
    theme:
      'Stop adding topics. Make the resume true, re-solve one miss, solve one last Medium, then apply. Interviews will show what is left.',
    exitCriteria:
      'Resume is one page and the proxy lines are true. 19 distinct problems. The spreadsheet has 8–12 applications. Three leftover gaps are written down. Then you stop.',
    sessions: week10Sessions,
  },
];

export function getWeek(weekNumber: number): WeekPlan | undefined {
  return WEEKS.find((w) => w.number === weekNumber);
}

export function getSession(weekNumber: number, day: string) {
  const week = getWeek(weekNumber);
  return week?.sessions.find((s) => s.day === day.toLowerCase());
}

export function getSessionById(sessionId: string) {
  for (const week of WEEKS) {
    const session = week.sessions.find((s) => s.id === sessionId);
    if (session) return { week, session };
  }
  return undefined;
}

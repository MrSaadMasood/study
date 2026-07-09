import type { WeekPlan } from '../../types/schedule';
import { week1Sessions } from './week1';
import { week2Sessions, week3Sessions } from './week2-3';
import { week4Sessions, week5Sessions } from './week4-5';
import { week6Sessions, week7Sessions, week8Sessions } from './week6-8';

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
    title: 'Database Mastery + DSA Trees',
    theme:
      'Databases are asked in every Pakistani interview without exception. Week 3 owns this topic completely. Give it 100% focus on weekdays.',
    exitCriteria:
      'You can design an optimal composite index and explain why. You know all 4 ACID properties with examples. You can write a MongoDB aggregation pipeline for a grouped query. 6 total LeetCode problems done.',
    sessions: week3Sessions,
  },
  {
    number: 4,
    title: 'Auth + Security + Advanced SQL + DSA Graphs + Mock #1',
    theme:
      'Security and auth are the #2 missed topic at 4–5 YOE. This week closes that gap. Saturday is your first mock — treat it seriously.',
    exitCriteria:
      'You can implement the JWT auth middleware from memory (rough sketch). You know IDOR and how to fix it. Mock interview done — baseline set. 9 total LeetCode problems done.',
    sessions: week4Sessions,
  },
  {
    number: 5,
    title: 'React + Frontend Depth + DSA Dynamic Programming',
    theme:
      'Every MERN role tests React. Week 5 covers it completely. DP is the most commonly failed DSA category — two sessions on it this week.',
    exitCriteria:
      'You can explain the stale closure bug and fix it. You know when useCallback helps (paired with React.memo) vs when it\'s overhead. You\'ve designed the API gateway narrative. 12 total LeetCode problems done.',
    sessions: week5Sessions,
  },
  {
    number: 6,
    title: 'Behavioral + Go Differentiator + DSA + Mock #2',
    theme:
      'Behavioral week. Most engineers skip this. At 4–5 YOE it can be the deciding factor in international roles. Saturday is Mock #2 — your comparison point against Mock #1.',
    exitCriteria:
      '5 STAR stories exist in written form. Go proxy walkthrough takes under 12 minutes with confidence. Mock #2 shows measurable improvement over Mock #1. 15 total LeetCode problems done.',
    sessions: week6Sessions,
  },
  {
    number: 7,
    title: 'Weak Area Patch + Advanced Topics + DSA Consolidation',
    theme:
      'Based on your Mock #1 and #2 feedback, this week patches the gaps. Microservices and testing basics are added here. You should be actively applying to jobs now.',
    exitCriteria:
      'You can explain circuit breaker pattern. You know exactly what to mock when testing external services. You\'ve done a timed problem under pressure. 18 total LeetCode problems done.',
    sessions: week7Sessions,
  },
  {
    number: 8,
    title: 'Final Polish + Resume + Active Applications',
    theme:
      'Preparation is good enough. This week is about transitions — from studying to applying. Reduce study intensity, increase application volume. You\'ve done the work.',
    exitCriteria:
      'Resume finalized and submitted to at least 5 positions. 3 ongoing study priorities identified. 20+ total LeetCode problems done. Go proxy on resume. You are interview-ready.',
    sessions: week8Sessions,
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

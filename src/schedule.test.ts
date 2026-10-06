import { describe, expect, it } from 'vitest';
import { DSA_PROBLEMS, SCHEDULE_META } from './data/constants';
import { getSession, WEEKS } from './data/weeks';

describe('schedule after Week 2', () => {
  it('keeps the two finished weeks and runs through Week 10', () => {
    expect(WEEKS).toHaveLength(10);
    expect(getSession(1, 'monday')?.topic).toBe('JavaScript Core');
    expect(getSession(1, 'friday')?.topic).toBe('DSA: Sliding Window Pattern');
    expect(getSession(2, 'monday')?.topic).toBe('Node.js Streams + Backpressure');
    expect(getSession(2, 'saturday')?.topic).toBe('System Design: Caching + DB Scaling');
  });

  it('keeps the same weekly hours', () => {
    for (const week of WEEKS) {
      expect(week.sessions).toHaveLength(7);
      expect(week.sessions.map((session) => session.day)).toEqual([
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ]);
      for (const session of week.sessions) {
        if (session.day === 'sunday') expect(session.duration).toBe('—');
        else if (session.day === 'saturday') expect(['2–3 hrs', '3 hrs']).toContain(session.duration);
        else expect(session.duration).toBe('1 hr');
      }
    }
  });

  it('gives every study day a closed-book test for each topic', () => {
    for (const week of WEEKS) {
      for (const session of week.sessions) {
        if (session.type === 'rest') {
          expect(session.completionTests).toEqual([]);
          continue;
        }
        expect(session.completionTests.length).toBeGreaterThan(0);
        const topics = session.completionTests.map((test) => test.topic);
        expect(new Set(topics).size).toBe(topics.length);
        for (const test of session.completionTests) {
          expect(test.topic.trim().length).toBeGreaterThan(0);
          expect(test.questions.length).toBeGreaterThanOrEqual(4);
          expect(new Set(test.questions).size).toBe(test.questions.length);
        }
      }
    }
    const indexing = getSession(3, 'monday');
    expect(indexing?.completionTests.map((test) => test.topic)).toEqual([
      'B-tree indexes',
      'Composite indexes and the leftmost prefix',
      'Covering indexes',
      'Reading one EXPLAIN',
      'When an index is the wrong tool',
    ]);
  });

  it('schedules 19 distinct problems and starts applications in Week 6', () => {
    const numbers = DSA_PROBLEMS.map((problem) => problem.leetcode).filter((id) => id !== '—');
    expect(new Set(numbers).size).toBe(19);
    expect(SCHEDULE_META.budgets.some((line) => line.includes('Weeks 3–10'))).toBe(true);
    expect(getSession(6, 'wednesday')?.topic).toBe('Honest Go Story + 3 Applications');
    expect(getSession(10, 'saturday')?.type).toBe('applications');
    expect(getSession(5, 'saturday')?.topic).toBe('System Design: Rate Limiter');
  });
});

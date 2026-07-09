import { describe, expect, it, beforeEach } from 'vitest';
import {
  clearProgress,
  getWeekProgress,
  isSessionComplete,
  toggleSessionComplete,
} from './hooks/useProgress';
import { getSession, getWeek, WEEKS } from './data/weeks';
import { resolveDocRef } from './data/localDocs';

describe('schedule data', () => {
  it('has 8 weeks with 7 sessions each', () => {
    expect(WEEKS).toHaveLength(8);
    WEEKS.forEach((week) => {
      expect(week.sessions).toHaveLength(7);
    });
  });

  it('resolves week and session by params', () => {
    const week = getWeek(1);
    expect(week?.title).toContain('JavaScript');
    const session = getSession(1, 'monday');
    expect(session?.topic).toBe('JavaScript Core');
  });

  it('every study session has at least 3 resources', () => {
    for (const week of WEEKS) {
      for (const session of week.sessions) {
        if (session.type === 'rest') continue;
        expect(
          session.resources.length,
          `${session.id} should have >= 3 resources`,
        ).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it('every study session includes a prep doc link', () => {
    for (const week of WEEKS) {
      for (const session of week.sessions) {
        if (session.type === 'rest') continue;
        const hasPrepDoc = session.resources.some((r) => r.url.startsWith('/docs/'));
        expect(hasPrepDoc, `${session.id} should link to a prep doc`).toBe(true);
      }
    }
  });

  it('resolves doc refs to local paths', () => {
    const resolved = resolveDocRef('Doc 02 — Topic 1: Event Loop');
    expect(resolved?.url).toBe('/docs/02-backend-nodejs.html');
  });
});

describe('progress tracking', () => {
  beforeEach(() => {
    clearProgress();
  });

  it('toggles session completion', () => {
    expect(isSessionComplete('w1-mon')).toBe(false);
    toggleSessionComplete('w1-mon');
    expect(isSessionComplete('w1-mon')).toBe(true);
    toggleSessionComplete('w1-mon');
    expect(isSessionComplete('w1-mon')).toBe(false);
  });

  it('calculates week progress excluding sunday', () => {
    toggleSessionComplete('w1-mon');
    toggleSessionComplete('w1-tue');
    const ids = getWeek(1)!.sessions.map((s) => s.id);
    const { completed, total } = getWeekProgress(1, ids);
    expect(completed).toBe(2);
    expect(total).toBe(6);
  });
});

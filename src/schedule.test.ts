import { describe, expect, it, beforeEach } from 'vitest';
import {
  clearProgress,
  getWeekProgress,
  isSessionComplete,
  toggleSessionComplete,
} from './hooks/useProgress';
import { getSession, getWeek, WEEKS } from './data/weeks';
import { LOCAL_DOC_PATHS, resolveDocRef, withBaseUrl } from './data/localDocs';

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
        const hasPrepDoc = session.resources.some((r) => r.url.includes('/docs/'));
        expect(hasPrepDoc, `${session.id} should link to a prep doc`).toBe(true);
      }
    }
  });

  it('resolves doc refs to local paths under the app base URL', () => {
    const resolved = resolveDocRef('Doc 02 — Topic 1: Event Loop');
    expect(resolved?.url).toBe(LOCAL_DOC_PATHS.backend);
    expect(resolved?.url).toBe(`${import.meta.env.BASE_URL}docs/02-backend-nodejs.html`);
  });

  it('prefixes local doc paths with the Vite base URL', () => {
    expect(withBaseUrl('/docs/05-react-frontend.html')).toBe(
      `${import.meta.env.BASE_URL}docs/05-react-frontend.html`,
    );
    expect(withBaseUrl('docs/05-react-frontend.html')).toBe(
      `${import.meta.env.BASE_URL}docs/05-react-frontend.html`,
    );
    expect(withBaseUrl('https://example.com/docs/x.html')).toBe(
      'https://example.com/docs/x.html',
    );
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

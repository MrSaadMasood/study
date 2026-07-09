const STORAGE_KEY = 'interview-prep-progress';

function loadProgress(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as string[];
    return new Set(parsed);
  } catch {
    return new Set();
  }
}

function saveProgress(ids: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}

export function isSessionComplete(sessionId: string): boolean {
  return loadProgress().has(sessionId);
}

export function toggleSessionComplete(sessionId: string): boolean {
  const progress = loadProgress();
  if (progress.has(sessionId)) {
    progress.delete(sessionId);
  } else {
    progress.add(sessionId);
  }
  saveProgress(progress);
  return progress.has(sessionId);
}

export function getCompletedCount(): number {
  return loadProgress().size;
}

export function getWeekProgress(_weekNumber: number, sessionIds: string[]): {
  completed: number;
  total: number;
} {
  const progress = loadProgress();
  const studySessions = sessionIds.filter((id) => !id.endsWith('-sun'));
  const completed = studySessions.filter((id) => progress.has(id)).length;
  return { completed, total: studySessions.length };
}

export function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

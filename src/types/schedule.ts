export type DayKey =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export type SessionType =
  | 'study'
  | 'dsa'
  | 'system-design'
  | 'mock'
  | 'rest'
  | 'applications';

export type PriorityId = 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'p7';

export interface Resource {
  title: string;
  url: string;
  note?: string;
}

export interface Exercise {
  title: string;
  description: string;
  optional?: boolean;
}

/** Closed-book check for one topic on a study day. */
export interface CompletionTest {
  topic: string;
  questions: string[];
}

export interface StudySession {
  id: string;
  day: DayKey;
  dayLabel: string;
  topic: string;
  duration: string;
  type: SessionType;
  priorities: PriorityId[];
  docRefs: string[];
  summary: string;
  studyPlan: string[];
  exercises: Exercise[];
  /** One block per topic this day is meant to teach. Empty on rest days. */
  completionTests: CompletionTest[];
  focus: string[];
  skip: string[];
  quickReference?: string[];
  timeBreakdown?: string[];
  resources: Resource[];
}

/** A session before completion tests are attached. Week files use this. */
export type StudySessionDraft = Omit<StudySession, 'completionTests'>;

export interface WeekPlan {
  number: number;
  title: string;
  theme: string;
  exitCriteria: string;
  sessions: StudySession[];
}

export interface DsaProblem {
  week: number;
  day: DayKey;
  name: string;
  pattern: string;
  leetcode: string;
}

export interface PriorityRow {
  id: PriorityId;
  label: string;
  subject: string;
  hours: string;
  pakMarket: string;
  international: string;
}

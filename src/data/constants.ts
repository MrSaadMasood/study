import type { DsaProblem, PriorityId, PriorityRow } from '../types/schedule';

export const SCHEDULE_META = {
  title: '8-Week Interview Preparation',
  subtitle: 'Senior Full Stack (MERN + Go) | 4–5 YOE | Pakistan + International Remote',
  budgets: [
    'Weekdays: 1 hr/day',
    'Saturday: 2–3 hrs',
    'Sunday: REST — no study',
    'Total: ~56–64 hrs over 8 weeks',
  ],
  followabilityTip:
    'Single focused topic per weekday session. Saturdays are the only heavy day. Sundays are protected rest. Every week has a clear theme so if work gets bad one week, you know exactly what to defer.',
  priorityRule:
    'If a week gets compressed by work, drop in reverse priority: cut P7 first, then shorten P6, then P5, then DSA (skip one problem, not the session). Never skip System Design Saturdays or Node.js/DB weekday sessions in Weeks 1–4.',
  oneHourRule:
    'Sit down, eliminate distractions, study the topic, and write 3–5 bullet points in your own words at the end. If you don\'t write it in your own words, you haven\'t internalized it.',
  saturdayRule:
    'If you have energy: 3 hrs. If life is busy: 2 hrs minimum. Below 2 hrs: reschedule to the following Saturday — don\'t cram.',
};

export const PRIORITY_LABELS: Record<PriorityId, string> = {
  p1: 'P1 — System Design',
  p2: 'P2 — Backend / Node.js',
  p3: 'P3 — Databases',
  p4: 'P4 — DSA',
  p5: 'P5 — React / Frontend',
  p6: 'P6 — Behavioral',
  p7: 'P7 — Go / Differentiator',
};

export const PRIORITY_COLORS: Record<PriorityId, string> = {
  p1: '#c62828',
  p2: '#e65100',
  p3: '#f9a825',
  p4: '#2e7d32',
  p5: '#1565c0',
  p6: '#6a1b9a',
  p7: '#455a64',
};

export const DAY_LABELS: Record<string, string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
};

export const PRIORITY_HIERARCHY: PriorityRow[] = [
  {
    id: 'p2',
    label: 'P2',
    subject: 'Backend / Node.js — Event loop, Streams, Auth, APIs, Security',
    hours: '10 hrs',
    pakMarket: 'Highest',
    international: 'High',
  },
  {
    id: 'p1',
    label: 'P1',
    subject: 'System Design — Theory + 4 full design walkthroughs',
    hours: '16–20 hrs',
    pakMarket: 'Medium',
    international: 'Highest',
  },
  {
    id: 'p3',
    label: 'P3',
    subject: 'Databases — SQL, MongoDB, Redis, Advanced SQL',
    hours: '8 hrs',
    pakMarket: 'High',
    international: 'Medium–High',
  },
  {
    id: 'p4',
    label: 'P4',
    subject: 'DSA — 9 patterns, 28 problems',
    hours: '16 hrs',
    pakMarket: 'Easy–Med',
    international: 'Med–Hard',
  },
  {
    id: 'p5',
    label: 'P5',
    subject: 'React / Frontend — Hooks, State, Performance, TypeScript',
    hours: '5 hrs',
    pakMarket: 'High',
    international: 'Medium',
  },
  {
    id: 'p6',
    label: 'P6',
    subject: 'Behavioral — STAR stories, Q&A',
    hours: '3 hrs',
    pakMarket: 'Low–Med',
    international: 'High',
  },
  {
    id: 'p7',
    label: 'P7',
    subject: 'Go — Proxy narrative + technical decisions',
    hours: '2 hrs',
    pakMarket: 'Bonus',
    international: 'Differentiator',
  },
];

export const DSA_PROBLEMS: DsaProblem[] = [
  { week: 1, day: 'thursday', name: 'Two Sum II', pattern: 'Two Pointers', leetcode: '167' },
  { week: 1, day: 'friday', name: 'Longest Substring Without Repeating Chars', pattern: 'Sliding Window', leetcode: '3' },
  { week: 2, day: 'thursday', name: 'Search in Rotated Sorted Array', pattern: 'Binary Search', leetcode: '33' },
  { week: 2, day: 'friday', name: 'Linked List Cycle', pattern: 'Fast/Slow Pointers', leetcode: '141' },
  { week: 3, day: 'thursday', name: 'Binary Tree Level Order Traversal', pattern: 'Tree BFS', leetcode: '102' },
  { week: 3, day: 'friday', name: 'Validate Binary Search Tree', pattern: 'Tree DFS + bounds', leetcode: '98' },
  { week: 4, day: 'thursday', name: 'Number of Islands', pattern: 'Graph DFS on grid', leetcode: '200' },
  { week: 4, day: 'friday', name: 'Climbing Stairs → House Robber', pattern: 'DP 1D', leetcode: '70 → 198' },
  { week: 5, day: 'thursday', name: 'Coin Change', pattern: 'DP (unbounded knapsack)', leetcode: '322' },
  { week: 5, day: 'friday', name: 'Top K Frequent Elements', pattern: 'Bucket Sort / Heap', leetcode: '347' },
  { week: 6, day: 'thursday', name: 'Course Schedule', pattern: 'Topological Sort', leetcode: '207' },
  { week: 6, day: 'friday', name: 'Daily Temperatures', pattern: 'Monotonic Stack', leetcode: '739' },
  { week: 7, day: 'thursday', name: 'Merge Intervals', pattern: 'Intervals + Sort', leetcode: '56' },
  { week: 7, day: 'friday', name: 'Timed Revision (weakest problem)', pattern: 'Mixed', leetcode: 'Your pick' },
  { week: 8, day: 'thursday', name: '2 timed Mediums (your picks)', pattern: 'Mixed simulation', leetcode: 'Your picks' },
];

export const MARKET_STRATEGY = [
  {
    market: 'Pakistani product companies',
    prioritize: 'P2 Backend/Node.js, P3 Databases, practical coding',
    deemphasize: 'System design (shallow), Behavioral',
  },
  {
    market: 'Pakistani service/outsourcing firms',
    prioritize: 'Quick coding (Easy–Medium LeetCode), React + Node basics',
    deemphasize: 'System design, Behavioral, Go project',
  },
  {
    market: 'International remote (Toptal/Turing/direct)',
    prioritize: 'P1 System Design, P6 Behavioral, ownership (proxy), communication',
    deemphasize: 'Raw LeetCode speed (still need basics)',
  },
  {
    market: 'Mid-size international product companies',
    prioritize: 'System Design + Behavioral + stack depth',
    deemphasize: 'LeetCode Hard, Kubernetes/infra depth',
  },
];

export const MINIMUM_VIABLE_WEEK = [
  "Do Thursday's DSA problem (1 hr) — keeps the habit alive.",
  'Read the Quick Reference table from the relevant doc (20 min).',
  "Do Saturday's system design session if possible, even if only 1.5 hrs.",
];

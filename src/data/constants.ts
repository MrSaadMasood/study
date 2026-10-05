import type { DsaProblem, PriorityId, PriorityRow } from '../types/schedule';

export const SCHEDULE_META = {
  title: '10-Week Interview Preparation',
  subtitle: 'Senior full stack, MERN, 4–5 years. Pakistan and international remote. Weeks 1–2 are already done.',
  budgets: [
    'Weekdays: 1 hr/day',
    'Saturday: 2–3 hrs',
    'Sunday: REST — no study',
    'Weeks 3–10 still to do: ~56–64 hrs',
  ],
  followabilityTip:
    'Start at Week 3. Weeks 1 and 2 do not change. One topic per weekday. Saturday is the long day. Sunday is off. If a week breaks, do not add Sunday hours and do not double the next week.',
  priorityRule:
    'If a week is compressed: do Thursday\'s problem and Saturday\'s session. Shorten Monday–Wednesday before you skip them. Never skip a mock. Never catch up on Sunday.',
  oneHourRule:
    'One topic, then a few bullets in your own words. If the hour ends, stop. A finished hour beats a second topic.',
  saturdayRule:
    '3 hours when you have them. 2 hours still counts. Under 2 hours: move that Saturday topic to the next Saturday and do not stack it on a weekday.',
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
    subject: 'Backend / Node.js — from the event loop through one written endpoint and one test',
    hours: '~13 hrs',
    pakMarket: 'Highest',
    international: 'High',
  },
  {
    id: 'p1',
    label: 'P1',
    subject: 'System design — foundations, then four designs you attempt before reading',
    hours: '14–18 hrs',
    pakMarket: 'Medium',
    international: 'Highest',
  },
  {
    id: 'p3',
    label: 'P3',
    subject: 'Databases — indexes, transactions, Mongo, Redis, one recall hour',
    hours: '~6 hrs',
    pakMarket: 'High',
    international: 'Medium–High',
  },
  {
    id: 'p4',
    label: 'P4',
    subject: 'DSA — 19 problems, mostly Medium, plus two re-solves. No Hards.',
    hours: '~19 hrs',
    pakMarket: 'Easy–Medium',
    international: 'Medium',
  },
  {
    id: 'p5',
    label: 'P5',
    subject: 'React — reconciliation, hooks, state choice, one re-render hour',
    hours: '~4 hrs',
    pakMarket: 'High',
    international: 'Medium',
  },
  {
    id: 'p6',
    label: 'P6',
    subject: 'Behavioral — five stories, rehearsed, used in two mocks',
    hours: '~4 hrs',
    pakMarket: 'Low–Med',
    international: 'High',
  },
  {
    id: 'p7',
    label: 'P7',
    subject: 'Go — one honest story about the proxy as it exists. No Go course.',
    hours: '~1 hr',
    pakMarket: 'Bonus',
    international: 'Only if the code is real',
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
  { week: 4, day: 'friday', name: 'Climbing Stairs', pattern: 'DP 1D', leetcode: '70' },
  { week: 4, day: 'friday', name: 'House Robber', pattern: 'DP 1D', leetcode: '198' },
  { week: 5, day: 'thursday', name: 'Coin Change', pattern: 'DP (unbounded knapsack)', leetcode: '322' },
  { week: 5, day: 'friday', name: 'Top K Frequent Elements', pattern: 'Bucket Sort / Heap', leetcode: '347' },
  { week: 6, day: 'thursday', name: 'Course Schedule', pattern: 'Topological Sort', leetcode: '207' },
  { week: 6, day: 'friday', name: 'Daily Temperatures', pattern: 'Monotonic Stack', leetcode: '739' },
  { week: 7, day: 'thursday', name: 'Merge Intervals', pattern: 'Intervals + Sort', leetcode: '56' },
  { week: 7, day: 'friday', name: 'Re-solve your hardest so far', pattern: 'Retrieval', leetcode: '—' },
  { week: 8, day: 'thursday', name: '3Sum', pattern: 'Two Pointers', leetcode: '15' },
  { week: 8, day: 'friday', name: 'Minimum Size Subarray Sum', pattern: 'Sliding Window', leetcode: '209' },
  { week: 9, day: 'thursday', name: 'Group Anagrams', pattern: 'Hash Map', leetcode: '49' },
  { week: 9, day: 'friday', name: 'Linked List Cycle II', pattern: 'Fast/Slow Pointers', leetcode: '142' },
  { week: 10, day: 'wednesday', name: 'Re-solve 3Sum, Coin Change, or Course Schedule', pattern: 'Retrieval', leetcode: '—' },
  { week: 10, day: 'thursday', name: 'Container With Most Water', pattern: 'Two Pointers', leetcode: '11' },
];

export const MARKET_STRATEGY = [
  {
    market: 'Pakistani product companies',
    prioritize: 'Node, SQL you can write, the endpoint, React hooks and re-renders',
    deemphasize: 'A second system-design topic in an interview week. Do the Saturday design anyway — it is already on the calendar.',
  },
  {
    market: 'Pakistani service/outsourcing firms',
    prioritize: 'The Mediums in this list, React, Node, and a clear project story',
    deemphasize: 'Go, unless that firm asked for it. Do not add problems to impress them.',
  },
  {
    market: 'International remote',
    prioritize: 'The four designs, the STAR stories, and finishing a Medium while talking',
    deemphasize: 'LeetCode Hard. The proxy only helps if the story matches the code.',
  },
  {
    market: 'Mid-size international product companies',
    prioritize: 'System design, behavioral, and the stack hours already in Weeks 3–8',
    deemphasize: 'Kubernetes, GraphQL, and a Go course. Add one only after a real interview asks.',
  },
];

export const MINIMUM_VIABLE_WEEK = [
  "Do Thursday's problem (1 hr).",
  'Do Saturday if you can, even at 2 hours. Keep the closed-book portion.',
  'Do not add Sunday, and do not run two weekdays back-to-back to catch up.',
];

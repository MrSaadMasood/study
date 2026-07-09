import type { Resource } from '../types/schedule';
import { prepDoc, LOCAL_DOC_PATHS } from './localDocs';

const LC = (slug: string) => `https://leetcode.com/problems/${slug}/`;

export const DSA_PATTERN_RESOURCES: Record<string, Resource[]> = {
  twoPointers: [
    prepDoc(LOCAL_DOC_PATHS.dsa, 'Doc 04 — Pattern 1: Two Pointers'),
    { title: 'LeetCode — Two Pointers Study Guide', url: 'https://leetcode.com/discuss/study-guide/1688903/Solved-all-two-pointers-problems-in-100-days', note: 'Pattern recognition + templates' },
    { title: 'NeetCode — Two Pointers (Video)', url: 'https://www.youtube.com/watch?v=cQ1Oz4ckceE', note: 'Free YouTube' },
    { title: 'Two Sum II — LC 167', url: LC('two-sum-ii-input-array-is-sorted') },
  ],
  slidingWindow: [
    prepDoc(LOCAL_DOC_PATHS.dsa, 'Doc 04 — Pattern 2: Sliding Window'),
    { title: 'NeetCode — Sliding Window (Video)', url: 'https://www.youtube.com/watch?v=MK-NZ4hNQoM', note: 'Variable window template' },
    { title: 'LeetCode — Sliding Window Explore Card', url: 'https://leetcode.com/explore/learn/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/1047/', note: 'Free LeetCode card' },
    { title: 'Longest Substring — LC 3', url: LC('longest-substring-without-repeating-characters') },
  ],
  binarySearch: [
    prepDoc(LOCAL_DOC_PATHS.dsa, 'Doc 04 — Pattern 4: Binary Search'),
    { title: 'NeetCode — Binary Search (Video)', url: 'https://www.youtube.com/watch?v=s4DPM8ct1pU', note: 'Rotated array explained' },
    { title: 'LeetCode — Binary Search Explore Card', url: 'https://leetcode.com/explore/learn/card/leetcodes-interview-crash-course-data-structures-and-algorithms/710/binary-search/', note: 'Free templates' },
    { title: 'Search Rotated Sorted Array — LC 33', url: LC('search-in-rotated-sorted-array') },
  ],
  fastSlow: [
    prepDoc(LOCAL_DOC_PATHS.dsa, 'Doc 04 — Pattern 3: Fast & Slow Pointers'),
    { title: 'NeetCode — Linked List Cycle (Video)', url: 'https://www.youtube.com/watch?v=gBTe7IIAVoA', note: "Floyd's algorithm" },
    { title: 'Linked List Cycle — LC 141', url: LC('linked-list-cycle') },
    { title: 'Middle of Linked List — LC 876', url: LC('middle-of-the-linked-list'), note: 'Same pattern practice' },
  ],
  treeBfs: [
    prepDoc(LOCAL_DOC_PATHS.dsa, 'Doc 04 — Pattern 5: Tree BFS'),
    { title: 'NeetCode — Level Order Traversal (Video)', url: 'https://www.youtube.com/watch?v=6ZnyEApgFYg', note: 'BFS template with levelSize' },
    { title: 'Binary Tree Level Order — LC 102', url: LC('binary-tree-level-order-traversal') },
    { title: 'NeetCode — Trees Roadmap', url: 'https://neetcode.io/roadmap', note: 'Tree pattern overview' },
  ],
  treeDfs: [
    prepDoc(LOCAL_DOC_PATHS.dsa, 'Doc 04 — Pattern 5: Tree DFS'),
    { title: 'NeetCode — Validate BST (Video)', url: 'https://www.youtube.com/watch?v=s6IALtpOaCU', note: 'Min/max bounds trick' },
    { title: 'Validate BST — LC 98', url: LC('validate-binary-search-tree') },
    { title: 'NeetCode — Trees Article', url: 'https://neetcode.io/practice', note: 'DFS patterns' },
  ],
  graphDfs: [
    prepDoc(LOCAL_DOC_PATHS.dsa, 'Doc 04 — Pattern 6: Graph BFS & DFS'),
    { title: 'NeetCode — Number of Islands (Video)', url: 'https://www.youtube.com/watch?v=pV2kpY66gyE', note: 'Grid DFS template' },
    { title: 'Number of Islands — LC 200', url: LC('number-of-islands') },
    { title: 'LeetCode — Graph Explore Card', url: 'https://leetcode.com/explore/learn/card/graph/620/breadth-first-search-in-graph/', note: 'BFS/DFS basics' },
  ],
  dp1d: [
    prepDoc(LOCAL_DOC_PATHS.dsa, 'Doc 04 — Pattern 7: Dynamic Programming'),
    { title: 'NeetCode — DP Introduction (Video)', url: 'https://www.youtube.com/watch?v=oBt53YbRjqA', note: 'State + transition' },
    { title: 'Climbing Stairs — LC 70', url: LC('climbing-stairs') },
    { title: 'House Robber — LC 198', url: LC('house-robber') },
  ],
  coinChange: [
    prepDoc(LOCAL_DOC_PATHS.dsa, 'Doc 04 — Pattern 7: DP'),
    { title: 'NeetCode — Coin Change (Video)', url: 'https://www.youtube.com/watch?v=H9bfqozjoZs', note: 'Unbounded knapsack' },
    { title: 'Coin Change — LC 322', url: LC('coin-change') },
    { title: 'LeetCode — DP Explore Card', url: 'https://leetcode.com/explore/learn/card/dynamic-programming/630/an-introduction-to-dynamic-programming/', note: 'DP fundamentals' },
  ],
  heapBucket: [
    prepDoc(LOCAL_DOC_PATHS.dsa, 'Doc 04 — Pattern 8: Heap'),
    { title: 'NeetCode — Top K Frequent (Video)', url: 'https://www.youtube.com/watch?v=YPTqKIgVk-k', note: 'Bucket sort + heap compare' },
    { title: 'Top K Frequent Elements — LC 347', url: LC('top-k-frequent-elements') },
    { title: 'LeetCode — Heap Explore Card', url: 'https://leetcode.com/explore/learn/card/heap/643/heap/4017/', note: 'Heap basics' },
  ],
  topoSort: [
    prepDoc(LOCAL_DOC_PATHS.dsa, 'Doc 04 — Pattern 6: Topological Sort'),
    { title: 'NeetCode — Course Schedule (Video)', url: 'https://www.youtube.com/watch?v=EgI5nNp9sos', note: 'Cycle detection + topo sort' },
    { title: 'Course Schedule — LC 207', url: LC('course-schedule') },
    { title: 'Kahn\'s Algorithm — Visualgo', url: 'https://visualgo.net/en/dfsbfs', note: 'Free interactive graphs' },
  ],
  monotonicStack: [
    prepDoc(LOCAL_DOC_PATHS.dsa, 'Doc 04 — Pattern 9: Stack Patterns'),
    { title: 'NeetCode — Daily Temperatures (Video)', url: 'https://www.youtube.com/watch?v=cTBiI74I47M', note: 'Monotonic stack template' },
    { title: 'Daily Temperatures — LC 739', url: LC('daily-temperatures') },
    { title: 'Monotonic Stack Guide', url: 'https://leetcode.com/discuss/general-discussion/2348569/monotonic-stack-101', note: 'Free LeetCode discuss' },
  ],
  intervals: [
    prepDoc(LOCAL_DOC_PATHS.dsa, 'Doc 04 — Intervals pattern'),
    { title: 'NeetCode — Merge Intervals (Video)', url: 'https://www.youtube.com/watch?v=44H3cEC2fFM', note: 'Sort + greedy merge' },
    { title: 'Merge Intervals — LC 56', url: LC('merge-intervals') },
    { title: 'LeetCode — Interval List Intersections', url: LC('interval-list-intersections'), note: 'Related pattern' },
  ],
};

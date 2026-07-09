import { Link } from 'react-router-dom';
import type { PriorityId } from '../types/schedule';
import { PRIORITY_COLORS, PRIORITY_LABELS } from '../data/constants';

interface PriorityBadgeProps {
  id: PriorityId;
}

export function PriorityBadge({ id }: PriorityBadgeProps) {
  return (
    <span className="priority-badge" style={{ backgroundColor: PRIORITY_COLORS[id] }}>
      {PRIORITY_LABELS[id].split(' — ')[0]}
    </span>
  );
}

interface SessionTypeBadgeProps {
  type: string;
}

const TYPE_LABELS: Record<string, string> = {
  study: 'Study',
  dsa: 'DSA',
  'system-design': 'System Design',
  mock: 'Mock Interview',
  rest: 'Rest',
  applications: 'Applications',
};

export function SessionTypeBadge({ type }: SessionTypeBadgeProps) {
  return <span className={`type-badge type-${type}`}>{TYPE_LABELS[type] ?? type}</span>;
}

interface InfoBoxProps {
  variant: 'info' | 'tip' | 'warn' | 'cut';
  title?: string;
  children: React.ReactNode;
}

export function InfoBox({ variant, title, children }: InfoBoxProps) {
  return (
    <div className={`info-box info-box--${variant}`}>
      {title && <strong>{title}</strong>}
      {title && ' '}
      {children}
    </div>
  );
}

interface BackLinkProps {
  to: string;
  children: React.ReactNode;
}

export function BackLink({ to, children }: BackLinkProps) {
  return (
    <Link to={to} className="back-link">
      ← {children}
    </Link>
  );
}

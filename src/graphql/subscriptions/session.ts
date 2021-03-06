import { getEndOfWeek, getStartOfWeek } from '../../lib/utils';

import { useMemo } from 'react';
import { useSubscriptionWithCache } from '../../hooks';

const SESSION_SUBSCRIPTION = /* GraphQL */ `
  subscription Session($team: Int!, $before: timestamptz!, $after: timestamptz!) {
    team_by_pk(id: $team) {
      id
      name
      changed_entry_at
      entries(where: { created_at: { _gte: $after, _lte: $before } }) {
        id
        image {
          original_url
          color
        }
        user {
          id
          name
          picture
        }
      }
      participants {
        id
        name
        picture
      }
      entry {
        id
        image {
          original_url
          color
        }
        user {
          id
          name
          picture
        }
      }
    }
  }
`;

interface User {
  id: string;
  name: string;
  picture: string;
}

export interface Entry {
  id: number;
  image: {
    original_url: string;
    color?: string;
  };
  user: User;
}

export interface Session {
  id: number;
  name: string;
  changed_entry_at: string;
  entries: Array<Entry>;
  participants: User[];
  entry?: Entry;
}

interface SessionData {
  team_by_pk: Session;
}

export default function useSessionSubscription(teamId: number): SessionData | undefined {
  const startOfWeek = useMemo(() => getStartOfWeek().toISOString(), []);
  const endOfWeek = useMemo(() => getEndOfWeek().toISOString(), []);

  return useSubscriptionWithCache({
    query: SESSION_SUBSCRIPTION,
    variables: { team: teamId, after: startOfWeek, before: endOfWeek },
  });
}

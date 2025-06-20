export type AuthToken = string;

export interface User {
  id: number;
  name: string;
  email: string;
  has_api_key?: boolean;
}

export interface AuthContextType {
  user: User | null;
  token: AuthToken | null;
  apiKey: string | null;
  setApiKey: (key: string) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  deleteAccount: () => Promise<void>;
  loading: boolean;
} 

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  sources?: GroundingSource[];
}

export interface GroundingSource {
  uri: string;
  title: string;
}

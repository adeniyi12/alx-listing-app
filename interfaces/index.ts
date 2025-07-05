export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

declare module '@uydev/react-fb-image-grid' {
    import { ClassValue } from 'clsx';
  
    export interface ReactFbImageGridProps {
      images: string[];
      className?: ClassValue;
    }
  
    export function ReactFbImageGrid(props: ReactFbImageGridProps): JSX.Element;
  }
  
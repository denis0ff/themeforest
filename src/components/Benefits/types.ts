export type Props = {
  cards: Array<{
    image: string;
    title: string;
    subtitle: string;
    link?: string;
  }>;
  maxWidth: number | string;
};

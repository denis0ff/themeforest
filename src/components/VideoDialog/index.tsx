import { CardMedia } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Props } from './types';

export default ({ onClose, open }: Props) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <CardMedia
        component="video"
        controls
        src={`${process.env.PUBLIC_URL}/assets/video.mp4`}
        autoPlay
      />
    </Dialog>
  );
};

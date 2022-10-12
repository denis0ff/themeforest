import { Stack, Chip } from '@mui/material';

export default ({ tags }: { tags: string[] }) => (
  <Stack direction="row" spacing={1} mt={4}>
    {tags.map((tag) => (
      <Chip key={tag} size="small" label={tag} color="primary" />
    ))}
  </Stack>
);

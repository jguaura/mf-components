import Box from 'src/components/Box/Box';
import Button from 'src/components/Button/Button';

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Box>
        <Button label="Btton"/>
      </Box>
    </main>
  );
}

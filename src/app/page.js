import Slider from '@mui/material/Slider';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h1>VALENCE//AROUSAL</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: 'slider-vertical',
            },
          }}
          orientation="vertical"
          defaultValue={30}
          aria-label="Arousal"
          valueLabelDisplay="auto"
        />
        <Slider defaultValue={50} aria-label="Valence" valueLabelDisplay="auto" />
      </div>
    </main>
  )
}

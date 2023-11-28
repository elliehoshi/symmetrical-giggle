// the valence and arousal sliders are built from the MUI slider component
import Slider from '@mui/material/Slider';

export default function Sliders() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h1>VALENCE//AROUSAL</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl h-32 lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div>
          <h6 className="mb-12">Arousal</h6>
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
        </div>
        
        <div>
          <h6>Valence</h6>
          <Slider defaultValue={50} aria-label="Valence" valueLabelDisplay="auto" />
        </div>
      </div>
    </main>
  )
}


import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h1>VALENCE//AROUSAL</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl h-48 lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div>
          <h6 className="mb-12">Arousal</h6>
          <Slider
            sx={{
              '& input[type="range"]': {
                WebkitAppearance: 'slider-vertical',
              },
            }}
            orientation="vertical"
            defaultValue={0}
            min={-3}
            max={3}
            valueLabelDisplay="auto"
            aria-label="Arousal"
          />
        </div>
        
        <div>
          <h6>Valence</h6>
          <Slider 
            defaultValue={0} 
            min={-3} 
            max={3} 
            aria-label="Valence" 
            valueLabelDisplay="auto" 
          />
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Button 
          variant="outlined"
        >
          Submit
        </Button>
      </div>
    </main>
  )
}

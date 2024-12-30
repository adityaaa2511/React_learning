import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({weatherinfo}){
    const img_URL="https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <h2>Weather Info:</h2>
            <div className='Card'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={img_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {weatherinfo.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p>Temperature={weatherinfo.temp} &deg;C</p>
                        <p>Min. Temperature={weatherinfo.mintemp} &deg;C</p>
                        <p>Max. Temperature={weatherinfo.maxtemp} &deg;C</p>
                        <p>Humidity={weatherinfo.humidity}</p>
                        <p>The weather is <i>{weatherinfo.weather}</i> and feels like {weatherinfo.feelslike} &deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}
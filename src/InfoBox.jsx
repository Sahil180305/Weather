import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ({info}){
    let SNOW_URL="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL="https://plus.unsplash.com/premium_photo-1670002263121-6d013d47eebe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let SUMMER_URL="https://plus.unsplash.com/premium_photo-1676320526001-07b75bd19ae3?q=80&w=2810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let OVERCAST_URL="https://plus.unsplash.com/premium_photo-1661963915894-32923efe0dcd?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }} className='card'>
                <CardMedia
                    sx={{ height: 200 }}
                    title={info.Weather}
                    image={info.Weather.toUpperCase()=="RAIN" ?RAIN_URL:info.Weather.toUpperCase()=="CLOUDS"?OVERCAST_URL:info.Temp<15?SNOW_URL:info.Temp<25?SUMMER_URL:HOT_URL}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    { info.Weather.toUpperCase()=="RAIN" ?<BeachAccessIcon/>:info.Weather.toUpperCase()=="CLOUDS"?<ThunderstormIcon/>:info.Temp<15?<AcUnitIcon/>:<Brightness7Icon/>}
                    &nbsp;
                    {info.Name}
                    &nbsp;
                    { info.Weather.toUpperCase()=="RAIN" ?<BeachAccessIcon/>:info.Weather.toUpperCase()=="CLOUDS"?<ThunderstormIcon/>:info.Temp<15?<AcUnitIcon/>:<Brightness7Icon/>}

                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="span">
                        <p> Temprature = {info.Temp}&deg;C</p>
                        <p> Humidity = {info.Humidity}</p>
                        <p> Min Temp = {info.Temp}&deg;C</p>
                        <p> Max Temp = {info.Temp}&deg;C</p>
                        <p>The weather can be described as <i>{info.Description}</i> and feels like {info.feelsLike}&deg;C </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
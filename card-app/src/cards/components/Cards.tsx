import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

const CardComponent = () => {
    return(
        <Card sx={{width: 250, m: 2 }}>
            <CardHeader title='Card Header' subheader='Card Subheader'/>
        </Card>
    )
}

export default CardComponent;
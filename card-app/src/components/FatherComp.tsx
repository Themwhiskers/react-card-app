import { Box, Typography } from '@mui/material';
import ChildComp from './ChildComp';

const FatherComp = () => {
    const string = 'string from father';

    return (
        <>
        <Typography variant='body1' m={2}>
            {' '}
            Father Component - passing string
        </Typography>
        <Box
            sx={{
                m: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 300,
                height: 300,
                backgroundColor: 'secondary.dark',
            }}>
                <ChildComp string={string}/>
            </Box>
        </>
    );
};

export default FatherComp;
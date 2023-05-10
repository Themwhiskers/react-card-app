import { Typography, Box } from "@mui/material";

const ChildComp = (props:any) => {
    const { string } = props;

    return (
        <>
        <Box
            sx={{
                backgroudColor: 'primary.dark',
                width: 100,
                height: 100,
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}>
                <Typography variant='body1'> child component</Typography>
                <Typography>{string}</Typography>
            </Box>
        </>
    );
};

export default ChildComp;
import './PageHeader.css';

const PageHeader = () => {

    const text = 'Hello World!';

    return (
        <>
        <h2 className='blue'>pageHeader WORKS!</h2>
        <p style={{color:'green', marginTop: '5px'}}>{text}</p>
        <p style={{color:'blue', marginTop: '5px'}}>{5 * 6}</p>
        </>
    )
};

export default PageHeader;
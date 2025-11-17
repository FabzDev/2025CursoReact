
export function FirstStepsApp() {
    const firstName = 'Fabio';
    const lastName = 'Escobar';
    const favGames = ['Ragnarok','TESO','Elder Ring'];
    const activo = true;
    const address = {
        zipcode: '40202',
        country: 'USA'
    }
    
    return (
        <>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>

        <p>{favGames.join(', ')}</p>

        <h1>{activo ? 'Activo' : 'Inactivo'}</h1>

        <p>{JSON.stringify(address)}</p>

        </>
    )
}
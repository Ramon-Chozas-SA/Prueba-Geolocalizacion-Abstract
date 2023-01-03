

const buscarLocation = async () => {

    console.log('buscando location');

    const response = await fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=dd5ba78a1a014a009d6625959e125259');
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'No encontro location');
    }

    console.log('data' + data)
    console.log({ data })
    console.log('data.body' + data.body)

    alert(data.city + ', ' + data.country)

};
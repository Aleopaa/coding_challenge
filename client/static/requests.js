async function getAll(category){
    try {
        const response = await fetch(`http://localhost:3000/${category}`);
        const data = await response.json()
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function postBook(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }

        const response = await fetch('http://localhost:3000/', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `#posts/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}
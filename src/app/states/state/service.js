export function getState(id=''){
    return fetch('http://localhost:7070/api/states' + (id ? ('/'+ id): ''))
        .then( response => {
            return response.json();
        });
}

export function updateState(state){
    let data = {code: state.code, name: state.name}
    return fetch('http://localhost:7070/api/states/' + state.id, {
            method: 'PUT',
            body: JSON.stringify(data), 
            headers: new Headers({
            'Content-Type': 'application/json'
            })
        })
        .then( response => {
            return response.json();
        });
}
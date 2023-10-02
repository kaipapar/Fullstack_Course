import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
  
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    console.log('idinupdate', id)
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const del = (id) => {
    console.log('id',id)
    //const request = axios.delete(`${baseUrl}/2`)
    if (window.confirm(`Do you really want to delete person ${id}?`))
        axios.delete(`${baseUrl}/${id}`)
    //return request.catch('was an error')

}

export default { 
    getAll, 
    create, 
    update,
    del 
}
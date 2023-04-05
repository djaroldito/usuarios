import axios from 'axios'

export function saveDataUser(payload){
    return function (dispatch){
        console.log(payload)
        dispatch({type:'SAVE_DATA_USER', payload})
    }
}

export function getUserById(id){
    return function (dispatch){
        
        dispatch({type:'GET_USER_BY_ID', payload: id})
    }
}

export function deleteId(id){
    return async function (dispatch){
        try {
            let res = await axios.delete(`allUsers?id=${id}`)
            console.log(id)
            console.log(res.data)
            return dispatch({
                type: 'DELETE_ID',
                payload: res.data
            })
            
        } catch (error) {
            alert('error')
        }
    }
}

export function getNacionalidades(){
    return async function(dispatch){
        try {
        let res = await axios.get('/allNacionalidades')
        //console.log(res)
        return dispatch({
            type:'GET_NACIONALIDADES',
            payload: res.data
        })    
        } catch (error) {
            alert(error)            
        }
    }
}

export function getByName(nombre){
    console.log(nombre)
    return async function(dispatch){
        try {
            let res = await axios.get(`/allUsers?nombre=${nombre}`)
            console.log(res.data)
            return dispatch({
                type:'GET_BY_NAME',
                payload: res.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export function getProvincias(){
    return async function(dispatch){
        try {
        let res = await axios.get('/Provincias')
        console.log(res)
        return dispatch({
            type:'GET_PROVINCIAS',
            payload: res.data
        })    
        } catch (error) {
            alert(error)            
        }
    }
}

export function getCiudades(){
    return async function(dispatch){
        try {
        let res = await axios.get('/Ciudades')
        console.log(res)
        return dispatch({
            type:'GET_CIUDADES',
            payload: res.data
        })    
        } catch (error) {
            alert(error)            
        }
    }
}

export function getUsers(){
    return async function(dispatch){
        try {
        let res = await axios.get('/allUsers')
        console.log(res)
        return dispatch({
            type:'GET_USERS',
            payload: res.data
        })    
        } catch (error) {
            alert(error)            
        }
    }
}
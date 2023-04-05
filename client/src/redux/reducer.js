const initialState = {
    Filtered: [],
    Ciudades: [],
    Provincias: [],
    Users : [],
    Generos: ['Masculino', 'Femenino'],
    UserDetail: {}
}

function reducer (state = initialState, action){
switch (action.type) {

    case 'GET_CIUDADES':
        return{
            ...state,
            Ciudades: action.payload
        }    

        case 'GET_PROVINCIAS':
            return{
                ...state,
                Provincias: action.payload
            }        
    case 'GET_USERS':
         return{
            ...state,
            Users: action.payload,
            Filtered: action.payload
        }       

    case 'DELETE_ID':
        return{
            ...state,
            Users: state.Users.filter(el=> el.id !== action.payload)
        }

    case 'GET_USER_BY_ID':
    return{
            ...state,
            UserDetail: state.Filtered.find(el=> el.id === action.payload)    
       }

    case 'GET_BY_NAME'   :
        return{
            ...state,
            Filtered: action.payload

        }
    default:
        return state    
}

}

export default reducer
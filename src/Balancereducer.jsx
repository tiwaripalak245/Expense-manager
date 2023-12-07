const Balancereducer = (state, action) => {

    switch(action.type){

        case "DARK_MODE":
        return{
            ...state,
            dark: action.payload
        }

        case "LIGHT_MODE":
            return{
                ...state,
                dark: action.payload
            }

        case "DELETE" :
            return{
                ...state,
             transactions: state.transactions.filter((item) => item.id!== action.payload)
            }

        case "SAVE" :
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

    case "EDIT" :
    return{
        ...state,
        edit : {transaction : action.payload , editMode : true}
    }

    case "UPDATE" : 
    return {
        ...state,
        transactions : state.transactions.map(item => item.id === action.payload.id ? action.payload : item),
        edit : {transaction : {} , editMode : false}
    }

        default:
            return state;
    }       

    
}
export default Balancereducer;
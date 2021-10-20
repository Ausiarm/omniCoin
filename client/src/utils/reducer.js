export default function reducer(state,action){
    // eslint-disable-next-line default-case
    switch(action.type){
        case"setLoggedInUser":{
            return{
                ...state,
              googleId: action.data.googleId,
              name: action.data.name,
              email: action.data.email,
              photo:action.data.photo
            }
        }
    }
}
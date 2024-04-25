import { ActionTypes } from "./ActionTypes";
export const initialState = {
    blogs : [],
    blog : {}
}
export const reducer = (state,{type,payload}) =>{
    switch(type){
        case ActionTypes.FetchBlogs : return{
            ...state,
            blogs  : payload
        };
        case ActionTypes.AddBlog : return{
            ...state,
            blogs  : [...state.blogs,payload]
        };
        case ActionTypes.SelectedBlog : return{
            ...state,
            blog  : payload
        };
        default : break;
        
    }


}



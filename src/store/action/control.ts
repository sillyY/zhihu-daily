import { GETSTORIES, GETTHEMES, GETTHEMECONTENT, GETNEWSCONTENT, SIDEBAR_ACTIVE } from '../actionTypes';


import { fetchNews, fetchThemes, fetchThemeContent, fetchNewsContent } from '../../service/fetch';

//获取最新消息
export function getStories(){
    return (dispatch:any)=>{
        fetchNews().then((payload:any)=>{
                dispatch({
                    type:GETSTORIES,
                    payload
                })
        })
    }
}

//获取主题列表
export function getThemes(){
    return (dispatch:any)=>{
        fetchThemes().then((payload:any)=>{
            dispatch({
                type:GETTHEMES,
                payload
            })
        })
    }
}

//获取主题内容
export function getThemeContent(id:any){
    return (dispatch:any)=>{
        fetchThemeContent(id).then((payload:any)=>{
            dispatch({
                type:GETTHEMECONTENT,
                payload
            })
        })
    }
}

//获取文章内容
export function getNewsContent(id:any){
    return (dispatch:any)=>{
        fetchNewsContent(id).then((payload:any)=>{
            dispatch({
                type:GETNEWSCONTENT,
                payload
            })
        })
    }
}

//处理首页菜单点击事件
export function sidebarActive(){
    return (dispatch:any)=>{
        dispatch({
            type:'SIDEBAR_ACTIVE',
            
        })
    }
}



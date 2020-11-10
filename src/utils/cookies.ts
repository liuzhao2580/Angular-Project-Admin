import Cookies from "js-cookie"

/**
 * 设置 cookies
 * @param {string} name 保存的名称
 * @param {any} value 保存的数据
 * @param {number} days 过期时间 以天为单位
 */
export const setCookie = (name:string, value:any, days:number = 1) => {
    return Cookies.set(name, value, { expires: days })
}

// 获取cookies
export const getCookie = (name) => {
    return Cookies.get(name)
}

// 删除指定cookies
export const removeCookie = (name) => {
    return Cookies.remove(name)
}

// 删除全部 cookies
export const removeAllCookies = () => {
    return Cookies.remove()
}
import axios from "axios";
import Cookies from "js-cookie";
const BASE_URL = "https://q-a-board-api.herokuapp.com/api/v1";
const setCookie = (name, value, hours) => {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
};
axios.interceptors.request.use(async request => {
    const shouldRefreshAt = localStorage.getItem('shouldRefreshAt');
    const refreshToken = Cookies.get("qab_rt")
    const shouldRefresh = shouldRefreshAt && refreshToken && (+shouldRefreshAt < Date.now());
    if (shouldRefresh) {
        localStorage.removeItem('shouldRefreshAt');
        await axios.post('/auth/refresh/', { refresh: refreshToken })
            .then(response => {
                setCookie('qab_at', response.data.access, 1);
                localStorage.setItem("shouldRefreshAt", new Date().getTime() + 55 * 60 * 1000);
                axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.access;
                request.headers.Authorization = `Bearer ${response.data.access}`;
                return request
            })
            .catch(error => {
                console.log(error);
                return request
            });
    }
    return request
});
const AxiosCall = async (method, url, params) => {
   if(Cookies.get("qab_at")){
    axios.defaults.headers.common["Authorization"] =
    "Bearer " + Cookies.get("qab_at");
   }
    try {
        const response = await axios[method](`${BASE_URL}${url}`, params);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default AxiosCall;
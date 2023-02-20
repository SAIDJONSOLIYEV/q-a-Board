import AxiosCall from '../pages/Request/AxiosCall';
import Cookies from 'js-cookie';
import axios from 'axios';
const socket = new WebSocket(
    `ws://q-a-board-api.herokuapp.com/ws/`
)
socket.onopen = async function (e) {
    if (Cookies.get('qab_at') != null) {
        socket.send(Cookies.get('qab_at'))
        axios.defaults.headers.common['Authorization'] = "Bearer " + Cookies.get('qab_at');
        await AxiosCall("get", '/notifications/').then(response => {
            console.log(response);
        })
    }
};

socket.addEventListener('message', async (e) => {
    const data = JSON.parse(e.data);
    if (data.type === "NOTIFICATION") {
        axios.defaults.headers.common['Authorization'] = "Bearer " + Cookies.get('qab_at');
        await AxiosCall("get", '/notifications/').then(response => {
            console.log('====================================');
            console.log(response);
            console.log('====================================');
        })
    }
})

socket.onclose = function (e) {
    console.error(e);
    console.error("Chat socket closed unexpectedly");
};

export default socket;
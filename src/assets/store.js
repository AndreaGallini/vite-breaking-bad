import axios from "axios";
import { reactive } from "vue";
axios.get('https://www.breakingbadapi.com/api/characters').then((res) => {
    console.log(res.data)
})
export const store = reactive({
  
    function() {
        axios.get('https://www.breakingbadapi.com/api/characters').then((res) => {
            console.log(res.data)
            return result = res.data
        })}
})
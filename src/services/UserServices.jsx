import axios from "axios";

const fetAllUser = () => {
    return axios.get("https://reqres.in/api/users?page=1");
};
export { fetAllUser };

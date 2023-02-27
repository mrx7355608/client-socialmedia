import { UserServices } from "@/services/user.services";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function OneUser() {
    const { id } = useParams();
    const userServices = new UserServices();

    useEffect(() => {
        (async function () {
            const response = await userServices.getOneUser(id as string);
            console.log(response.data);
        })();
    }, []);

    return <div>OneUser</div>;
}

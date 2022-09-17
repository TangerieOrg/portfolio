import Nav from "@components/Nav";
import { Permission } from "@modules/authentication/types";
import withAuthLogin from "@modules/authentication/withAuth";

function Admin() {
    return <>
        <Nav />
    </>;
}

export default withAuthLogin(Admin, [Permission.Admin]);
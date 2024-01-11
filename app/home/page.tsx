import { UserButton } from "@clerk/nextjs";

type Props = {};

const page = (props: Props) => {
    return (
        <div>
            Home
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};

export default page;

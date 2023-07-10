import Link from "next/link";

function Auth() {
    return <div className="bg-gray-100 m-40 p-20">
        <div className=" text-center">
            <h1 className="text-4xl font-extrabold">User Authentication with</h1>
            <h1 className="text-4xl font-extrabold text-green-800">Clerk and Next.js</h1>
            <p>Authentication has never been this easy with Clerk!</p>
            <Link href={"/post"}>
                <button className="bg-green-500 text-white px-3 py-1 rounded-md">Sign In go to Post Page</button>
            </Link>
        </div>
    </div>;
}

export default Auth;

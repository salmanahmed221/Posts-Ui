import PostHeader from "@/components/PostHeader";
import Posts from "@/components/Posts";
import { UserButton } from "@clerk/nextjs";


function Post() {
    return <div className="flex justify-center gap-x-9">
        <div>
            <PostHeader />
            {/* Post 1 */}
            <Posts />
            {/* Post 2 */}
            <Posts />
            {/* Post 3 */}
            <Posts />
        </div>
        <div className="mt-5">
            <UserButton afterSignOutUrl="/" />
        </div>
    </div>;
}

export default Post;

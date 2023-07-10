import PostHeader from "@/components/PostHeader";
import Posts from "@/components/Posts";

function Home() {
  return <div >
    <PostHeader />
    {/* Post 1 */}
    <Posts />
    {/* Post 2 */}
    <Posts />
    {/* Post 3 */}
    <Posts />
  </div>;
}

export default Home;

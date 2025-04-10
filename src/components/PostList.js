import PostItem from "./PostItem";
import {Box} from "@chakra-ui/react";

function PostList({ posts, emojiMap, selectedDate }) {
    const filteredPosts = posts[selectedDate] || [];
    return (
        <Box mt={5} mb={50}>
            {filteredPosts.map((post) => (
                <PostItem key={post.id} post={post} emojiMap={emojiMap}/>
            ))}
        </Box>
    );
}

export default PostList;
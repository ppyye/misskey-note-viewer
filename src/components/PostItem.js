import dayjs from "dayjs";
import {Box, Image, Text} from "@chakra-ui/react";

function PostItem({post}) {
    return (
        <Box my={5} p={5}
             border="1px solid"
             borderColor="gray.300"
             borderRadius="md"
        >
            <Text>
                {post.text}
            </Text>
            {post.files && post.files.length > 0 && (
                <Box mt={3}>
                    {post.files.map((file) => (
                        <Image
                            key={file.id}
                            src={file.url}
                            alt={file.name || 'Uploaded Image'}
                            borderRadius="md"
                            maxH="200px" // 이미지 크기 제한
                            mt={2}
                        />
                    ))}
                </Box>
            )}
            <Text fontSize={12} mt={3}>
                {dayjs(post.createdAt).format('YYYY-MM-DD HH:mm')}
            </Text>
        </Box>
    );
}

export default PostItem;

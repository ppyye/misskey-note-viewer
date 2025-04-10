import dayjs from "dayjs";
import {Box, Flex, Image, Text, Spacer} from "@chakra-ui/react";
import { BiHome, BiLockAlt, BiGlobe, BiMailSend } from "react-icons/bi";
import {renderWithEmojis} from "../utils/emojiUtils";

function PostItem({post, emojiMap}) {
    const visibilityIcons = {
        home: <BiHome />,
        followers: <BiLockAlt />,
        public: <BiGlobe />,
        specified: <BiMailSend/>
    };

    return (
        <Box my={5} p={5}
             border="1px solid"
             borderColor="gray.300"
             borderRadius="md"
        >
            <Flex>
                {
                    post.text === null && post.renoteId !== null
                    ? <Text fontSize='sm' color='gray.400'>{"리노트한 노트입니다"}</Text>
                    : <Text whiteSpace="pre-line">{renderWithEmojis(post.text, emojiMap)}</Text>
                }
                <Spacer />
                <Box ml={3} color='gray.500'>
                    {post.visibility && visibilityIcons[post.visibility]}
                </Box>
            </Flex>

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

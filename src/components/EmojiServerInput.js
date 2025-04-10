import {Box, Input, Field, Button, Group, InputGroup} from "@chakra-ui/react";

function EmojiServerInput({ serverUrl, setServerUrl, fetchEmojis, emojiStatus }) {
    const normalizeServerUrl = (inputUrl) => {
        try {
            let url = new URL(inputUrl.includes('://') ? inputUrl : 'https://' + inputUrl);
            return url.hostname; // ex) "chatgpt.com"
        } catch (e) {
            return inputUrl
                .replace(/^https?:\/\//, '') // http:// 또는 https:// 제거
                .replace(/\/+$/, '');        // 끝의 / 제거
        }
    };

    return (
        <Box my={3}>
            <Field.Root required>
                <Group w='100%'>
                    <InputGroup startAddon="https://">
                        <Input placeholder='example.com'
                               value={serverUrl}
                               onChange={(e) => setServerUrl(e.target.value)}
                        />
                    </InputGroup>
                    <Button bg="bg.subtle" variant="outline"
                            onClick={() => {
                                const cleaned = normalizeServerUrl(serverUrl);
                                setServerUrl(cleaned);
                                fetchEmojis(cleaned);
                            }}
                    >
                        적용
                    </Button>
                </Group>
                <Field.HelperText color={emojiStatus.type === 'error' ? 'red.400' : undefined}>
                    {emojiStatus.type === 'default'
                        ? '커스텀 이모지를 적용할 경우 서버 주소를 입력합니다.'
                        : emojiStatus.message}
                </Field.HelperText>
            </Field.Root>
        </Box>
    );
}

export default EmojiServerInput;
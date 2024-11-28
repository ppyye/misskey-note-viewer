import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {Box, Button, Card, Center, Text} from "@chakra-ui/react";

function FileUpload({ onFileParse }) {
    const [fileName, setFileName] = useState(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: '.json',
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            setFileName(file.name); // 파일 이름 저장
            const reader = new FileReader();
            reader.onload = () => {
                const parsedData = JSON.parse(reader.result);
                onFileParse(parsedData); // 상위 컴포넌트에 데이터 전달
            };
            reader.readAsText(file);
        },
    });

    const handleRemoveFile = () => {
        setFileName(null); // 파일 이름 초기화
        onFileParse({});
    };


    return (
        <Center my={10} w='lg'>
            <Box
                {...getRootProps()}
                border="2px dashed"
                borderColor="gray.300"
                borderRadius="md"
                p={4}
                textAlign="center"
                cursor="pointer"
                bg={fileName ? 'gray.100' : 'white'}
                _hover={{ bg: 'gray.200' }}
                w="100%"
            >
                <input {...getInputProps()} />
                {!fileName ? (
                    <>
                        <p>클릭하여 JSON 파일 업로드</p>
                        <Text fontSize={11}>
                            설정 → 가져내기와 내보내기 → 모든 노트 내보내기
                        </Text>
                    </>
                ) : (
                    <Box>
                        <p>{fileName}</p>
                        <Button
                            mt={2}
                            size="xs"
                            colorScheme="red"
                            onClick={(e) => {
                                e.stopPropagation(); // 클릭 이벤트 전파 방지
                                handleRemoveFile();
                            }}
                        >
                            X
                        </Button>
                    </Box>
                )}
            </Box>
        </Center>
    );

}

export default FileUpload;
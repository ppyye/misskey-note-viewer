import logo from './logo.svg';
import {Box, Center} from "@chakra-ui/react";
import {useState} from "react";
import FileUpload from "./components/FileUpload";
import DatePicker from "./components/DatePicker";
import PostList from "./components/PostList";
import dayjs from "dayjs";
import {groupPostsByDate} from "./utils/dateUtils";
import EmojiServerInput from "./components/EmojiServerInput";

function App() {
    const [posts, setPosts] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [emojiMap, setEmojiMap] = useState({});
    const [serverUrl, setServerUrl] = useState('');
    const [emojiStatus, setEmojiStatus] = useState({ type: 'default', message: '' });

    const fetchEmojis = async (cleanedUrl) => {
        try {
            const res = await fetch(`https://${cleanedUrl}/api/emojis`);
            if (!res.ok) throw new Error(`응답 실패: ${res.status}`);

            const data = await res.json();
            const map = {};
            data.emojis.forEach(emoji => {
                if (emoji.name && emoji.url) {
                    map[emoji.name] = emoji.url;
                }
            });

            setEmojiMap(map);
            setEmojiStatus({ type: 'success', message: '커스텀 이모지 로딩 완료' });
        } catch (err) {
            setEmojiStatus({
                type: 'error',
                message: '커스텀 이모지 로딩 실패: 올바른 서버 주소를 입력해주세요.',
            });
        }
    };

    const handleFileParse = (data) => {
        if (data && Object.keys(data).length > 0) { // 데이터가 비어있지 않은 경우만 처리
            const groupedPosts = groupPostsByDate(data);
            setPosts(groupedPosts);
        } else {
            setPosts({}); // 빈 데이터일 경우 posts 초기화
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    return (
        <Center>
            <Box w={['sm', '2xl']} px={3}>
                <FileUpload onFileParse={handleFileParse} />
                <DatePicker onDateChange={handleDateChange} date={selectedDate} posts={posts}/>
                <EmojiServerInput serverUrl={serverUrl} setServerUrl={setServerUrl} fetchEmojis={fetchEmojis} emojiStatus={emojiStatus}/>
                <PostList posts={posts} emojiMap={emojiMap} selectedDate={dayjs(selectedDate).format('YYYY-MM-DD')}/>
            </Box>
        </Center>
    );
}

export default App;

import logo from './logo.svg';
import {Box, Center} from "@chakra-ui/react";
import {useState} from "react";
import FileUpload from "./components/FileUpload";
import DatePicker from "./components/DatePicker";
import PostList from "./components/PostList";
import dayjs from "dayjs";
import {groupPostsByDate} from "./utils/dateUtils";

function App() {
    const [posts, setPosts] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

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
            <Box maxW='lg'>
                <FileUpload onFileParse={handleFileParse} />
                <DatePicker onDateChange={handleDateChange} date={selectedDate} posts={posts}/>
                <PostList posts={posts} selectedDate={dayjs(selectedDate).format('YYYY-MM-DD')}/>
            </Box>
        </Center>
    );
}

export default App;

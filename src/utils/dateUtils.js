import dayjs from 'dayjs';

// JSON 데이터를 날짜별로 그룹화하는 함수
export const groupPostsByDate = (posts) => {
    return posts.reduce((acc, post) => {
        const date = dayjs(post.createdAt).format('YYYY-MM-DD');  // 날짜 포맷
        if (!acc[date]) acc[date] = [];
        acc[date].push(post);
        return acc;
    }, {});
};

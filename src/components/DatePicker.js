import { StyledCalendarWrapper, StyledCalendar } from "./StyledCalendar";
import moment from 'moment';

function DatePicker({ onDateChange, date, posts }) {
    const hasDataForDate = (date) => {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        return !!posts[formattedDate]; // 해당 날짜에 데이터가 있는지 확인
    };

    return (
        <StyledCalendarWrapper>
            <StyledCalendar
                value={new Date(date)}
                onChange={onDateChange}
                formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
                formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
                formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
                calendarType="gregory" // 일요일 부터 시작
                showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
                next2Label={null} // +1년 & +10년 이동 버튼 숨기기
                prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
                minDetail="year" // 10년단위 년도 숨기기
                tileClassName={({ date, view }) =>
                    view === 'month' && hasDataForDate(date) ? 'highlight' : null
                }
            />
        </StyledCalendarWrapper>
    )
}

export default DatePicker;

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

// 캘린더를 감싸주는 스타일
export const StyledCalendarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    .react-calendar {
        width: 100%;
        border: 1px solid #8f9aa9;
        border-radius: 0.5rem;
        padding: 3% 5%;
        background-color: white;
    }

    /* 전체 폰트 컬러 */

    .react-calendar__month-view {
        abbr {
            color: #465160;
        }
    }

    /* 네비게이션 가운데 정렬 */

    .react-calendar__navigation {
        justify-content: center;
    }

    /* 네비게이션 폰트 설정 */

    .react-calendar__navigation button {
        font-weight: 800;
        font-size: 1rem;
    }

    /* 네비게이션 버튼 컬러 */

    .react-calendar__navigation button:focus {
        background-color: white;
    }

    /* 네비게이션 비활성화 됐을때 스타일 */

    .react-calendar__navigation button:disabled {
        background-color: white;
        color: #ec6464;
    }

    /* 년/월 상단 네비게이션 칸 크기 줄이기 */

    .react-calendar__navigation__label {
        flex-grow: 0 !important;
    }

    /* 요일 밑줄 제거 */

    .react-calendar__month-view__weekdays abbr {
        text-decoration: none;
        font-weight: 800;
    }

    /* 일요일에만 빨간 폰트 */

    .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
        color: #ec6464;
    }

    /* 오늘 날짜 폰트 컬러 */

    .react-calendar__tile--now {
        background: none;

        abbr {
            color: #bbc2e0;
            font-weight: bold;
        }
    }

    /* 네비게이션 월 스타일 적용 */

    .react-calendar__year-view__months__month {
        border-radius: 0.8rem;
        background-color: ${(props) => props.theme.gray_5};
        padding: 0;
    }

    /* 네비게이션 현재 월 스타일 적용 */

    .react-calendar__tile--hasActive {
        background-color: #adcaf1;

        abbr {
            color: white;
        }
    }

    /* 일 날짜 간격 */

    .react-calendar__tile {
        padding: 5px 0px 18px;
        position: relative;
    }

    /* 네비게이션 월 스타일 적용 */

    .react-calendar__year-view__months__month {
        flex: 0 0 calc(33.3333% - 10px) !important;
        margin-inline-start: 5px !important;
        margin-inline-end: 5px !important;
        margin-block-end: 10px;
        padding: 15px 5px;
        font-size: 0.9rem;
        font-weight: 600;
        color: #465160;
    }

    /* 선택한 날짜 스타일 적용 */

    .react-calendar__tile--active,
    .react-calendar__tile:enabled:focus {
        background-color: #adcaf1;
        border-radius: 0.3rem;
    }
    
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
        background-color: ${(props) => props.theme.gray_2};
        border-radius: 0.3rem;
    }


    .highlight::after {
        content: '';
        width: 6px;
        height: 6px;
        background-color: #2b6cb0; /* 점 색상 */
        border-radius: 50%;
        position: absolute;
        bottom: 6px;
        left: 50%;
        transform: translateX(-50%);
    }

    \`;

`
// 캘린더를 불러옴
export const StyledCalendar = styled(Calendar)``;

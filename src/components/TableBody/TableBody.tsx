// import { useEffect } from 'react';
import {
    EarningRow,
    EarningFlex,
    DateUserData,
    StatusWrapperContainer,
    StatusWrapper,
    StatusData,
    ValueData,
    SpinnerContainer,
    Spinner,
} from './TableBodyStyles';

// import { StatusWrapperProps } from './TableBodyStyles';

interface User {
    username: string;
    dateAndTime: Date;
    status: string;
    value: number;
}

interface TableBodyProps {
    users: User[];
    isloading: boolean;
    error: any;
}

const TableBody: React.FC<TableBodyProps> = ({ users, isloading, error }) => {

    // Create a new array with modified status
    const modifiedUsers = users.map((user) => {
        if (user.status === "Completed") {
            return { ...user, status: "Paid" };
        }
        return user;
    });


    // Function to format the date
    const formatDate = (inputDate: Date) => {
        const date = new Date(inputDate);

        const options: Intl.DateTimeFormatOptions = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        };

        const formattedDateTime = date.toLocaleString('en-US', options);

        return formattedDateTime;
    };

    return (
        <div className="earning-container">
            {modifiedUsers.map((user) => (
                <EarningRow key={user.username}>
                    <EarningFlex>
                        <DateUserData>{user && formatDate(user.dateAndTime)}</DateUserData>
                        <DateUserData>{user.username}</DateUserData>
                        <StatusWrapperContainer>
                            <StatusWrapper status={user.status}>
                                <StatusData>{user.status}</StatusData>
                            </StatusWrapper>
                        </StatusWrapperContainer>
                        <ValueData>{user.value}</ValueData>
                    </EarningFlex>
                </EarningRow>
            ))}
            {isloading === true && (
                <SpinnerContainer>
                    <Spinner />
                </SpinnerContainer>
            )}
            {error && isloading === false && (
                <SpinnerContainer>
                    <p>{error}</p>
                </SpinnerContainer>
            )}
        </div>
    );
};

export default TableBody;

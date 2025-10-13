import { Skeleton } from '@mui/material';

export const ResumenSkeleton = () => {
    return (
        <div className="boxResumen">
            <div className="boxHead">
                <Skeleton variant="text" width={300} height={60} />
            </div>
            <div className="boxBody">
                <Skeleton variant="text" width={200} height={20} />
                <Skeleton variant="text" width={180} height={40} sx={{ mt: 1 }} />
                <hr />
                <ul className="listDetail">
                    <li>
                        <Skeleton variant="text" width="60%" height={30} />
                        <Skeleton variant="text" width="50%" />
                        <Skeleton variant="text" width="40%" />
                    </li>
                    <li>
                        <Skeleton variant="text" width="40%" height={30} sx={{ mt: 2 }} />
                        <Skeleton variant="text" width="55%" />
                        <Skeleton variant="text" width="70%" />
                    </li>
                </ul>
            </div>
        </div>
    );
};
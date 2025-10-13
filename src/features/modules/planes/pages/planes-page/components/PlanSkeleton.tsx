import { Box, Skeleton } from '@mui/material';

export const PlanSkeleton = () => {
    return (
        <Box sx={{ p: 2, borderRadius: 5, boxShadow: '0px 1px 18px 0px #AEACF359' }} className="boxPlan">
            <div className="boxHead">
                <Skeleton variant="text" sx={{ fontSize: '24px', width: '60%' }} />
                <Skeleton variant="text" sx={{ fontSize: '12px', width: '40%', mt: 3 }} />
                <Skeleton variant="text" sx={{ fontSize: '20px', width: '30%' }} />
            </div>

            <div className="boxBody">
                <Skeleton variant="rectangular" height={2} sx={{ my: 3 }} />
                <ul>
                    <li><Skeleton variant="text" sx={{ fontSize: '1rem', width: '90%' }} /></li>
                    <li><Skeleton variant="text" sx={{ fontSize: '1rem', width: '80%' }} /></li>
                    <li><Skeleton variant="text" sx={{ fontSize: '1rem', width: '85%' }} /></li>
                </ul>
            </div>

            <div className="boxFoot">
                {/* Skeleton para el botón */}
                <Skeleton variant="rectangular" width="100%" height={48} sx={{ borderRadius: '35px', mt: '30px' }} />
            </div>
        </Box>
    );
};
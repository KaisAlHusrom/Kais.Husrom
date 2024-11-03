import { FC, useState } from 'react';

import { Download } from 'lucide-react';
import { Box } from '@/components';
import { Button } from '../ui';
import CV from '@/assets/files/KaisAlHusrom_LSE_04_08_2024.pdf';

const DownloadCV: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleDownload = async (): Promise<void> => {
        setIsLoading(true);
        try {
            // Create a link element
            const link = document.createElement('a');
            link.href = CV;
            link.download = 'Kais-Al-Husrom-CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } finally {
            setTimeout(() => setIsLoading(false), 1000);
        }
    };

    return (
        <Box>
            <Button
                size='lg'
                variant='default'
                onClick={handleDownload}
                className='gap-2'
                disabled={isLoading}
            >
                {isLoading ? (
                    <>Loading...</>
                ) : (
                    <>
                        <Download size={20} />
                        Download CV
                    </>
                )}
            </Button>
        </Box>
    );
};

export default DownloadCV;

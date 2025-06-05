import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = title || 'Personal Portfolio';
    }, [title]);
};

export default useDocumentTitle;
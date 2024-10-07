import { NextApiRequest, NextApiResponse } from 'next';

// Extend the NextApiResponse to include unstable_revalidate
interface ExtendedNextApiResponse extends NextApiResponse {
    unstable_revalidate: (path: string) => Promise<void>;
}

export default async function handler(req: NextApiRequest, res: ExtendedNextApiResponse) {
    // Log incoming request for debugging
    console.log('Received request:', req.query);

    // Check for the secret to confirm this request came from Contentful
    if (req.query.secret !== "123") {
        console.log('Invalid token');
        return res.status(401).json({ message: 'Invalid token' });
    }

    // Revalidate the specified path or default to the homepage
    const pathToRevalidate = (req.query.path || '/').toString();
    try {
        await res.unstable_revalidate(pathToRevalidate);
        return res.json({ revalidated: true });
    } catch (err) {
        console.error('Error revalidating:', err); // Log any errors
        return res.status(500).json({ message: 'Error revalidating', error: err });
    }
}

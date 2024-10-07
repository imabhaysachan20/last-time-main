import { useRouter } from 'next/router';
import "../../app/globals.css";
import { ThemeProvider } from '@/app/provider';
import ServiceComp from './ServiceComp';
import {
  WebDevData,
  AndroidDevData,
  PrintMediaData,
  ProductShootData,SocialMediaCreativesData,
  VoiceOverData,
} from '@/data/services/services';

type ServiceData = typeof WebDevData; // Adjust this type based on your actual data structure
const servicesMap: Record<string, ServiceData | undefined> = {
  "1": WebDevData,
  "2": AndroidDevData,
  "3": ProductShootData,
  "4": VoiceOverData,
  "7": PrintMediaData,
  "5": SocialMediaCreativesData,
};

const Service: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Loading state handling
  if (!id) {
    return <p>Loading...</p>;
  }

  const pros = servicesMap[id as string] || null;

  // Handle case where service is not found
  if (!pros) {
    return <p>Service not found.</p>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <section className='bg-black-100 relative'>
        <ServiceComp object={pros} />
      </section>
    </ThemeProvider>
  );
}

export default Service;
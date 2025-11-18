import Search from '@/components/search.js';
import InfoCard from '@/components/infoCard.js';
import InfoCardExpanded from '@/components/infoCardExpanded.js';

export default function Dictionary() {
    return (
        <main >
            <Search></Search>
            {/* <InfoCard title="Aesthetics" category="Bodybuilding Culture" type="Training Philosophy" quote="Training philosophy focused on proportion and visual appeal."></InfoCard> */}
            
            

            <InfoCardExpanded></InfoCardExpanded>
        </main>
    )
}
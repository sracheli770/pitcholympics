import { Locale } from '@/i18n.config';
import Link from '@core/link';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    return (
        <div>
            <h1>Courses</h1>
            <section>
                <Link label='new course' url={`/${lang}/courses/new-course`} />
                <Link label='dashboard' url={`/${lang}/courses/dashboard`} />
            </section>
        </div>
    );
};

export default Page;

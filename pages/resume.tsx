import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import NextImage from 'next/image';
import { useTheme } from 'next-themes';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}

export default function Resume() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const { systemTheme, theme, setTheme } = useTheme();
  const iconColor = theme === 'system' ? systemTheme : theme;

  const cvUrl = locale === 'nb' ? '/files/cv_nb.pdf' : '/files/cv_en.pdf';

  const frontend = [ 'HTML5', 'CSS3', 'SCSS', 'TailwindCSS', 'JavaScript', 'Next.js', 'Vue.js', 'Three.js',];
  const backend = ['Ruby', 'Java', 'Dart', 'Python','Firebase','Supabase', 'PocketBase'];
  const database = ['MySQL', 'PostgreSQL', 'SQLite', 'NoSQL'];
  const other = ['Git', 'Jira', 'Tableau', 'PowerBI', 'Figma', 'Microsoft Office 365'];
  const mobile = [ 'React Native', 'Flutter'];
  return (
    <div className="flex max-w-3xl flex-col px-4 mx-auto">
      <section className="">
        {/* picture and info and download button */}
        <section className="flex flex-row">
          <NextImage
            src={"/sanan.png"}
            width={200}
            height={200}
            alt="Sanan Maarouf"
            className="rounded-md"
            priority={true}
          />
          <section className="mx-auto my-auto flex flex-col">
            {/* button to download CV.pdf from public/files */}
            <section className="relative hidden w-full justify-end md:flex">
              <a
                className="
              absolute 
              -right-[10.5rem]
              flex
              h-10
              w-10
              flex-row
              justify-center 
              rounded-lg 
              border-2 
              border-gray-300
              hover:border-gray-100
              dark:border-gray-600
              dark:hover:border-white"
                href={cvUrl}
                download
                rel="noopener noreferrer"
              >
                <button className="m-1 self-center">
                  <FontAwesomeIcon
                    icon={faDownload}
                    height={'1.5rem'}
                    width={'1.5rem'}
                    style={{ color: iconColor }}
                  />
                </button>
              </a>
            </section>

            <h2 className='font-semibold text-2xl'>Sanan Maarouf</h2>
            <p>
              {t('resume.jobtitle')}
            </p>
            <p>
            {t('resume.location')}
            </p>
            <a
              className="
              mt-10
              flex 
              w-full
              flex-row
              justify-center
              rounded-lg 
              border-2 
              border-gray-300 
              hover:border-gray-100
              md:hidden"
              href={cvUrl}
              download
              rel="noopener noreferrer"
            >
              <button className="m-1 self-center">
                <FontAwesomeIcon
                  icon={faDownload}
                  height={'1.5rem'}
                  width={'1.5rem'}
                  style={{ color: iconColor }}
                />
              </button>
            </a>
          </section>
        </section>
        {/* page divider */}
        <hr className="mx-auto my-4 h-1 w-full rounded border-0 bg-gray-700"></hr>
      </section>
      <section>
        <h2 className='font-bold text-2xl'>{t('resume.experience.title')}</h2>
        <section className="flex flex-row">
          {/* the timeline line */}
          <section className="my-auto flex ">
            <hr className="mt-3 h-20 w-1 rounded bg-gray-300"></hr>
          </section>
          {/* the jobs on the timeline */}
          <section className="flex flex-col">
            <div className="flex items-center pt-3">
              <div className="-ml-[0.33rem] mr-3 h-[7px] w-[7px] rounded-full bg-gray-500" />
              <div className="flex flex-col">
                <h3 className="font-bold">{t('resume.experience.webdev')}</h3>
                <h3 className="font-semibold">{t("resume.experience.freelance")}</h3>
                <p className="mb-3">{t('resume.experience.freelanceDate')}</p>
              </div>
            </div>
            <div className="flex items-center pt-3">
              <div className="-ml-[0.33rem] mr-3 h-[7px] w-[7px] rounded-full bg-gray-500" />
              <div className="flex flex-col">
                <h3 className="font-bold">{t('resume.experience.fsd')}</h3>
                <h3 className="font-semibold">LAFT Software AS</h3>
                <p className="mb-3">{t('resume.experience.laftDate')}</p>
              </div>
            </div>
          </section>
        </section>
        {/* page divider */}
        <hr className="mx-auto my-4 h-1 w-full rounded border-0 bg-gray-700"></hr>
      </section>
      <section>
        <h2 className='font-bold text-2xl'>{t('resume.education.title')}</h2>
        {/* Add your education details here */}
        <section className="flex flex-row">
          {/* the timeline line */}
          <section className="my-auto flex ">
            <hr className="mt-6 h-24 w-1 rounded bg-gray-300"></hr>
          </section>
          {/* the jobs on the timeline */}
          <section className="flex flex-col">
            <div className="flex items-center pt-3">
              <div className="-ml-[0.33rem] mr-3 h-[7px] w-[7px] rounded-full bg-gray-500" />
              <div className="flex flex-col">
                <h3 className="font-bold">
                {t('resume.education.usn')}
                </h3>
                <h3 className="font-semibold">{t('resume.education.it')}</h3>
                <h3 className="font-semibold">{t('resume.education.bachelor')}</h3>
                <p className="mb-3">{t('resume.education.bachelorDate')}</p>
              </div>
            </div>
            <div className="flex items-center pt-3">
              <div className="-ml-[0.33rem] mr-3 h-[7px] w-[7px] rounded-full bg-gray-500" />
              <div className="flex flex-col">
                <h3 className="font-bold">{t('resume.education.vgs')}</h3>
                <h3 className="font-semibold">{t('resume.education.field')}</h3>
                <p className="mb-3">{t('resume.education.vgsDate')}</p>
              </div>
            </div>
          </section>
        </section>
        {/* page divider */}
        <hr className="mx-auto my-4 h-1 w-full rounded border-0 bg-gray-700"></hr>
      </section>
      <section>
        <h2 className='font-bold text-2xl'>{t('resume.skills.title')}</h2>
        {/* Add your skills here */}
        <section className="flex flex-row">
          <section className="flex flex-col">
            <div className="items-center pt-3">
              <h3 className="font-bold">Frontend:</h3>
              <div className="flex flex-row flex-wrap">
                {frontend.map((item, index) => (
                  <p
                    key={index}
                    className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-center pt-3">
              <div className="flex flex-col">
                <h3 className="font-bold">Backend:</h3>
                <div className="flex flex-row">
                  {backend.map((item, index) => (
                    <p
                      key={index}
                      className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center pt-3">
              <div className="flex flex-col">
                <h3 className="font-bold">Database:</h3>
                <div className="flex flex-row">
                  {database.map((item, index) => (
                    <p
                      key={index}
                      className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center pt-3">
              <div className="flex flex-col">
                <h3 className="font-bold">{t("resume.skills.mobile")}</h3>
                <div className="flex flex-row">
                  {mobile.map((item, index) => (
                    <p
                      key={index}
                      className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center pt-3">
              <div className="flex flex-col">
                <h3 className="font-bold">{t('resume.skills.other')}</h3>
                <div className="flex flex-row flex-wrap">
                  {other.map((item, index) => (
                    <p
                      key={index}
                      className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* page divider */}
        <hr className="mx-auto my-4 h-1 w-full rounded border-0 bg-gray-700"></hr>
      </section>
      <section>
        <h2 className='font-bold text-2xl'>{t('resume.languages.title')}</h2>
        <section className="flex flex-row">
          <section className="flex flex-col">
            <div className="items-center pt-1">
              <div className="flex flex-row flex-wrap">
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  {t('resume.languages.norwegian')}
                </p>
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  {t('resume.languages.english')}
                </p>
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  {t('resume.languages.german')}
                </p>
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  {t('resume.languages.kurdish')}
                </p>
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  {t('resume.languages.turkish')}
                </p>
              </div>
            </div>
          </section>
        </section>
        {/* page divider */}
        <hr className="mx-auto my-4 h-1 w-full rounded border-0 bg-gray-700"></hr>
      </section>
    </div>
  );
};

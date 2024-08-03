import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import NextImage from 'next/image';
import { GetStaticProps } from 'next';
import { useTheme } from 'next-themes';

export default function Resume() {
  const { systemTheme, theme, setTheme } = useTheme();
  const iconColor = theme === 'system' ? systemTheme : theme;

  const imgUrl = '/images/portrett_1_t.png';
  const frontend = [
    'HTML5',
    'CSS3',
    'SCSS',
    'TailwindCSS',
    'JavaScript',
    'Next.js',
    'Vue.js',
    'Three.js',
  ];
  const backend = ['Ruby', 'Java', 'Python', 'Dart', 'PHP'];
  const database = ['MySQL', 'Firebase'];
  const other = ['Git', 'Jira', 'Tableau', 'AdobeXD', 'Figma', 'Microsoft Office 365'];
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
            {/* button to download CV-Sanan.pdf from public/files */}
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
                href="/files/CV-Sanan.pdf"
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

            <h2>Sanan Maarouf</h2>
            <p>System developer</p>
            <p>+47 47264992</p>
            <p>Oslo, Norway</p>
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
              dark:border-gray-600
              dark:hover:border-white
              md:hidden"
              href="/files/CV-Sanan.pdf"
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
        <h2>Experience</h2>
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
                <h3 className="font-bold">System Developer</h3>
                <h3 className="font-semibold">LAFT Software AS</h3>
                <p className="mb-3">October 2021 - March 2024</p>
              </div>
            </div>
            <div className="flex items-center pt-3">
              <div className="-ml-[0.33rem] mr-3 h-[7px] w-[7px] rounded-full bg-gray-500" />
              <div className="flex flex-col">
                <h3 className="font-bold">Cinema machinist</h3>
                <h3 className="font-semibold">Nordisk Film Kino AS</h3>
                <p className="mb-3">June 2018 - August 2018</p>
              </div>
            </div>
          </section>
        </section>
        {/* page divider */}
        <hr className="mx-auto my-4 h-1 w-full rounded border-0 bg-gray-700"></hr>
      </section>
      <section>
        <h2>Education:</h2>
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
                <h3 className="font-bold">University of South-Eastern Norway</h3>
                <h3 className="font-semibold">IT and Information Systems</h3>
                <h3 className="font-semibold">Bachelor's degree</h3>
                <p className="mb-3">August 2018 - June 2021</p>
              </div>
            </div>
            <div className="flex items-center pt-3">
              <div className="-ml-[0.33rem] mr-3 h-[7px] w-[7px] rounded-full bg-gray-500" />
              <div className="flex flex-col">
                <h3 className="font-bold">Horten High School</h3>
                <h3 className="font-semibold">General Studies</h3>
                <p className="mb-3">August 2013 - May 2016</p>
              </div>
            </div>
          </section>
        </section>
        {/* page divider */}
        <hr className="mx-auto my-4 h-1 w-full rounded border-0 bg-gray-700"></hr>
      </section>
      <section>
        <h2>Skills</h2>
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
                <h3 className="font-bold">Other</h3>
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
        <h2>Languages</h2>
        <section className="flex flex-row">
          <section className="flex flex-col">
            <div className="items-center pt-1">
              <div className="flex flex-row flex-wrap">
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  Norwegian
                </p>
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  English
                </p>
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  German
                </p>
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  Kurdish
                </p>
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  Turkish
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

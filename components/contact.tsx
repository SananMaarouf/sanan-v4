import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'next-i18next';


export const Contact = () => {
  const { t } = useTranslation();
  const [state, handleSubmit, resetForm] = useForm('mqkvqyvz');

  if (state.succeeded) {
    return (
      <div className="mt-3 text-center md:mt-0">
        <h2 className="text-3xl text-center">{t('footer.contact.title')}</h2>
        <div
          className="
          mx-auto 
          mt-1 
          max-w-xl 
          rounded-lg 
          border 
          bg-white 
          p-6 
          text-black 
          shadow-lg
          md:border-gray-100 
          "
        >
          <h2>{t('footer.contact.success.messageSent')}</h2>
          <button
            onClick={resetForm}
            className="mt-4 rounded px-4 py-2 font-bold border text-white hover:bg-gray-800 hover:border-black"
          >
            {t('footer.contact.success.sendNew')}
          </button>
        </div>
      </div>
    );
  }

  return (
    /* add flex-row when you want to implement a sitemap or another column  */
    <div className="mt-3 md:mt-0">
      <h2 className="text-center text-3xl font-semibold">{t('footer.contact.title')}</h2>
      <div className="mt-1 flex flex-col justify-center md:mt-3">
        <form
          onSubmit={handleSubmit}
          className="border-gray300 mx-auto max-w-xl rounded-2xl  border-2 border-white p-6 shadow-lg  "
        >
          <label htmlFor="email" className="mb-2 block text-sm font-bold text-white">
          {t('footer.contact.form.email')}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="focus:shadow-outline mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none "
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className="mb-2 block text-sm font-bold text-white">
          {t('footer.contact.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            className="focus:shadow-outline mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button
            type="submit"
            disabled={state.submitting}
            className="inline-flex w-full rounded-md border bg-white px-4 py-2 font-semibold text-black hover:bg-transparent hover:text-white hover:border-white"
          >
            <p className="mx-auto">
              {t('footer.contact.form.submit')}
            </p>
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </div>
    </div>
  );
};

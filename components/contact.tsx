import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {


  const [state, handleSubmit, resetForm] = useForm('mqkvqyvz');

  if (state.succeeded) {
    return (
      <div className="mt-3 text-center md:mt-0">
        <h2 className="text-3xl text-center">Contact me</h2>
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
          <h2>Message sent</h2>
          <button
            onClick={resetForm}
            className="mt-4 rounded bg-black px-4 py-2 font-bold border text-white hover:bg-gray-800 hover:border-black"
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    /* add flex-row when you want to implement a sitemap or another column  */
    <div className="mt-3 md:mt-0">
      <h2 className="text-center text-3xl font-semibold">Contact me</h2>
      <div className="mt-1 flex flex-col justify-center md:mt-3">
        <form
          onSubmit={handleSubmit}
          className="border-gray300 mx-auto max-w-xl rounded-2xl  border bg-gray-900 p-6 shadow-lg  "
        >
          <label htmlFor="email" className="mb-2 block text-sm font-bold text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="focus:shadow-outline mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none "
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className="mb-2 block text-sm font-bold text-white">
            Message
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
            className="inline-flex w-full rounded-md bg-white px-4 py-2 font-semibold text-black hover:bg-black hover:text-white"
          >
            <p className="mx-auto">Send</p>
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </div>
    </div>
  );
};

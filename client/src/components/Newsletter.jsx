import React, { useState } from "react";

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    // here you can also integrate API call (Mailchimp, Firebase, etc.)
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
      <h1 className="md:text-4xl text-2xl font-semibold">
        Never Miss a Blog!
      </h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to our newsletter to stay updated with our latest articles and insights.
      </p>

      {subscribed ? (
        <p className="text-green-600 font-medium">🎉 You’re subscribed! Check your inbox.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12"
        >
          <input
            type="email"
            aria-label="Email address"
            placeholder="Enter your email"
            required
            className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          />
          <button
            type="submit"
            className="md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;

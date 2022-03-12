import bookmark from '../public/images/logo-bookmark.svg';
import heroImg from '../public/images/hero-bg.png';
import feature1Img from '../public/images/illustration-features-tab-1.png';
import feature2Img from '../public/images/illustration-features-tab-2.png';
import feature3Img from '../public/images/illustration-features-tab-3.png';
import chromeImg from '../public/images/logo-chrome.svg';
import firefoxImg from '../public/images/logo-firefox.svg';
import operaImg from '../public/images/logo-opera.svg';
import footerLogo from '../public/images/logo-bookmark-white.png';
import Image from 'next/image';
import { FaChevronDown, FaFacebook, FaTwitter } from 'react-icons/fa';

const Index = () => {
  return (
    <div className="font-Poppins">
      <header>
        <nav className="container mt-4 flex items-center py-4 sm:mt-12">
          <div className="py-1">
            <Image src={bookmark} alt="bookmark" width={150} height={30} />
          </div>
          <ul className="hidden flex-1 items-center justify-end gap-12 text-xs uppercase text-bookmark-blue sm:flex">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <button
              type="button"
              className="rounded-md border-2 bg-bookmark-red px-7 py-3 uppercase text-white"
            >
              Login
            </button>
          </ul>
        </nav>
      </header>
      {/* <-- Hero --> */}
      <section className="relative">
        <div className="container mt-14 flex flex-col-reverse items-center gap-12 lg:mt-28 lg:flex-row">
          {/* <-- Content --> */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="md:text-4 mb-6 text-center text-3xl text-bookmark-blue lg:text-left lg:text-5xl">
              A Simple Bookmark Manager
            </h2>
            <p className="mb-6 text-center text-lg text-bookmark-grey lg:text-left">
              A clean and simple interface to organize your favourite websites. Open a new browser
              tab and see your sites load instantly. Try it for free.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                type="button"
                className="landing-btn landing-btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Get it on Chrome
              </button>
              <button
                type="button"
                className="landing-btn landing-btn-white hover:bg-bookmark-purple hover:text-white"
              >
                Get it on Firefox
              </button>
            </div>
          </div>
          {/* <-- Image --> */}
          <div className="z-10 mb-10 flex flex-1 justify-center md:mb-16 lg:mb-0">
            <Image
              className="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
              src={heroImg}
              alt=""
              aria-hidden={true}
            />
          </div>
        </div>
        {/* <-- Rounded Rectangle --> */}
        <div
          className="absolute top-32 right-0 hidden h-80 w-2/4 overflow-hidden rounded-l-full
          bg-bookmark-purple md:block lg:-bottom-28 lg:-right-36"
        ></div>
      </section>

      {/* <-- Features --> */}
      <section className="mt-20 bg-bookmark-white py-20 lg:mt-60">
        {/* <-- Heading --> */}
        <div className="mx-auto px-2 sm:w-3/4 lg:w-5/12">
          <h1 className="text-center text-3xl text-bookmark-blue">Features</h1>
          <p className="mt-4 text-center text-bookmark-grey">
            Our aim is to make it quick and easy for you to access your favourite websites. Your
            bookmarks sync between your devices so you can access them on the go.
          </p>
        </div>
        {/* <-- Feature #1 --> */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col items-center justify-center gap-x-24 lg:flex-row">
            {/* <-- Image --> */}
            <div className="z-10 mb-10 flex flex-1 justify-center lg:mb-0">
              <Image
                className="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
                src={feature1Img}
                alt=""
                aria-hidden={true}
              />
            </div>
            {/* <-- Content --> */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">Bookmark in one click</h1>
              <p className="my-4 text-center text-bookmark-grey sm:w-3/4 lg:w-full lg:text-left">
                Organize your bookmarks however you like. Our simple drag-and-drop interface gives
                you complete control over how you manage your favourite sites.
              </p>
              <button
                type="button"
                className="landing-btn landing-btn-purple hover:bg-bookmark-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>
          {/* <-- Rounded Rectangle --> */}
          <div
            className="
            absolute
            -bottom-24
            -left-36
            hidden
            h-80
            w-2/4
            overflow-hidden
            rounded-r-full
            bg-bookmark-purple
            lg:block
          "
          ></div>
        </div>
        {/* <-- Feature #2 --> */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col items-center justify-center gap-x-24 lg:flex-row-reverse">
            {/* <-- Image --> */}
            <div className="z-10 mb-10 flex flex-1 justify-center lg:mb-0">
              <Image
                className="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
                src={feature2Img}
                alt=""
                aria-hidden={true}
              />
            </div>
            {/* <-- Content --> */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">Intelligent search</h1>
              <p className="my-4 text-center text-bookmark-grey sm:w-3/4 lg:w-full lg:text-left">
                Our powerful search feature will help you find saved sites in no time at all. No
                need to crawl through all of your bookmarks.
              </p>
              <button
                type="button"
                className="landing-btn landing-btn-purple hover:bg-bookmark-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>
          {/* <-- Rounded Rectangle --> */}
          <div
            className="
            absolute
            -bottom-24
            -right-36
            hidden
            h-80
            w-2/4
            overflow-hidden
            rounded-l-full
            bg-bookmark-purple
            lg:block
          "
          ></div>
        </div>
        {/* <-- Feature #3 --> */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col items-center justify-center gap-x-24 lg:flex-row">
            {/* <-- Image --> */}
            <div className="z-10 mb-10 flex flex-1 justify-center lg:mb-0">
              <Image
                className="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
                src={feature3Img}
                alt=""
                aria-hidden={true}
              />
            </div>
            {/* <-- Content --> */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">Share your bookmarks</h1>
              <p className="my-4 text-center text-bookmark-grey sm:w-3/4 lg:w-full lg:text-left">
                Easily share your bookmarks and collections with others. Create a shareable link
                that you can send at the click of a button.
              </p>
              <button
                type="button"
                className="landing-btn landing-btn-purple hover:bg-bookmark-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>
          {/* <-- Rounded Rectangle --> */}
          <div
            className="
            absolute
            -bottom-24
            -left-36
            hidden
            h-80
            w-2/4
            overflow-hidden
            rounded-r-full
            bg-bookmark-purple
            lg:block
          "
          ></div>
        </div>
      </section>

      {/* <-- Download --> */}
      <section className="mt-20 py-20">
        {/* <-- Heading --> */}
        <div className="mx-auto px-2 sm:w-3/4 lg:w-5/12">
          <h1 className="text-center text-3xl text-bookmark-blue">Download the extension</h1>
          <p className="mt-4 text-center text-bookmark-grey">
            We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite
            you’d like us to prioritize.
          </p>
        </div>
        {/* <-- Cards --> */}
        <div className="container mt-16 grid max-w-screen-lg grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {/* <-- Card 1 --> */}
          <div className="flex flex-col rounded-md shadow-md lg:mb-16">
            <div className="flex flex-col items-center p-6">
              <Image src={chromeImg} alt="" aria-hidden={true} />
              <h3 className="mt-5 mb-2 text-lg text-bookmark-blue">Add to Chrome</h3>
              <p className="mb-2 font-light text-bookmark-grey">Minimum version 62</p>
            </div>
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="landing-btn landing-btn-purple flex-1 hover:bg-bookmark-white hover:text-black"
              >
                Add & Install Extension
              </button>
            </div>
          </div>
          {/* <-- Card 2 --> */}
          <div className="flex flex-col rounded-md shadow-md lg:my-8">
            <div className="flex flex-col items-center p-6">
              <Image src={firefoxImg} alt="" aria-hidden={true} />
              <h3 className="mt-5 mb-2 text-lg text-bookmark-blue">Add to Firefox</h3>
              <p className="mb-2 font-light text-bookmark-grey">Minimum version 62</p>
            </div>
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="landing-btn landing-btn-purple flex-1 hover:bg-bookmark-white hover:text-black"
              >
                Add & Install Extension
              </button>
            </div>
          </div>
          {/* <-- Card 3 --> */}
          <div className="flex flex-col rounded-md shadow-md lg:mt-16">
            <div className="flex flex-col items-center p-6">
              <Image src={operaImg} alt="" aria-hidden={true} />
              <h3 className="mt-5 mb-2 text-lg text-bookmark-blue">Add to Opera</h3>
              <p className="mb-2 font-light text-bookmark-grey">Minimum version 62</p>
            </div>
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="landing-btn landing-btn-purple flex-1 hover:bg-bookmark-white hover:text-black"
              >
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <-- FAQ --> */}
      <section className="bg-bookmark-white py-20">
        <div className="container">
          {/* <-- Heading --> */}
          <div className="mx-auto px-2 sm:w-3/4 lg:w-5/12">
            <h1 className="text-center text-3xl text-bookmark-blue">Frequently Asked Questions</h1>
            <p className="mt-4 text-center text-bookmark-grey">
              Here are some of our FAQs. If you have any other questions you’d like answered please
              feel free to email us.
            </p>
          </div>
          {/* <-- FAQ Items --> */}
          <div className="mx-auto mt-12 flex flex-col sm:w-3/4 lg:w-5/12">
            <div className="flex items-center border-b py-4">
              <span className="flex-1">What is a Bookmark?</span>
              <FaChevronDown className="text-bookmark-purple" />
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">How can I request a new browser?</span>
              <FaChevronDown className="text-bookmark-purple" />
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">Is there a mobile app?</span>
              <FaChevronDown className="text-bookmark-purple" />
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">What about other Chromium browsers?</span>
              <FaChevronDown className="text-bookmark-purple" />
            </div>
            <button
              type="button"
              className="landing-btn landing-btn-purple mt-12 flex self-center hover:bg-bookmark-white hover:text-black"
            >
              More Info
            </button>
          </div>
        </div>
      </section>

      {/* <-- Contact Us --> */}
      <section className="bg-bookmark-purple py-20 text-white">
        <div className="container">
          <div className="mx-auto sm:w-3/4 lg:w-2/4">
            <p className="mb-8 text-center font-light uppercase">35,000+ ALREADY JOINED</p>
            <h1 className="text-center text-3xl">Stay up-to-date with what we’re doing</h1>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row">
              <input
                type="text"
                placeholder="Enter your email address"
                className="flex-1 rounded-md px-2 py-3 text-black focus:outline-none"
              />
              <button
                type="button"
                className="landing-btn bg-bookmark-red hover:bg-bookmark-white hover:text-black"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <-- Footer --> */}
      <footer className="bg-bookmark-blue py-8">
        <div className="container flex flex-col items-center md:flex-row">
          <div className="flex flex-1 flex-wrap items-center justify-center gap-12 md:justify-start">
            <Image src={footerLogo} alt="" aria-hidden={true} />
            <ul className="flex gap-12 text-xs uppercase text-white">
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="mt-12 flex gap-10 md:mt-0">
            <FaTwitter className="text-2xl text-white" aria-hidden={true} />
            <FaFacebook className="text-2xl text-white" aria-hidden={true} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

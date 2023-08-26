'use client';
import Image from 'next/image';
import Button from './ui/Button';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('discover'); // Select grid section

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to section
    }
  };

  return (
    <section className="hero">
      <div className="padding-x flex-1 pt-36">
        <h1 className="hero__title">Find, book, or rent a car - quickly and easily!</h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking process
        </p>
        <Button
          label="Explore Cars"
          onClick={handleScroll}
          className="bg-primary-blue mt-10 rounded-full text-white"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero image" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </section>
  );
};

export default Hero;

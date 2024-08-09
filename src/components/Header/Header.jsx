import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Lexi's Luxury Dog DayCare</h2>
        <p>
          At Lexi's Luxury Dog DayCare, we realize that few things are more
          important than the health and happiness of your pets. When you leave
          your four-legged friend in the care of our highly trained and
          certified professionals, you can rest assured they will receive the
          ultimate experience.
        </p>

        <p>
          Our award-winning services for luxury doggy daycare has homelike
          amenities with recreational fun to create resort-style vacations for
          your dog, making us a top choice for those seeking the best dog
          boarding options.
        </p>

        <p>
          Not only are we highly regarded and internationally recognized, we are
          honored to have been rated the top pet care facility franchise in the
          nation by the International Boarding and Pet Services Association.
          From our cage-free dog boarding to the attentive care we provide,
          there are many reasons why veterinarians and other pet professionals
          prefer Lexi's Luxury Dog Daycare
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

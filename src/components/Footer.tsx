import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 mt-8 border-t border-gray-200">
      <p className="text-sm text-gray-600">
        {`Developed with ❤️ by Gustavo Barros da Silveira, ${currentYear}`}
      </p>
    </footer>
  );
};

export default Footer;

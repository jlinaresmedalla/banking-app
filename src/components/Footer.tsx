const Footer = ({ user }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer_name">
        <p className="text-xl font-bold text-gray-700">{user?.firstName[0]}</p>
      </div>
    </footer>
  );
};

export default Footer;
